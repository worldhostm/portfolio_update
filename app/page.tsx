'use client'

import Image from 'next/image'
import Navigation from './components/Navigation'
import ProgressBar from './components/ProgressBar'
import SideNavigation from './components/SideNavigation'
import LimeCompanySwiper from './components/LimeCompanySwiper'

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
              <div className="relative w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-500 shadow-lg overflow-hidden">
                <Image
                  src="/profile_cho.jpeg"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Me</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              안녕하세요, 조성민입니다.<br />
              금융·ESG·AI 도메인에서 실무 경험을 쌓아온 풀스택 개발자입니다.<br />
              하나은행 OAuth API 개발과 하나원큐 머니트렌드 웹뷰 구축을 시작으로,<br />
              현재는 i-ESG에서 6개 국제 ESG 진단 서비스의 백엔드(Java Spring Boot)와<br />
              프론트엔드(Next.js, TypeScript)를 함께 담당하며 프로덕션 서비스를 운영하고 있습니다.
            </p>
            <p className="text-lg text-gray-500">
              2년간 완성되지 못한 프로젝트를 인수해 4개월 만에 안정화한 경험처럼,<br />
              어려운 상황에서도 끝까지 해결책을 찾아내는 개발자입니다.
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
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={32}
                            height={32}
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).style.display = 'none';
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
            
            {/* Current Position - i-ESG */}
            <div className="mb-16">
              <div className="bg-emerald-50 p-8 rounded-xl shadow-lg border-l-4 border-emerald-500">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">주식회사 아이이에스지 (i-ESG)</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">현재 재직중</span>
                </div>
                <p className="text-gray-600 mb-6">2025.10 ~ 현재 • 정규직</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 text-2xl">
                        📊
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">ESG 진단·평가 플랫폼</h4>
                    </div>
                    <p className="text-sm text-emerald-600 mb-3">풀스택 개발자</p>
                    <p className="text-gray-700 mb-4">프로덕션 운영 중인 6개 진단 서비스(KOSA, GDIN, UNGC, EU, UAE, CU)의 프론트엔드·백엔드 담당</p>
                    <div className="space-y-2 mb-4">
                      <div className="text-sm text-gray-700">
                        <span className="font-semibold">벤치마크 백분위 랭킹:</span> SQL 윈도우 함수(CUME_DIST, PERCENT_RANK)로 기업별 상대 순위 산출
                      </div>
                      <div className="text-sm text-gray-700">
                        <span className="font-semibold">점수 구간 히스토그램:</span> WITH RECURSIVE + CROSS JOIN으로 점수 구간 구성, 결측 구간도 0으로 채워 연속성 보장
                      </div>
                      <div className="text-sm text-gray-700">
                        <span className="font-semibold">섹션 점수 분포 집계:</span> Java Stream API와 가중 점수 산식으로 섹션 단위 점수 분포 집계, Optional 기반 null-safety 적용
                      </div>
                      <div className="text-sm text-gray-700">
                        <span className="font-semibold">시각화:</span> ECharts 레이더/도넛 차트로 진단 결과 리포트 구현
                      </div>
                      <div className="text-sm text-gray-700">
                        <span className="font-semibold">API 마이그레이션:</span> 주소 우편번호 라이브러리를 Google Places API로 마이그레이션
                      </div>
                      <div className="text-sm text-gray-700">
                        <span className="font-semibold">전자서명 라이브러리:</span> Canvas 기반 렌더링, core/react 패키지 분리로 자체 설계
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Java', 'Spring Boot', 'MySQL', 'Next.js', 'TypeScript', 'ECharts', 'Canvas API', 'Google Places API'].map((tech, i) => (
                        <span key={i} className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 text-2xl">
                        🔗
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">SCM 공급망 관리 시스템</h4>
                    </div>
                    <p className="text-sm text-emerald-600 mb-3">프론트엔드 개발자</p>
                    <p className="text-gray-700 mb-3">공급사 대상 ESG 설문을 생성·배포·운영하는 공급망 관리 플랫폼 프론트엔드 개발</p>
                    <div className="bg-blue-50 border-l-3 border-blue-400 p-3 rounded mb-4">
                      <p className="text-blue-800 text-sm font-medium">약 2년간 완성되지 못한 프로젝트를 인수해 4개월 만에 리뉴얼 완성 및 안정화</p>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="text-sm text-gray-700">
                        <span className="font-semibold">설문 생성 및 대상 설정:</span> 설문 생성, 응답 대상 공급사 지정, 담당자 배정 화면 개발
                      </div>
                      <div className="text-sm text-gray-700">
                        <span className="font-semibold">다국어 번역 및 이메일:</span> 설문 다국어(i18n) 번역 UI, 발송 이메일 작성 화면 개발
                      </div>
                      <div className="text-sm text-gray-700">
                        <span className="font-semibold">설문 대시보드:</span> 응답·미응답 기업 현황, 설문 참여율, 담당자 변경, 설문 재요청 및 개선 메일 발송 기능 구현
                      </div>
                      <div className="text-sm text-gray-700">
                        <span className="font-semibold">설문 응답 화면:</span> Zod 스키마 기반 유효성 검사 적용, 다양한 문항 타입 렌더링
                      </div>
                      <div className="text-sm text-gray-700">
                        <span className="font-semibold">공급사 관리:</span> 공급사 추가·조회 화면 개발
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Next.js', 'TypeScript', 'Zod', 'i18n', 'React Hook Form'].map((tech, i) => (
                        <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 찬스웨이브 */}
            <div className="mb-16">
              <div className="bg-blue-50 p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">주식회사 찬스웨이브커뮤니케이션</h3>
                  <span className="text-gray-500 text-sm">2024.02 - 2025.09</span>
                </div>
                <p className="text-gray-600 mb-6">정규직</p>

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
                  <div className="relative w-16 h-16 bg-cyan-100 rounded-xl overflow-hidden mr-4">
                    <Image src="/ai-image-generator.png" alt="AI 이미지 생성기" fill className="object-cover" />
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
                    <Image
                      src="/project2.png"
                      alt="지도 API 기반 심부름 플랫폼"
                      width={500}
                      height={400}
                      className="rounded-lg shadow-md"
                      style={{ maxWidth: '500px', height: 'auto' }}
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
            {false && (
            <div className="mb-16">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <Image src="/privatepjt2.png" alt="ERP 제조관리 시스템" width={500} height={400} className="rounded-lg shadow-md" style={{ maxWidth: '500px', height: 'auto' }} />
                  <div className="flex-grow">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 text-2xl">⚙️</div>
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
            )}

            {/* AI 이미지 생성기 상세 정보 */}
            {false && (
            <div className="mb-16">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg p-8 w-96 h-64">
                      <div className="text-center text-white">
                        <Image src="/ai-image-generator.png" alt="AI 이미지 생성기" width={300} height={180} className="object-cover rounded" />
                        <p className="mt-4 text-lg font-semibold">AI 이미지 생성기</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mr-4 text-2xl">🤖</div>
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
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Next.js 15</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">React 19</span>
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">TypeScript</span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Redux Toolkit</span>
                      <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Replicate API</span>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <p className="text-cyan-800 text-sm">
                        <strong>💡 주요 특징:</strong> 텍스트 프롬프트로 Stable Diffusion AI 모델을 활용해 고품질 이미지를 생성하는 웹 애플리케이션입니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )}

            {/* 음성 비서 AI 상세 정보 */}
            {false && (
            <div className="mb-16">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <Image src="/secretaryai.png" alt="음성 비서 AI" width={400} height={300} className="rounded-lg h-auto" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 text-2xl">🗣️</div>
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
                          <li><strong>상태관리:</strong> Zustand</li>
                          <li><strong>스타일링:</strong> Tailwind CSS, Lucide React</li>
                          <li><strong>브라우저 API:</strong> Web Speech API (Speech Recognition/Synthesis)</li>
                          <li><strong>데이터:</strong> localStorage 기반 클라이언트 사이드 저장</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-gray-700 text-lg font-semibold mb-2">⚡ 핵심 기능 및 구현:</p>
                        <ul className="text-gray-600 space-y-1 list-disc list-inside ml-4">
                          <li>실시간 음성 인식: 한국어 음성을 실시간으로 텍스트 변환</li>
                          <li>자연어 처리: 정규표현식 기반으로 자연스러운 표현 해석</li>
                          <li>음성 피드백: Text-to-Speech로 처리 결과를 음성으로 응답</li>
                          <li>데이터 영속성: localStorage를 통한 일정/메모 데이터 관리</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">Next.js 15.5.2</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">React 18</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">TypeScript</span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Zustand</span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Web Speech API</span>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="text-emerald-800 text-sm">
                        <strong>💡 주요 특징:</strong> 브라우저 네이티브 음성 API를 활용하여 한국어로 일정 등록과 메모 작성을 할 수 있는 스마트 음성 비서입니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )}

          </div>
        </section>

        {/* Experiences Section */}
        <section id="experiences" className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 py-20">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">도전과 성장</h2>
            <p className="text-center text-gray-500 mb-16">어려웠던 경험과 그것을 극복한 이야기</p>

            <div className="space-y-10">

              {/* Experience 1 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex items-center px-8 pt-8 pb-4 gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">🔗</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">2년간 미완성 프로젝트 인수 — SCM 공급망 관리 시스템</h3>
                    <span className="text-sm text-blue-600">찬스웨이브커뮤니케이션 · 2024</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-gray-100">
                  <div className="px-8 py-6 border-b md:border-b-0 md:border-r border-gray-100">
                    <div className="flex items-center mb-3">
                      <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold mr-2">!</span>
                      <span className="font-semibold text-gray-800">어려웠던 점</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      약 2년간 여러 개발자가 손을 댔지만 완성되지 못한 프로젝트를 단독으로 인계받았습니다.
                      기존 코드는 일관성이 없었고, 문서화도 부족해 어디서부터 시작해야 할지 막막했습니다.
                      또한 촉박한 일정 안에 안정적인 서비스로 런칭해야 하는 압박이 있었습니다.
                    </p>
                  </div>
                  <div className="px-8 py-6">
                    <div className="flex items-center mb-3">
                      <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold mr-2">✓</span>
                      <span className="font-semibold text-gray-800">극복 방법 & 결과</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      전체 코드를 처음부터 직접 리뷰하며 도메인 구조를 파악하고, 우선순위를 정해 핵심 기능부터 재설계했습니다.
                      Zod 스키마 기반 유효성 검사와 i18n 다국어 처리를 체계적으로 정비해
                      <strong className="text-gray-800"> 4개월 만에 리뉴얼 완성 및 안정화</strong>에 성공했습니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex items-center px-8 pt-8 pb-4 gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">📊</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">복잡한 통계 쿼리 설계 — ESG 벤치마크 랭킹 및 히스토그램</h3>
                    <span className="text-sm text-emerald-600">i-ESG · 2025</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-gray-100">
                  <div className="px-8 py-6 border-b md:border-b-0 md:border-r border-gray-100">
                    <div className="flex items-center mb-3">
                      <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold mr-2">!</span>
                      <span className="font-semibold text-gray-800">어려웠던 점</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      수천 개 기업의 ESG 점수를 기반으로 백분위 랭킹과 점수 구간 히스토그램을 실시간으로 제공해야 했습니다.
                      단순 집계 쿼리로는 성능이 나오지 않았고, 점수 데이터가 없는 구간도 0으로 채워 연속적으로 표현해야 하는 요구사항이 특히 까다로웠습니다.
                    </p>
                  </div>
                  <div className="px-8 py-6">
                    <div className="flex items-center mb-3">
                      <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold mr-2">✓</span>
                      <span className="font-semibold text-gray-800">극복 방법 & 결과</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      SQL 윈도우 함수(<code className="bg-gray-100 px-1 rounded text-xs">CUME_DIST</code>, <code className="bg-gray-100 px-1 rounded text-xs">PERCENT_RANK</code>)로 백분위 랭킹을 산출하고,
                      <code className="bg-gray-100 px-1 rounded text-xs">WITH RECURSIVE + CROSS JOIN</code>으로 점수 구간을 동적 생성해 결측 구간까지 0으로 채우는 연속 히스토그램을 구현했습니다.
                      Java Stream API와 Optional로 null-safety도 확보했습니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience 3 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex items-center px-8 pt-8 pb-4 gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">✍️</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">전자서명 라이브러리 전무 — Canvas 기반 직접 설계</h3>
                    <span className="text-sm text-purple-600">i-ESG · 2025</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-gray-100">
                  <div className="px-8 py-6 border-b md:border-b-0 md:border-r border-gray-100">
                    <div className="flex items-center mb-3">
                      <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold mr-2">!</span>
                      <span className="font-semibold text-gray-800">어려웠던 점</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      ESG 진단 리포트에 전자서명 기능이 필요했지만, 서비스 특성에 맞는 라이브러리가 없었습니다.
                      기존 서드파티 솔루션은 비용이 크거나 커스터마이징이 불가능해 직접 구현해야 했고,
                      React와 순수 JS 환경 모두를 지원해야 하는 조건이 더해졌습니다.
                    </p>
                  </div>
                  <div className="px-8 py-6">
                    <div className="flex items-center mb-3">
                      <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold mr-2">✓</span>
                      <span className="font-semibold text-gray-800">극복 방법 & 결과</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Canvas API를 직접 활용한 전자서명 렌더링 엔진을 설계하고,
                      core(순수 JS)와 react(React 래퍼) 패키지로 분리해 어떤 환경에서도 사용할 수 있도록 구조를 잡았습니다.
                      덕분에 외부 의존성 없이 서비스 요구사항에 딱 맞는 전자서명을 제공할 수 있었습니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience 4 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex items-center px-8 pt-8 pb-4 gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">🗺️</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">주소 API 서비스 종료 — Google Places API 마이그레이션</h3>
                    <span className="text-sm text-orange-600">i-ESG · 2025</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-gray-100">
                  <div className="px-8 py-6 border-b md:border-b-0 md:border-r border-gray-100">
                    <div className="flex items-center mb-3">
                      <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold mr-2">!</span>
                      <span className="font-semibold text-gray-800">어려웠던 점</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      서비스에서 사용하던 주소 우편번호 라이브러리가 지원 종료 예정이었고,
                      기존 라이브러리에 강하게 결합된 코드 여러 곳을 동시에 교체해야 했습니다.
                      마이그레이션 중 서비스 중단 없이 전환해야 하는 점이 가장 까다로웠습니다.
                    </p>
                  </div>
                  <div className="px-8 py-6">
                    <div className="flex items-center mb-3">
                      <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold mr-2">✓</span>
                      <span className="font-semibold text-gray-800">극복 방법 & 결과</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      기존 라이브러리 인터페이스를 추상화하는 어댑터 레이어를 먼저 작성해
                      내부 호출 방식을 통일한 뒤, Google Places API로 단계적으로 교체했습니다.
                      다운타임 없이 마이그레이션을 완료하고, 글로벌 주소 검색 지원 범위도 넓어졌습니다.
                    </p>
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