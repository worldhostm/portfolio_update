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
            <div className="mt-12">
              <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-500 shadow-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&auto=format"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if(e.currentTarget.parentElement) e.currentTarget.parentElement.innerHTML = '<div class="text-white text-6xl">👨‍💻</div>';
                  }}
                />
              </div>
            </div>
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
                    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4 text-3xl">
                    🕷️
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">웹 크롤러</h3>
                    <span className="text-sm text-blue-600 font-medium">2024.08 ~ 진행중</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">개발 진행중</span>
                </div>
                <p className="text-gray-600 mt-4 text-center">
                  효율적인 데이터 수집을 위한 고성능 웹 크롤링 시스템
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {['Python', 'Selenium', 'BeautifulSoup'].map((tech, i) => (
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
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600">
                💡 새로운 기술과 트렌드를 적극적으로 학습하며 개인 프로젝트를 통해 실무 역량을 향상시키고 있습니다.
              </p>
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