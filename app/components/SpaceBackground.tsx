'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

const SHIPS = [
  { src: '/game-assets/ship_1.png', left: '8%',  size: 80, duration: '7s',    delay: '0s',  pixel: true },
  { src: '/game-assets/ship_2.png', left: '22%', size: 64, duration: '11s',   delay: '4s',  pixel: true },
  { src: '/game-assets/ship_3.png', left: '40%', size: 72, duration: '8.5s',  delay: '9s',  pixel: true },
  { src: '/game-assets/ship_1.png', left: '62%', size: 56, duration: '10s',   delay: '15s', pixel: true },
  { src: '/game-assets/ship_2.png', left: '80%', size: 48, duration: '12.5s', delay: '20s', pixel: true },
  { src: '/game-assets/ss_ship_2.png', left: '15%', size: 52, duration: '9s',    delay: '6s',  pixel: false },
  { src: '/game-assets/Ship_4.png',   left: '55%', size: 60, duration: '13s',   delay: '11s', pixel: false },
  { src: '/game-assets/Ship_5.png',   left: '88%', size: 44, duration: '8s',    delay: '22s', pixel: false },
]

const METEORS = [
  { src: '/game-assets/meteor.png',         left: '15%', size: 48, duration: '4.5s', delay: '2s' },
  { src: '/game-assets/flaming_meteor.png', left: '35%', size: 56, duration: '3.5s', delay: '7s' },
  { src: '/game-assets/meteor.png',         left: '58%', size: 40, duration: '5.5s', delay: '12s' },
  { src: '/game-assets/flaming_meteor.png', left: '75%', size: 52, duration: '4s',   delay: '18s' },
]

const ASTEROIDS = [
  { src: '/game-assets/Asteroid_1.png', left: '5%',  size: 64, duration: '14s', delay: '0s',  keyframe: 'space-asteroid-drift' },
  { src: '/game-assets/Asteroid_3.png', left: '28%', size: 80, duration: '18s', delay: '5s',  keyframe: 'space-asteroid-drift-rev' },
  { src: '/game-assets/Asteroid_2.png', left: '50%', size: 48, duration: '12s', delay: '10s', keyframe: 'space-asteroid-drift' },
  { src: '/game-assets/Asteroid_4.png', left: '70%', size: 72, duration: '20s', delay: '3s',  keyframe: 'space-asteroid-drift-rev' },
  { src: '/game-assets/Asteroid_5.png', left: '88%', size: 56, duration: '16s', delay: '8s',  keyframe: 'space-asteroid-drift' },
]

let explosionIdCounter = 0

type ExplosionData = { id: number; x: number; y: number }

