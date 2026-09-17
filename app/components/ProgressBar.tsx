'use client'

import { useEffect, useState } from 'react'

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = totalHeight > 0 ? (window.pageYOffset / totalHeight) * 100 : 0
      setScrollProgress(currentProgress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-[72px] left-0 right-0 h-8 z-40 flex items-center px-2"
      style={{ background: 'rgba(10,15,30,0.7)' }}
    >
      {/* Track */}
      <div className="relative w-full h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }}>
        {/* Filled trail */}
        <div
          className="absolute top-0 left-0 h-full rounded-full transition-all duration-150 ease-out"
          style={{
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, rgba(6,182,212,0.6) 0%, rgba(6,182,212,0.9) 100%)',
          }}
        />

        {/* Ship image riding the bar */}
        <div
          className="absolute top-1/2 transition-all duration-150 ease-out"
          style={{
            left: `${scrollProgress}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/game-assets/ship_1.png"
            alt="progress ship"
            style={{
              width: 32,
              height: 'auto',
              imageRendering: 'pixelated',
              filter: 'drop-shadow(0 0 6px rgba(6,182,212,0.9))',
              transform: 'rotate(90deg)',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
