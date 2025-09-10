'use client'

import { useEffect, useState, useRef } from 'react'

// Add custom CSS for scrollbar hiding
const globalStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }
`

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('about')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center space-x-8 py-4">
          {[
            { id: 'about', label: 'About' },
            { id: 'skills', label: 'Skills' },
            { id: 'projects', label: 'Projects' },
            { id: 'contact', label: 'Contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeSection === item.id
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.pageYOffset / totalHeight) * 100
      setScrollProgress(currentProgress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed bottom-0 left-0 right-0 h-2 bg-gray-200 z-50">
      <div 
        className="h-full bg-blue-500 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}

const SideNavigation = () => {
  const [activeSection, setActiveSection] = useState('about')

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'personal-projects', label: 'Personal' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative"
            aria-label={section.label}
          >
            <div 
              className={`rounded-full transition-all duration-500 ease-in-out ${
                activeSection === section.id 
                  ? 'w-8 h-3 bg-blue-500' 
                  : 'w-3 h-3 bg-gray-300 hover:bg-blue-300'
              }`}
            />
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap">
                {section.label}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

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
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">라임컴퍼니</h3>
        <span className="text-gray-500 text-sm">2019.09 - 2022.06 (2년 10개월)</span>
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
              className="min-w-[200px] h-[300px] bg-white p-4 rounded-lg shadow-sm flex-shrink-0 flex flex-col"
              style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
            >
              <div className="flex flex-col items-center mb-4">
                <span className="text-3xl mb-2">{project.emoji}</span>
                <h4 className="text-sm font-semibold text-blue-600 text-center leading-tight">{project.title}</h4>
              </div>
              <p className="text-gray-700 text-xs mb-4 flex-grow text-center">{project.desc}</p>
              <div className="flex flex-wrap gap-1 justify-center">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <style jsx global>{globalStyles}</style>
      <Navigation />
      <SideNavigation />
      <ProgressBar />
      
      <div className="pt-20">
        {/* About Section */}
        <section id="about" className="min-h-screen bg-white flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-12">
              <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-500 shadow-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="/profile_cho.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if(e.currentTarget.parentElement) e.currentTarget.parentElement.innerHTML = '<div class="text-white text-6xl">👨‍💻</div>';
                  }}
                />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Me</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              안녕하세요! 저는 끊임없이 성장하는 풀스택 개발자입니다. 🚀<br />
              현재 금융, AI, ESG 도메인에서 사용자 중심의 웹 서비스를 개발하고 있으며,<br />
              Web3, AI/ML, 클라우드 네이티브 기술 등 미래 지향적인 기술 스택을 학습하며<br />
              새로운 도전을 통해 더 나은 개발자로 발전하고자 합니다.
            </p>
            <p className="text-lg text-gray-500">
              &quot;기술은 사람을 위해 존재한다&quot;는 철학으로 더 나은 사용자 경험을 만들어갑니다.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { 
                  name: 'Frontend', 
                  skills: [
                    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
                    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' }
                  ] 
                },
                { 
                  name: 'Backend', 
                  skills: [
                    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
                    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
                    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
                  ] 
                },
                { 
                  name: 'Tools', 
                  skills: [
                    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
                    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
                    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
                    { name: 'Claude', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/anthropic.svg' },
                    { name: 'ChatGPT', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg' }
                  ] 
                }
              ].map((category, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">{category.name}</h3>
                  <ul className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center text-gray-700 text-lg">
                        <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mr-4">
                          <img 
                            src={skill.icon} 
                            alt={skill.name}
                            className="w-8 h-8"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                        <span className="font-medium">{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen bg-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Projects & Career</h2>
            
            {/* Current Position */}
            <div className="mb-16">
              <div className="bg-blue-50 p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">주식회사 찬스웨이브커뮤니케이션</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">현재 재직중</span>
                </div>
                <p className="text-gray-600 mb-6">2024.02 ~ 현재 (1년 6개월) • 정규직</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 text-2xl">
                        🏦
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">하나은행 놀이터 API 개발</h4>
                    </div>
                    <p className="text-sm text-blue-600 mb-3">백엔드 선임연구원</p>
                    <p className="text-gray-700 mb-4">OAuth 기반 토큰 발급 API와 최신 뉴스 데이터 API 개발</p>
                    <div className="flex flex-wrap gap-2">
                      {['OAuth', 'API Development', 'Backend'].map((tech, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 text-2xl">
                        💰
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">하나원큐 놀이터 머니트렌드 웹뷰</h4>
                    </div>
                    <p className="text-sm text-blue-600 mb-3">프론트 선임매니저</p>
                    <p className="text-gray-700 mb-4">금융 콘텐츠 에디터 개발 및 웹뷰 프론트/백엔드 개발</p>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'TypeScript', 'Tiptap', 'MongoDB', 'Redis'].map((tech, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 text-2xl">
                        🤖
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">AI 서비스 검색 MVP</h4>
                    </div>
                    <p className="text-sm text-blue-600 mb-3">프론트 선임매니저</p>
                    <p className="text-gray-700 mb-4">AI 서비스 카테고리별 랭킹 및 검색 기능, SEO 최적화</p>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'TypeScript', 'SEO'].map((tech, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">{tech}</span>
                      ))}
                    </div>
                    <a href="http://31ais.com" className="text-blue-500 hover:underline text-sm block mt-2">31ais.com →</a>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 text-2xl">
                        🌱
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">퍼핏랩 ESG 데이터 플랫폼</h4>
                    </div>
                    <p className="text-sm text-blue-600 mb-3">프론트 선임매니저</p>
                    <p className="text-gray-700 mb-4">ESG 공공/민간 데이터, 뉴스, 랭킹 제공 사이트 (반응형)</p>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'TypeScript', 'Zustand', 'MongoDB', 'SEO'].map((tech, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">{tech}</span>
                      ))}
                    </div>
                    <a href="https://pufit.kr" className="text-blue-500 hover:underline text-sm block mt-2">pufit.kr →</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Previous Experience */}
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">주식회사 팬시플레이스</h3>
                  <span className="text-gray-500 text-sm">2023.02 - 2023.07 (6개월)</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-xl mr-2">🪙</span>
                  <h4 className="text-lg text-blue-600">펜시 월렛 고도화 개발</h4>
                </div>
                <p className="text-gray-700 mb-3">PHP 기반 펜시 월렛 하이브리드 앱을 React, GraphQL로 고도화</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'GraphQL', 'Hybrid App'].map((tech, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">{tech}</span>
                  ))}
                </div>
              </div>

              <LimeCompanySwiper />
            </div>
          </div>
        </section>

        {/* Personal Projects Section */}
        <section id="personal-projects" className="min-h-screen bg-gray-100 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">현재 개인 프로젝트 진행</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mr-4 text-3xl">
                    🍽️
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">캐치테이블 벤치마킹 사이트</h3>
                    <span className="text-sm text-orange-600 font-medium">2024.07 ~ 진행중</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">개발 진행중</span>
                </div>
                <p className="text-gray-600 mt-4 text-center">
                  레스토랑 예약 서비스의 사용자 경험을 개선한 웹 플랫폼
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {['React', 'Next.js', 'TypeScript'].map((tech, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mr-4 text-3xl">
                    🌍
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">탄소 감축 SaaS 플랫폼</h3>
                    <span className="text-sm text-green-600 font-medium">2024.07 ~ 진행중</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">개발 진행중</span>
                </div>
                <p className="text-gray-600 mt-4 text-center">
                  기업의 탄소 배출량 관리 및 감축을 위한 통합 솔루션
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {['React', 'Node.js', 'MongoDB', 'D3.js'].map((tech, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mr-4 text-3xl">
                    📱
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">위치기반 심부름 플랫폼 하이브리드 웹앱</h3>
                    <span className="text-sm text-purple-600 font-medium">2024.08 ~ 진행중</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">개발 진행중</span>
                </div>
                <p className="text-gray-600 mt-4 text-center">
                  일상 생활의 심부름을 쉽게 요청하고 처리할 수 있는 모바일 플랫폼
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {['React Native', 'Node.js', 'MongoDB', 'Socket.io'].map((tech, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-cyan-100 rounded-xl flex items-center justify-center mr-4 text-3xl">
                    <img src="/ai-image-generator.png" alt="AI 이미지 생성기" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">AI 이미지 생성기</h3>
                    <span className="text-sm text-cyan-600 font-medium">2024.09 ~ 진행중</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <span className="bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium">개발 진행중</span>
                </div>
                <p className="text-gray-600 mt-4 text-center">
                  텍스트 프롬프트로 고품질 AI 이미지를 생성하는 웹 애플리케이션
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {['Next.js 15', 'React 19', 'TypeScript', 'Redux Toolkit', 'Replicate API'].map((tech, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mr-4 text-3xl">
                    {/* 이미지 공간 */}
                    🎤
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">음성 비서 AI - 스마트 일정/메모 관리</h3>
                    <span className="text-sm text-emerald-600 font-medium">2024.09 ~ 진행중</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">개발 진행중</span>
                </div>
                <p className="text-gray-600 mt-4 text-center">
                  Web Speech API 기반 음성 인식 웹 애플리케이션
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {['Next.js 15.5.2', 'React 18', 'TypeScript', 'Zustand', 'Web Speech API'].map((tech, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600">
                💡 새로운 기술과 하나원큐 놀이터 머니트렌드 웹뷰트렌드를 적극적으로 학습하며 개인 프로젝트를 통해 실무 역량을 향상시키고 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 진행 중인 개인 프로젝트 Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">진행 중인 개인 프로젝트</h2>
            
            {/* Map API 기반 심부름 플랫폼 */}
            <div className="mb-16">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  {/* 프로젝트 이미지 */}
                  <div className="flex-shrink-0">
                    <img 
                      src="/project2.png"
                      alt="지도 API 기반 심부름 플랫폼"
                      className="max-w-full h-auto rounded-lg shadow-md"
                      style={{ maxHeight: '400px', maxWidth: '500px' }}
                      onError={(e) => {
                        // 이미지 로드 실패시 대체 콘텐츠 표시
                        e.currentTarget.style.display = 'none';
                        if(e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerHTML = '<div class="flex items-center justify-center bg-gray-100 rounded-lg p-8 w-96 h-64"><span class="text-4xl">🗺️</span><span class="ml-4 text-gray-600">지도 기반 플랫폼</span></div>';
                        }
                      }}
                    />
                  </div>
                  
                  {/* 프로젝트 설명 */}
                  <div className="flex-grow">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 text-2xl">
                        📍
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">지도 API 기반 심부름 플랫폼</h3>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">개발 진행중</span>
                      <span className="ml-3 text-gray-500 text-sm">2024.08 ~ 현재</span>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <p className="text-gray-700 text-lg font-semibold">위치 기반 심부름 매칭 서비스</p>
                      <ul className="text-gray-600 space-y-2 list-disc list-inside">
                        <li>실시간 지도 API를 활용한 위치 기반 심부름 요청/수행 매칭</li>
                        <li>GPS 기반 주변 심부름 검색 및 거리별 정렬 기능</li>
                        <li>사용 안전성을 위한 사용자 인증 도입 ( 예정 )</li>
                        <li>결제 시스템 및 리뷰 평점 관리 ( 예정 )</li>
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">React Native</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Node.js</span>
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">MongoDB</span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Socket.io</span>
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">Kakao Map API</span>
                      <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">GPS</span>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-blue-800 text-sm">
                        <strong>💡 주요 특징:</strong> 일상생활에서 필요한 다양한 심부름(배달, 대행, 구매 등)을 
                        지도 기반으로 쉽게 요청하고 처리할 수 있는 O2O 플랫폼을 개발 중입니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* ERP 제조관리 시스템 */}
            <div className="mb-16">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <img src="/privatepjt2.png" alt="ERP 제조관리 시스템" className="max-w-full h-auto rounded-lg shadow-md" style={{ maxHeight: '400px', maxWidth: '500px' }} />                  
                  {/* 프로젝트 설명 */}
                  <div className="flex-grow">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 text-2xl">
                        ⚙️
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">ERP 제조관리 시스템 (Full-Stack Web Application)</h3>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">개발 진행중</span>
                      <span className="ml-3 text-gray-500 text-sm">2024.09 ~ 현재</span>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="text-gray-700 text-lg font-semibold mb-2">기술 스택:</p>
                        <ul className="text-gray-600 space-y-1 list-disc list-inside ml-4">
                          <li><strong>Frontend:</strong> Next.js 14, TypeScript, Tailwind CSS, Zustand</li>
                          <li><strong>Backend:</strong> Node.js, Express.js, TypeScript</li>
                          <li><strong>Database:</strong> MongoDB (Mongoose ODM)</li>
                          <li><strong>Authentication:</strong> JWT, bcrypt</li>
                          <li><strong>File Processing:</strong> ExcelJS, jsPDF</li>
                          <li><strong>Testing:</strong> Jest, Supertest, Playwright</li>
                        </ul>
                      </div>
                      
                      <div>
                        <p className="text-gray-700 text-lg font-semibold mb-2">주요 기능:</p>
                        <ul className="text-gray-600 space-y-1 list-disc list-inside ml-4">
                          <li>사용자 관리 (Admin/Manager/User 권한)</li>
                          <li>재고 관리 및 실시간 추적</li>
                          <li>생산 계획 및 작업 지시서 관리</li>
                          <li>구매 요청 및 발주 관리</li>
                          <li>품질 검사 및 품질 관리</li>
                          <li>회계 및 리포팅 (Excel/PDF 출력)</li>
                          <li>대시보드 및 데이터 시각화</li>
                        </ul>
                      </div>
                      
                      <div>
                        <p className="text-gray-700 text-lg font-semibold mb-2">특징:</p>
                        <ul className="text-gray-600 space-y-1 list-disc list-inside ml-4">
                          <li>RESTful API 설계</li>
                          <li>JWT 기반 인증/인가</li>
                          <li>MongoDB 인덱싱 최적화</li>
                          <li>TypeScript 타입 안정성</li>
                          <li>반응형 UI/UX</li>
                          <li>실시간 데이터 처리</li>
                          <li>다중 사용자 권한 관리</li>
                          <li>엑셀 데이터 Import/Export</li>
                        </ul>
                      </div>
                      
                      <div>
                        <p className="text-gray-700 text-lg font-semibold mb-2">개발 환경:</p>
                        <ul className="text-gray-600 space-y-1 list-disc list-inside ml-4">
                          <li>개발서버: Concurrently로 Frontend/Backend 동시 실행</li>
                          <li>테스트: 단위/통합/E2E 테스트 구축</li>
                          <li>시드 데이터: 개발용 샘플 데이터 자동 생성</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Next.js 14</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">TypeScript</span>
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">MongoDB</span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Express.js</span>
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">JWT</span>
                      <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">Zustand</span>
                      <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">ExcelJS</span>
                    </div>
                    
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="text-indigo-800 text-sm">
                        <strong>💡 주요 특징:</strong> 제조업체의 전체 운영 프로세스를 디지털화하여 효율적인 생산 관리, 
                        재고 추적, 품질 관리를 통합적으로 제공하는 풀스택 ERP 시스템을 개발 중입니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* AI 이미지 생성기 상세 정보 */}
            <div className="mb-16">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  {/* 프로젝트 이미지 */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg p-8 w-96 h-64">
                      <div className="text-center text-white">
                        {/* <span className="text-6xl">🎨</span> */}
                        <img src="/ai-image-generator.png" alt="AI 이미지 생성기" className="w-full h-full object-cover" />
                        <p className="mt-4 text-lg font-semibold">AI 이미지 생성기</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* 프로젝트 설명 */}
                  <div className="flex-grow">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mr-4 text-2xl">
                        🤖
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">AI 이미지 생성기 (Text-to-Image Generator)</h3>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">개발 진행중</span>
                      <span className="ml-3 text-gray-500 text-sm">2024.09 ~ 현재</span>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="text-gray-700 text-lg font-semibold mb-2">기술 스택:</p>
                        <ul className="text-gray-600 space-y-1 list-disc list-inside ml-4">
                          <li><strong>Frontend:</strong> Next.js 15, React 19, TypeScript</li>
                          <li><strong>상태관리:</strong> Redux Toolkit</li>
                          <li><strong>스타일링:</strong> Tailwind CSS</li>
                          <li><strong>AI API:</strong> Replicate API (Stable Diffusion)</li>
                        </ul>
                      </div>
                      
                      <div>
                        <p className="text-gray-700 text-lg font-semibold mb-2">핵심 기능:</p>
                        <ul className="text-gray-600 space-y-1 list-disc list-inside ml-4">
                          <li>텍스트 프롬프트 기반 AI 이미지 생성 (512x512 고해상도)</li>
                          <li>NSFW 콘텐츠 자동 차단 및 안전 필터링 시스템</li>
                          <li>Redux Toolkit을 활용한 전역 상태 관리</li>
                          <li>실시간 로딩 상태 표시 및 에러 핸들링</li>
                          <li>생성된 이미지 히스토리 관리 및 그리드 뷰</li>
                          <li>반응형 모던 UI (모바일/데스크톱 지원)</li>
                        </ul>
                      </div>
                      
                      <div>
                        <p className="text-gray-700 text-lg font-semibold mb-2">주요 특징:</p>
                        <ul className="text-gray-600 space-y-1 list-disc list-inside ml-4">
                          <li>Stable Diffusion 모델을 통한 고품질 이미지 생성</li>
                          <li>다중 검증 시스템으로 안전한 콘텐츠 보장</li>
                          <li>직관적인 사용자 인터페이스</li>
                          <li>상황별 구체적인 에러 메시지 제공</li>
                          <li>그라디언트 배경의 모던한 디자인</li>
                          <li>풀사이즈 이미지 새 탭 열기 기능</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Next.js 15</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">React 19</span>
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">TypeScript</span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Redux Toolkit</span>
                      <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                      <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Replicate API</span>
                    </div>
                    
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="text-cyan-800 text-sm">
                        <strong>💡 주요 특징:</strong> 사용자가 입력한 텍스트 프롬프트를 바탕으로 Stable Diffusion AI 모델을 활용하여 
                        고품질의 이미지를 생성하는 웹 애플리케이션입니다. NSFW 필터링과 안전 검증 시스템으로 안전한 콘텐츠 생성을 보장합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 음성 비서 AI 상세 정보 */}
            <div className="mb-16">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  {/* 프로젝트 이미지 */}
                  <div className="flex-shrink-0">
                    <img src="/secretaryai.png" alt="음성 비서 AI" className="w-100 h-auto rounded-lg" />
                  </div>
                  {/* 프로젝트 설명 */}
                  <div className="flex-grow">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 text-2xl">
                        🗣️
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">음성 비서 AI - 스마트 일정/메모 관리 시스템</h3>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">개발 진행중</span>
                      <span className="ml-3 text-gray-500 text-sm">2024.09 ~ 현재</span>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="text-gray-700 text-lg font-semibold mb-2">🛠 주요 기술 스택:</p>
                        <ul className="text-gray-600 space-y-1 list-disc list-inside ml-4">
                          <li><strong>Frontend:</strong> Next.js 15.5.2, React 18, TypeScript</li>
                          <li><strong>상태관리:</strong> Zustand (경량 상태 관리)</li>
                          <li><strong>스타일링:</strong> Tailwind CSS, Lucide React</li>
                          <li><strong>브라우저 API:</strong> Web Speech API (Speech Recognition/Synthesis)</li>
                          <li><strong>데이터:</strong> localStorage 기반 클라이언트 사이드 저장</li>
                        </ul>
                      </div>
                      
                      <div>
                        <p className="text-gray-700 text-lg font-semibold mb-2">⚡ 핵심 기능 및 구현:</p>
                        <ul className="text-gray-600 space-y-1 list-disc list-inside ml-4">
                          <li>실시간 음성 인식: 한국어 음성을 실시간으로 텍스트 변환</li>
                          <li>자연어 처리: 정규표현식 기반으로 "내일 오후 3시 회의" 등의 자연스러운 표현 해석</li>
                          <li>음성 피드백: Text-to-Speech로 처리 결과를 음성으로 응답</li>
                          <li>데이터 영속성: localStorage를 통한 일정/메모 데이터 관리</li>
                          <li>반응형 UI: 모바일부터 데스크톱까지 최적화된 인터페이스</li>
                        </ul>
                      </div>
                      
                      <div>
                        <p className="text-gray-700 text-lg font-semibold mb-2">🎯 기술적 도전과 해결:</p>
                        <ul className="text-gray-600 space-y-1 list-disc list-inside ml-4">
                          <li>브라우저 호환성: Web Speech API 지원 여부 체크 및 fallback 처리</li>
                          <li>SSR 이슈: Next.js 서버사이드에서 window 객체 접근 문제 해결</li>
                          <li>실시간 상태 관리: Zustand로 음성 인식 상태와 UI 동기화</li>
                          <li>자연어 파싱: 다양한 한국어 시간/날짜 표현을 코드로 해석하는 알고리즘 구현</li>
                        </ul>
                      </div>
                      
                      <div>
                        <p className="text-gray-700 text-lg font-semibold mb-2">📈 프로젝트 성과:</p>
                        <ul className="text-gray-600 space-y-1 list-disc list-inside ml-4">
                          <li>모던 웹 기술과 브라우저 네이티브 API를 결합한 사용자 친화적 음성 인터페이스 구현</li>
                          <li>TypeScript를 통한 타입 안전성 확보와 모듈화된 아키텍처로 확장 가능한 코드 구조 설계</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">Next.js 15.5.2</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">React 18</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">TypeScript</span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Zustand</span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Web Speech API</span>
                      <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                    </div>
                    
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="text-emerald-800 text-sm">
                        <strong>💡 주요 특징:</strong> 브라우저의 네이티브 음성 API를 활용하여 사용자가 자연스러운 한국어로 일정 등록과 메모 작성을 할 수 있는 스마트 음성 비서입니다.
                        실시간 음성-텍스트 변환, 자연어 처리, 그리고 음성 피드백까지 제공하는 완전한 음성 인터페이스를 구현했습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Contact</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-6xl mb-6">👋</div>
              <p className="text-xl text-gray-600 mb-8">
                프로젝트나 협업에 대해 문의하고 싶으시다면 언제든 연락주세요!<br />
                새로운 기술과 도전적인 프로젝트를 함께 만들어가요! 🤝
              </p>
              <div className="space-y-6">
                <div className="flex items-center justify-center bg-gray-50 p-4 rounded-lg">
                  <span className="text-2xl mr-3">📧</span>
                  <span className="text-gray-700 font-medium mr-2">이메일:</span>
                  <a href="mailto:chos1909@gmail.com" className="text-blue-600 hover:underline">chos1909@gmail.com</a>
                </div>
                <div className="flex items-center justify-center bg-gray-50 p-4 rounded-lg">
                  <span className="text-2xl mr-3">📱</span>
                  <span className="text-gray-700 font-medium mr-2">전화번호:</span>
                  <a href="tel:010-4093-9680" className="text-blue-600 hover:underline">010-4093-9680</a>
                </div>
              </div>
              <div className="mt-8 flex justify-center space-x-4">
                <a 
                  href="https://github.com/worldhostm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors flex items-center"
                >
                  <span className="mr-2">⭐</span>
                  GitHub
                </a>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                  <span className="mr-2">💼</span>
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}