function ExplosionEffect({ x, y, onDone }: { x: number; y: number; onDone: () => void }) {
  const [frame, setFrame] = useState(1)
  const onDoneRef = useRef(onDone)
  onDoneRef.current = onDone

  useEffect(() => {
    let current = 1
    const timer = setInterval(() => {
      current += 1
      if (current > 12) {
        clearInterval(timer)
        onDoneRef.current()
        return
      }
      setFrame(current)
    }, 55)
    return () => clearInterval(timer)
  }, [])

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/game-assets/Explosion_${frame}.png`}
      alt=""
      aria-hidden="true"
      style={{
        position: 'fixed',
        left: x - 60,
        top: y - 60,
        width: 120,
        height: 120,
        pointerEvents: 'none',
        zIndex: 30,
        filter: 'drop-shadow(0 0 12px rgba(255,160,50,0.9))',
      }}
    />
  )
}

export default function SpaceBackground() {
  const shipRefs = useRef<(HTMLImageElement | null)[]>([])
  const meteorRefs = useRef<(HTMLImageElement | null)[]>([])
  const [explosions, setExplosions] = useState<ExplosionData[]>([])
  const hiddenShips = useRef<Set<number>>(new Set())
  const hiddenMeteors = useRef<Set<number>>(new Set())
  const cooldowns = useRef<Set<string>>(new Set())
  const [showBoss, setShowBoss] = useState(false)
  // Force re-render when hidden sets change
  const [, forceUpdate] = useState(0)

  const removeExplosion = useCallback((id: number) => {
    setExplosions(prev => prev.filter(e => e.id !== id))
  }, [])

  const handleCollision = useCallback((si: number, mi: number, x: number, y: number) => {
    const key = `${si}-${mi}`
    if (cooldowns.current.has(key)) return
    cooldowns.current.add(key)

    hiddenShips.current.add(si)
    hiddenMeteors.current.add(mi)
    forceUpdate(n => n + 1)

    const id = explosionIdCounter++
    setExplosions(prev => [...prev, { id, x, y }])

    // After explosion (~800ms), restore the objects
    setTimeout(() => {
      hiddenShips.current.delete(si)
      hiddenMeteors.current.delete(mi)
      forceUpdate(n => n + 1)
      // cooldown resets after objects are visible again
      setTimeout(() => cooldowns.current.delete(key), 2000)
    }, 800)
  }, [])

  // Boss cycle: 15s wait → descend + ascend (12s) → 15s wait → repeat
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    const cycle = () => {
      timer = setTimeout(() => {
        setShowBoss(true)
        timer = setTimeout(() => {
          setShowBoss(false)
          cycle()
        }, 12000) // matches boss-patrol animation duration
      }, 15000)
    }

    cycle()
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let rafId: number

    const check = () => {
      for (let s = 0; s < shipRefs.current.length; s++) {
        const shipEl = shipRefs.current[s]
        if (!shipEl || hiddenShips.current.has(s)) continue
        const sr = shipEl.getBoundingClientRect()
        if (sr.width === 0) continue
        const sx = sr.left + sr.width / 2
        const sy = sr.top + sr.height / 2

        for (let m = 0; m < meteorRefs.current.length; m++) {
          const meteorEl = meteorRefs.current[m]
          if (!meteorEl || hiddenMeteors.current.has(m)) continue
          const mr = meteorEl.getBoundingClientRect()
          if (mr.width === 0) continue
          const mx = mr.left + mr.width / 2
          const my = mr.top + mr.height / 2

          const dist = Math.hypot(sx - mx, sy - my)
          const threshold = (sr.width + mr.width) / 2 * 0.65

          if (dist < threshold) {
            handleCollision(s, m, (sx + mx) / 2, (sy + my) / 2)
          }
        }
      }
      rafId = requestAnimationFrame(check)
    }

    rafId = requestAnimationFrame(check)
    return () => cancelAnimationFrame(rafId)
  }, [handleCollision])

  return (
    <>
      <div
        className="fixed inset-0 -z-10 overflow-hidden"
        style={{
          backgroundImage: `url('/game-assets/background_star.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#0a0f1e',
        }}
      >
        {/* Stars overlay for depth */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url('/game-assets/stars.png')`,
            backgroundRepeat: 'repeat',
            imageRendering: 'pixelated',
          }}
        />

        {/* Animated ships — bottom to top */}
        {SHIPS.map((ship, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={`ship-${i}`}
            ref={el => { shipRefs.current[i] = el }}
            src={ship.src}
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: ship.left,
              bottom: 0,
              width: ship.size,
              height: 'auto',
              imageRendering: ship.pixel ? 'pixelated' : 'auto',
              animation: `space-fly-up ${ship.duration} linear ${ship.delay} infinite`,
              opacity: hiddenShips.current.has(i) ? 0 : 0.85,
              transition: 'opacity 0.1s',
            }}
          />
        ))}

        {/* Animated meteors */}
        {METEORS.map((meteor, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={`meteor-${i}`}
            ref={el => { meteorRefs.current[i] = el }}
            src={meteor.src}
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: meteor.left,
              top: 0,
              width: meteor.size,
              height: 'auto',
              imageRendering: 'pixelated',
              animation: `space-fly-diagonal ${meteor.duration} linear ${meteor.delay} infinite`,
              opacity: hiddenMeteors.current.has(i) ? 0 : 0.75,
              transition: 'opacity 0.1s',
            }}
          />
        ))}

        {/* Mega boss — appears after 10s, descends from top flipped */}
        {showBoss && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/game-assets/Mega_boss.png"
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              marginLeft: -120,
              width: 240,
              height: 'auto',
              animation: 'boss-patrol 12s ease-in-out forwards',
              zIndex: 2,
              filter: 'drop-shadow(0 0 20px rgba(255,80,80,0.8))',
            }}
          />
        )}

        {/* Animated asteroids — drift diagonally with rotation */}
        {ASTEROIDS.map((asteroid, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={`asteroid-${i}`}
            src={asteroid.src}
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: asteroid.left,
              top: 0,
              width: asteroid.size,
              height: 'auto',
              animation: `${asteroid.keyframe} ${asteroid.duration} linear ${asteroid.delay} infinite`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      {/* Explosions rendered outside -z-10 stacking context */}
      {explosions.map(e => (
        <ExplosionEffect
          key={e.id}
          x={e.x}
          y={e.y}
          onDone={() => removeExplosion(e.id)}
        />
      ))}
    </>
  )
}
