'use client'

import { useState, useRef } from 'react'

const LimeCompanySwiper = () => {
  const [, ] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const projects = [
    { emoji: '💳', title: '신한카드 TM 시스템', desc: 'TM 시스템 보고서 메뉴 개발 (관리자용)', tech: ['Java', 'Oracle', 'JSP'] },
    { emoji: '🏦', title: 'NH 스마트뱅킹', desc: '사설인증 2자/3자 인증 개발', tech: ['Java', 'Spring', 'Security'] },
    { emoji: '📢', title: '라인 광고플랫폼', desc: '포인트 펀드 관리, 포인트 관리 시스템', tech: ['Java', 'MySQL', 'API'] },
    { emoji: '🛒', title: '롯데마트 M쿠폰', desc: '장바구니 파트 API 개발', tech: ['Java', 'Spring', 'REST API'] },
    { emoji: '🏢', title: '효성그룹 ERP', desc: '교육 결과 보고 시스템 개발', tech: ['Java', 'Oracle', 'MVC'] },
    { emoji: '🎬', title: '영화진흥위원회', desc: 'KOFIC/KOBIS 통계성 화면 신규 개발 및 유지보수', tech: ['Java', 'JSP', 'Chart.js'] }
  ]

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    e.preventDefault()
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 2
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return
    setIsDragging(true)
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return
    const x = e.touches[0].pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 2
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <div className="bg-slate-800/70 p-6 rounded-lg border border-slate-700 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">라임컴퍼니</h3>
        <span className="text-slate-400 text-sm">2019.09 - 2022.06 (2년 10개월)</span>
      </div>

      <div className="relative">
        <div
          ref={containerRef}
          className={`flex overflow-x-auto space-x-6 pb-4 scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            scrollBehavior: isDragging ? 'auto' : 'smooth',
            userSelect: 'none'
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-[200px] h-[300px] bg-slate-900/80 p-4 rounded-lg border border-slate-700 shadow-sm flex-shrink-0 flex flex-col"
              style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
            >
              <div className="flex flex-col items-center mb-4">
                <span className="text-3xl mb-2">{project.emoji}</span>
                <h4 className="text-sm font-semibold text-cyan-400 text-center leading-tight">{project.title}</h4>
              </div>
              <p className="text-slate-400 text-xs mb-4 flex-grow text-center">{project.desc}</p>
              <div className="flex flex-wrap gap-1 justify-center">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-blue-900/60 text-blue-300 px-2 py-1 rounded text-xs border border-blue-700/40">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LimeCompanySwiper
