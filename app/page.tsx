'use client'

import Image from 'next/image'
import Navigation from './components/Navigation'
import ProgressBar from './components/ProgressBar'
import SideNavigation from './components/SideNavigation'
import LimeCompanySwiper from './components/LimeCompanySwiper'
import SpaceBackground from './components/SpaceBackground'

const globalStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`

export default function Home() {
  return (
    <>
      <style jsx global>{globalStyles}</style>
      <SpaceBackground />
      <Navigation />
      <SideNavigation />
      <ProgressBar />

      {/* Battery decoration — top right */}
      <div className="fixed top-4 right-4 z-50 flex flex-row gap-1">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            style={{ width: 16, height: 48, position: 'relative', flexShrink: 0 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/game-assets/score.png"
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 48,
                height: 16,
                transform: 'translate(-50%, -50%) rotate(90deg)',
                imageRendering: 'pixelated',
                filter: 'drop-shadow(0 0 4px rgba(6,182,212,0.8))',
              }}
            />
          </div>
        ))}
      </div>

      <div className="pt-20">

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center bg-slate-900/70">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-12">
              <div className="relative w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 shadow-lg shadow-cyan-500/30 overflow-hidden ring-4 ring-cyan-500/40">
                <Image
                  src="/profile_cho.jpeg"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">About Me</h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              안녕하세요, 조성민입니다.<br />
              금융·ESG·AI 도메인에서 실무 경험을 쌓아온 풀스택 개발자입니다.<br />
              현재는 i-ESG에서 6개 국제 ESG 진단 서비스의 백엔드(Java Spring Boot)와<br />
              프론트엔드(Next.js, TypeScript)를 함께 담당하며 프로덕션 서비스를 운영하고 있습니다.
            </p>
            <p className="text-lg text-slate-400">
              2년간 완성되지 못한 프로젝트를 인수해 4개월 만에 안정화한 경험처럼,<br />
              어려운 상황에서도 끝까지 해결책을 찾아내는 개발자입니다.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex items-center justify-center py-20 bg-slate-800/60">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-5xl font-bold text-center text-white mb-16">Skills</h2>
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
                <div key={index} className="bg-slate-800/80 p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-cyan-400 text-center">{category.name}</h3>
                  <ul className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center text-slate-300 text-lg">
                        <div className="w-12 h-12 bg-slate-700/80 rounded-lg flex items-center justify-center mr-4">
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={32}
                            height={32}
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).style.display = 'none'
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
        <section id="projects" className="min-h-screen py-20 bg-slate-900/70">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">Projects & Career</h2>

            {/* Current Position - i-ESG */}
            <div className="mb-16">
              <div className="bg-emerald-900/40 p-8 rounded-xl border border-emerald-700/50 border-l-4 border-l-emerald-500 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">주식회사 아이이에스지 (i-ESG)</h3>
                  <span className="bg-green-900/60 text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-700/50">현재 재직중</span>
                </div>
                <p className="text-slate-400 mb-6">2025.10 ~ 현재 • 정규직</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-slate-800/80 p-6 rounded-lg border border-slate-700 shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-emerald-900/60 rounded-lg flex items-center justify-center mr-4 text-2xl">
                        📊
                      </div>
                      <h4 className="text-lg font-semibold text-white">ESG 진단·평가 플랫폼</h4>
                    </div>
                    <p className="text-sm text-emerald-400 mb-3">풀스택 개발자</p>
                    <p className="text-slate-300 mb-4">프로덕션 운영 중인 6개 진단 서비스(KOSA, GDIN, UNGC, EU, UAE, CU)의 프론트엔드·백엔드 담당</p>
                    <div className="space-y-2 mb-4">
                      <div className="text-sm text-slate-300">
                        <span className="font-semibold text-slate-100">벤치마크 백분위 랭킹:</span> SQL 윈도우 함수(CUME_DIST, PERCENT_RANK)로 기업별 상대 순위 산출
                      </div>
                      <div className="text-sm text-slate-300">
                        <span className="font-semibold text-slate-100">점수 구간 히스토그램:</span> WITH RECURSIVE + CROSS JOIN으로 점수 구간 구성, 결측 구간도 0으로 채워 연속성 보장
                      </div>
                      <div className="text-sm text-slate-300">
                        <span className="font-semibold text-slate-100">섹션 점수 분포 집계:</span> Java Stream API와 가중 점수 산식으로 섹션 단위 점수 분포 집계, Optional 기반 null-safety 적용
                      </div>
                      <div className="text-sm text-slate-300">
                        <span className="font-semibold text-slate-100">시각화:</span> ECharts 레이더/도넛 차트로 진단 결과 리포트 구현
                      </div>
                      <div className="text-sm text-slate-300">
                        <span className="font-semibold text-slate-100">API 마이그레이션:</span> 주소 우편번호 라이브러리를 Google Places API로 마이그레이션
                      </div>
                      <div className="text-sm text-slate-300">
                        <span className="font-semibold text-slate-100">전자서명 라이브러리:</span> Canvas 기반 렌더링, core/react 패키지 분리로 자체 설계
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Java', 'Spring Boot', 'MySQL', 'Next.js', 'TypeScript', 'ECharts', 'Canvas API', 'Google Places API'].map((tech, i) => (
                        <span key={i} className="bg-emerald-900/60 text-emerald-300 px-3 py-1 rounded-full text-xs border border-emerald-700/40">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-800/80 p-6 rounded-lg border border-slate-700 shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-900/60 rounded-lg flex items-center justify-center mr-4 text-2xl">
                        🔗
                      </div>
                      <h4 className="text-lg font-semibold text-white">SCM 공급망 관리 시스템</h4>
                    </div>
                    <p className="text-sm text-emerald-400 mb-3">프론트엔드 개발자</p>
                    <p className="text-slate-300 mb-3">공급사 대상 ESG 설문을 생성·배포·운영하는 공급망 관리 플랫폼 프론트엔드 개발</p>
                    <div className="bg-blue-900/40 border-l-4 border-blue-500 p-3 rounded mb-4">
                      <p className="text-blue-300 text-sm font-medium">약 2년간 완성되지 못한 프로젝트를 인수해 4개월 만에 리뉴얼 완성 및 안정화</p>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="text-sm text-slate-300">
                        <span className="font-semibold text-slate-100">설문 생성 및 대상 설정:</span> 설문 생성, 응답 대상 공급사 지정, 담당자 배정 화면 개발
                      </div>
                      <div className="text-sm text-slate-300">
                        <span className="font-semibold text-slate-100">다국어 번역 및 이메일:</span> 설문 다국어(i18n) 번역 UI, 발송 이메일 작성 화면 개발
                      </div>
                      <div className="text-sm text-slate-300">
                        <span className="font-semibold text-slate-100">설문 대시보드:</span> 응답·미응답 기업 현황, 설문 참여율, 담당자 변경, 설문 재요청 및 개선 메일 발송 기능 구현
                      </div>
                      <div className="text-sm text-slate-300">
                        <span className="font-semibold text-slate-100">설문 응답 화면:</span> Zod 스키마 기반 유효성 검사 적용, 다양한 문항 타입 렌더링
                      </div>
                      <div className="text-sm text-slate-300">
                        <span className="font-semibold text-slate-100">공급사 관리:</span> 공급사 추가·조회 화면 개발
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Next.js', 'TypeScript', 'Zod', 'i18n', 'React Hook Form'].map((tech, i) => (
                        <span key={i} className="bg-blue-900/60 text-blue-300 px-3 py-1 rounded-full text-xs border border-blue-700/40">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 찬스웨이브 */}
            <div className="mb-16">
              <div className="bg-blue-900/30 p-8 rounded-xl border border-blue-700/40 border-l-4 border-l-blue-500 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">주식회사 찬스웨이브커뮤니케이션</h3>
                  <span className="text-slate-400 text-sm">2024.02 - 2025.09</span>
                </div>
                <p className="text-slate-400 mb-6">정규직</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-slate-800/80 p-6 rounded-lg border border-slate-700 shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-900/60 rounded-lg flex items-center justify-center mr-4 text-2xl">🏦</div>
                      <h4 className="text-lg font-semibold text-white">하나은행 놀이터 API 개발</h4>
                    </div>
                    <p className="text-sm text-blue-400 mb-3">백엔드 선임연구원</p>
                    <p className="text-slate-300 mb-4">OAuth 기반 토큰 발급 API와 최신 뉴스 데이터 API 개발</p>
                    <div className="flex flex-wrap gap-2">
                      {['OAuth', 'API Development', 'Backend'].map((tech, i) => (
                        <span key={i} className="bg-slate-700/60 text-slate-300 px-3 py-1 rounded-full text-xs border border-slate-600">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-800/80 p-6 rounded-lg border border-slate-700 shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-900/60 rounded-lg flex items-center justify-center mr-4 text-2xl">💰</div>
                      <h4 className="text-lg font-semibold text-white">하나원큐 놀이터 머니트렌드 웹뷰</h4>
                    </div>
                    <p className="text-sm text-blue-400 mb-3">프론트 선임매니저</p>
                    <p className="text-slate-300 mb-4">금융 콘텐츠 에디터 개발 및 웹뷰 프론트/백엔드 개발</p>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'TypeScript', 'Tiptap', 'MongoDB', 'Redis'].map((tech, i) => (
                        <span key={i} className="bg-slate-700/60 text-slate-300 px-3 py-1 rounded-full text-xs border border-slate-600">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-800/80 p-6 rounded-lg border border-slate-700 shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-900/60 rounded-lg flex items-center justify-center mr-4 text-2xl">🤖</div>
                      <h4 className="text-lg font-semibold text-white">AI 서비스 검색 MVP</h4>
                    </div>
                    <p className="text-sm text-blue-400 mb-3">프론트 선임매니저</p>
                    <p className="text-slate-300 mb-4">AI 서비스 카테고리별 랭킹 및 검색 기능, SEO 최적화</p>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'TypeScript', 'SEO'].map((tech, i) => (
                        <span key={i} className="bg-slate-700/60 text-slate-300 px-3 py-1 rounded-full text-xs border border-slate-600">{tech}</span>
                      ))}
                    </div>
                    <a href="http://31ais.com" className="text-cyan-400 hover:text-cyan-300 hover:underline text-sm block mt-2">31ais.com →</a>
                  </div>

                  <div className="bg-slate-800/80 p-6 rounded-lg border border-slate-700 shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-emerald-900/60 rounded-lg flex items-center justify-center mr-4 text-2xl">🌱</div>
                      <h4 className="text-lg font-semibold text-white">퍼핏랩 ESG 데이터 플랫폼</h4>
                    </div>
                    <p className="text-sm text-blue-400 mb-3">프론트 선임매니저</p>
                    <p className="text-slate-300 mb-4">ESG 공공/민간 데이터, 뉴스, 랭킹 제공 사이트 (반응형)</p>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'TypeScript', 'Zustand', 'MongoDB', 'SEO'].map((tech, i) => (
                        <span key={i} className="bg-slate-700/60 text-slate-300 px-3 py-1 rounded-full text-xs border border-slate-600">{tech}</span>
                      ))}
                    </div>
                    <a href="https://pufit.kr" className="text-cyan-400 hover:text-cyan-300 hover:underline text-sm block mt-2">pufit.kr →</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Previous Experience */}
            <div className="space-y-8">
              <div className="bg-slate-800/70 p-6 rounded-lg border border-slate-700 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">주식회사 팬시플레이스</h3>
                  <span className="text-slate-400 text-sm">2023.02 - 2023.07 (6개월)</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-xl mr-2">🪙</span>
                  <h4 className="text-lg text-cyan-400">펜시 월렛 고도화 개발</h4>
                </div>
                <p className="text-slate-300 mb-3">PHP 기반 펜시 월렛 하이브리드 앱을 React, GraphQL로 고도화</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'GraphQL', 'Hybrid App'].map((tech, i) => (
                    <span key={i} className="bg-slate-700/60 text-slate-300 px-3 py-1 rounded-full text-xs border border-slate-600">{tech}</span>
                  ))}
                </div>
              </div>

              <LimeCompanySwiper />
            </div>
          </div>
        </section>

        {/* Personal Projects Section */}
        <section id="personal-projects" className="min-h-screen py-20 bg-slate-800/60">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-5xl font-bold text-center text-white mb-16">현재 개인 프로젝트 진행</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-slate-800/80 p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-orange-900/60 rounded-xl flex items-center justify-center mr-4 text-3xl">🍽️</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">캐치테이블 벤치마킹 사이트</h3>
                    <span className="text-sm text-orange-400 font-medium">2024.07 ~ 2024.07</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <span className="bg-slate-700/60 text-slate-300 px-4 py-2 rounded-full text-sm font-medium border border-slate-600">완료</span>
                </div>
                <p className="text-slate-400 mt-4 text-center">레스토랑 예약 서비스의 사용자 경험을 개선한 웹 플랫폼</p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {['React', 'Next.js', 'TypeScript'].map((tech, i) => (
                    <span key={i} className="bg-slate-700/60 text-slate-300 px-3 py-1 rounded-full text-xs border border-slate-600">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/80 p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-900/60 rounded-xl flex items-center justify-center mr-4 text-3xl">🌍</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">탄소 감축 SaaS 플랫폼</h3>
                    <span className="text-sm text-green-400 font-medium">2024.07 ~ 2024.07</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <span className="bg-slate-700/60 text-slate-300 px-4 py-2 rounded-full text-sm font-medium border border-slate-600">완료</span>
                </div>
                <p className="text-slate-400 mt-4 text-center">기업의 탄소 배출량 관리 및 감축을 위한 통합 솔루션</p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {['React', 'Node.js', 'MongoDB', 'D3.js'].map((tech, i) => (
                    <span key={i} className="bg-slate-700/60 text-slate-300 px-3 py-1 rounded-full text-xs border border-slate-600">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/80 p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-purple-900/60 rounded-xl flex items-center justify-center mr-4 text-3xl">📱</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">위치기반 심부름 플랫폼 하이브리드 웹앱</h3>
                    <span className="text-sm text-purple-400 font-medium">2026.09 ~ 진행중</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <span className="bg-purple-900/60 text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-700/50">개발 진행중</span>
                </div>
                <p className="text-slate-400 mt-4 text-center">일상 생활의 심부름을 쉽게 요청하고 처리할 수 있는 모바일 플랫폼</p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {['React Native', 'Node.js', 'MongoDB', 'Socket.io'].map((tech, i) => (
                    <span key={i} className="bg-slate-700/60 text-slate-300 px-3 py-1 rounded-full text-xs border border-slate-600">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/80 p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 bg-cyan-900/60 rounded-xl overflow-hidden mr-4">
                    <Image src="/ai-image-generator.png" alt="AI 이미지 생성기" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">AI 이미지 생성기</h3>
                    <span className="text-sm text-cyan-400 font-medium">2024.09 ~ 2024.09</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <span className="bg-slate-700/60 text-slate-300 px-4 py-2 rounded-full text-sm font-medium border border-slate-600">완료</span>
                </div>
                <p className="text-slate-400 mt-4 text-center">텍스트 프롬프트로 고품질 AI 이미지를 생성하는 웹 애플리케이션</p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {['Next.js 15', 'React 19', 'TypeScript', 'Redux Toolkit', 'Replicate API'].map((tech, i) => (
                    <span key={i} className="bg-slate-700/60 text-slate-300 px-3 py-1 rounded-full text-xs border border-slate-600">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/80 p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-900/60 rounded-xl flex items-center justify-center mr-4 text-3xl">🎤</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">음성 비서 AI - 스마트 일정/메모 관리</h3>
                    <span className="text-sm text-emerald-400 font-medium">2024.09 ~ 2024.09</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <span className="bg-slate-700/60 text-slate-300 px-4 py-2 rounded-full text-sm font-medium border border-slate-600">완료</span>
                </div>
                <p className="text-slate-400 mt-4 text-center">Web Speech API 기반 음성 인식 웹 애플리케이션</p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {['Next.js 15.5.2', 'React 18', 'TypeScript', 'Zustand', 'Web Speech API'].map((tech, i) => (
                    <span key={i} className="bg-slate-700/60 text-slate-300 px-3 py-1 rounded-full text-xs border border-slate-600">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-slate-400">
                💡 새로운 기술과 트렌드를 적극적으로 학습하며 개인 프로젝트를 통해 실무 역량을 향상시키고 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 진행 중인 개인 프로젝트 Section */}
        <section className="py-20 bg-slate-900/70">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">진행 중인 개인 프로젝트</h2>

            {/* 3D RPG 브라우저 게임 */}
            <div className="mb-16">
              <div className="bg-slate-800/80 p-8 rounded-xl border border-slate-700 shadow-lg">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <Image
                      src="/rpg-game.png"
                      alt="3D RPG 브라우저 게임"
                      width={500}
                      height={400}
                      className="rounded-lg shadow-md border border-slate-700"
                      style={{ maxWidth: '500px', height: 'auto' }}
                    />
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-900/60 rounded-lg flex items-center justify-center mr-4 text-2xl">⚔️</div>
                      <h3 className="text-2xl font-bold text-white">3D RPG 브라우저 게임</h3>
                    </div>

                    <div className="flex items-center mb-4">
                      <span className="bg-green-900/60 text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-700/40">개발 진행중</span>
                      <span className="ml-3 text-slate-400 text-sm">2026.09 ~ 현재</span>
                    </div>

                    <div className="space-y-3 mb-6">
                      <p className="text-slate-200 text-lg font-semibold">Three.js 기반 3D 아이소메트릭 턴제 RPG</p>
                      <ul className="text-slate-400 space-y-2 list-disc list-inside">
                        <li>Three.js를 활용한 3D 아이소메트릭 뷰 렌더링</li>
                        <li>보스 몬스터 AI 및 HP 관리 시스템</li>
                        <li>BGM / 효과음 사운드 시스템</li>
                        <li>캐릭터 애니메이션 및 3D 오브젝트 배치</li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-orange-900/60 text-orange-300 px-3 py-1 rounded-full text-sm border border-orange-700/40">Three.js</span>
                      <span className="bg-yellow-900/60 text-yellow-300 px-3 py-1 rounded-full text-sm border border-yellow-700/40">JavaScript</span>
                      <span className="bg-blue-900/60 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-700/40">WebGL</span>
                      <span className="bg-slate-700/60 text-slate-300 px-3 py-1 rounded-full text-sm border border-slate-600">HTML5</span>
                    </div>

                    <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-700/30">
                      <p className="text-purple-300 text-sm">
                        <strong>주요 특징:</strong> 별도 설치 없이 브라우저에서 즉시 플레이 가능한 3D RPG. 그리드 타일 위를 이동하며 몬스터를 처치하고 대왕괴물 보스를 공략 게임을 구현했습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map API 기반 심부름 플랫폼 */}
            <div className="mb-16">
              <div className="bg-slate-800/80 p-8 rounded-xl border border-slate-700 shadow-lg">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <Image
                      src="/project2.png"
                      alt="지도 API 기반 심부름 플랫폼"
                      width={500}
                      height={400}
                      className="rounded-lg shadow-md border border-slate-700"
                      style={{ maxWidth: '500px', height: 'auto' }}
                    />
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-900/60 rounded-lg flex items-center justify-center mr-4 text-2xl">📍</div>
                      <h3 className="text-2xl font-bold text-white">지도 API 기반 심부름 플랫폼</h3>
                    </div>

                    <div className="flex items-center mb-4">
                      <span className="bg-green-900/60 text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-700/40">개발 진행중</span>
                      <span className="ml-3 text-slate-400 text-sm">2026.09 ~ 현재</span>
                    </div>

                    <div className="space-y-3 mb-6">
                      <p className="text-slate-200 text-lg font-semibold">위치 기반 심부름 매칭 서비스</p>
                      <ul className="text-slate-400 space-y-2 list-disc list-inside">
                        <li>실시간 지도 API를 활용한 위치 기반 심부름 요청/수행 매칭</li>
                        <li>GPS 기반 주변 심부름 검색 및 거리별 정렬 기능</li>
                        <li>사용 안전성을 위한 사용자 인증 도입 ( 예정 )</li>
                        <li>결제 시스템 및 리뷰 평점 관리 ( 예정 )</li>
                        <li>사용자간 채팅 기능 및 알림 기능</li>
                        <li>반응형 디자인 반영</li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-blue-900/60 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-700/40">React Native</span>
                      <span className="bg-green-900/60 text-green-300 px-3 py-1 rounded-full text-sm border border-green-700/40">Node.js</span>
                      <span className="bg-yellow-900/60 text-yellow-300 px-3 py-1 rounded-full text-sm border border-yellow-700/40">MongoDB</span>
                      <span className="bg-purple-900/60 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-700/40">Socket.io</span>
                      <span className="bg-red-900/60 text-red-300 px-3 py-1 rounded-full text-sm border border-red-700/40">Kakao Map API</span>
                      <span className="bg-indigo-900/60 text-indigo-300 px-3 py-1 rounded-full text-sm border border-indigo-700/40">GPS</span>
                    </div>

                    <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-700/30">
                      <p className="text-blue-300 text-sm">
                        <strong>주요 특징:</strong> 일상생활에서 필요한 다양한 심부름(배달, 대행, 구매 등)을
                        지도 기반으로 쉽게 요청하고 처리할 수 있는 O2O 플랫폼을 개발 중입니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experiences Section */}
        <section id="experiences" className="min-h-screen py-20 bg-slate-800/65">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-4">도전과 성장</h2>
            <p className="text-center text-slate-400 mb-16">어려웠던 경험과 그것을 극복한 이야기</p>

            <div className="space-y-10">

              {/* Experience 1 */}
              <div className="bg-slate-800/80 rounded-2xl border border-slate-700 shadow-lg overflow-hidden">
                <div className="flex items-center px-8 pt-8 pb-4 gap-4">
                  <div className="w-12 h-12 bg-blue-900/60 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">🔗</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">2년간 미완성 프로젝트 인수 — SCM 공급망 관리 시스템</h3>
                    <span className="text-sm text-blue-400">i-ESG · 2026</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-slate-700">
                  <div className="px-8 py-6 border-b md:border-b-0 md:border-r border-slate-700">
                    <div className="flex items-center mb-3">
                      <span className="w-6 h-6 bg-red-900/60 text-red-400 rounded-full flex items-center justify-center text-xs font-bold mr-2 border border-red-700/50">!</span>
                      <span className="font-semibold text-slate-200">어려웠던 점</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      약 2년간 여러 개발자가 손을 댔지만 완성되지 못한 프로젝트를 인계받았습니다.
                      기존 코드는 일관성이 없었고, 문서화도 부족해 어디서부터 시작해야 할지 막막했습니다.
                      또한 촉박한 일정 안에 안정적인 서비스로 런칭해야 하는 압박이 있었습니다.
                    </p>
                  </div>
                  <div className="px-8 py-6">
                    <div className="flex items-center mb-3">
                      <span className="w-6 h-6 bg-green-900/60 text-green-400 rounded-full flex items-center justify-center text-xs font-bold mr-2 border border-green-700/50">✓</span>
                      <span className="font-semibold text-slate-200">극복 방법 & 결과</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      전체 코드를 처음부터 직접 리뷰하며 도메인 구조를 파악하고, 우선순위를 정해 핵심 기능부터 재설계했습니다.
                      Zod 스키마 기반 유효성 검사와 i18n 다국어 처리를 체계적으로 정비해
                      <strong className="text-slate-100"> 4개월 만에 리뉴얼 완성 및 안정화</strong>에 성공했습니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="bg-slate-800/80 rounded-2xl border border-slate-700 shadow-lg overflow-hidden">
                <div className="flex items-center px-8 pt-8 pb-4 gap-4">
                  <div className="w-12 h-12 bg-emerald-900/60 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">📊</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">복잡한 통계 쿼리 설계 — ESG 벤치마크 랭킹 및 히스토그램</h3>
                    <span className="text-sm text-emerald-400">i-ESG · 2025</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-slate-700">
                  <div className="px-8 py-6 border-b md:border-b-0 md:border-r border-slate-700">
                    <div className="flex items-center mb-3">
                      <span className="w-6 h-6 bg-red-900/60 text-red-400 rounded-full flex items-center justify-center text-xs font-bold mr-2 border border-red-700/50">!</span>
                      <span className="font-semibold text-slate-200">어려웠던 점</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      수천 개 기업의 ESG 점수를 기반으로 백분위 랭킹과 점수 구간 히스토그램을 실시간으로 제공해야 했습니다.
                      단순 집계 쿼리로는 성능이 나오지 않았고, 점수 데이터가 없는 구간도 0으로 채워 연속적으로 표현해야 하는 요구사항이 특히 까다로웠습니다.
                    </p>
                  </div>
                  <div className="px-8 py-6">
                    <div className="flex items-center mb-3">
                      <span className="w-6 h-6 bg-green-900/60 text-green-400 rounded-full flex items-center justify-center text-xs font-bold mr-2 border border-green-700/50">✓</span>
                      <span className="font-semibold text-slate-200">극복 방법 & 결과</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      SQL 윈도우 함수(<code className="bg-slate-700 px-1 rounded text-xs text-cyan-300">CUME_DIST</code>, <code className="bg-slate-700 px-1 rounded text-xs text-cyan-300">PERCENT_RANK</code>)로 백분위 랭킹을 산출하고,
                      <code className="bg-slate-700 px-1 rounded text-xs text-cyan-300">WITH RECURSIVE + CROSS JOIN</code>으로 점수 구간을 동적 생성해 결측 구간까지 0으로 채우는 연속 히스토그램을 구현했습니다.
                      Java Stream API와 Optional로 null-safety도 확보했습니다.
                    </p>
                  </div>
                </div>
              </div>


              {/* Experience 4 */}
              <div className="bg-slate-800/80 rounded-2xl border border-slate-700 shadow-lg overflow-hidden">
                <div className="flex items-center px-8 pt-8 pb-4 gap-4">
                  <div className="w-12 h-12 bg-orange-900/60 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">🌐</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">국내 주소 검색 → Google Places API 전환으로 글로벌 서비스 확장</h3>
                    <span className="text-sm text-orange-400">i-ESG · 2025</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-slate-700">
                  <div className="px-8 py-6 border-b md:border-b-0 md:border-r border-slate-700">
                    <div className="flex items-center mb-3">
                      <span className="w-6 h-6 bg-red-900/60 text-red-400 rounded-full flex items-center justify-center text-xs font-bold mr-2 border border-red-700/50">!</span>
                      <span className="font-semibold text-slate-200">어려웠던 점</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      ESG 진단 서비스가 EU, UAE 등 해외 기업을 대상으로 확장되면서,
                      국내 주소 체계에만 대응하던 기존 라이브러리로는 해외 기업 정보 입력이 불가능한 한계가 있었습니다.
                      코드베이스 여러 곳에 라이브러리가 직접 결합되어 있어 교체 범위가 넓었고,
                      운영 중인 서비스를 중단 없이 전환해야 하는 점이 까다로웠습니다.
                    </p>
                  </div>
                  <div className="px-8 py-6">
                    <div className="flex items-center mb-3">
                      <span className="w-6 h-6 bg-green-900/60 text-green-400 rounded-full flex items-center justify-center text-xs font-bold mr-2 border border-green-700/50">✓</span>
                      <span className="font-semibold text-slate-200">극복 방법 & 결과</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      기존 라이브러리 인터페이스를 추상화하는 어댑터 레이어를 먼저 작성해
                      내부 호출 방식을 통일한 뒤, Google Places API로 단계적으로 교체했습니다.
                      다운타임 없이 전환을 완료했고, 덕분에 전 세계 어디서든 주소를 입력할 수 있게 되어
                      해외 기업 대상 서비스 확장의 기반을 마련했습니다.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center bg-slate-900/75">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-12">Contact</h2>
            <div className="bg-slate-800/80 p-8 rounded-lg border border-slate-700 shadow-lg">
              <div className="text-6xl mb-6">👋</div>
              <p className="text-xl text-slate-300 mb-8">
                프로젝트나 협업에 대해 문의하고 싶으시다면 언제든 연락주세요!<br />
                새로운 기술과 도전적인 프로젝트를 함께 만들어가요! 🤝
              </p>
              <div className="space-y-6">
                <div className="flex items-center justify-center bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                  <span className="text-2xl mr-3">📧</span>
                  <span className="text-slate-300 font-medium mr-2">이메일:</span>
                  <a href="mailto:chos1909@gmail.com" className="text-cyan-400 hover:text-cyan-300 hover:underline">chos1909@gmail.com</a>
                </div>
                <div className="flex items-center justify-center bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                  <span className="text-2xl mr-3">📱</span>
                  <span className="text-slate-300 font-medium mr-2">전화번호:</span>
                  <a href="tel:010-4093-9680" className="text-cyan-400 hover:text-cyan-300 hover:underline">010-4093-9680</a>
                </div>
              </div>
              <div className="mt-8 flex justify-center space-x-4">
                <a
                  href="https://github.com/worldhostm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-600 transition-colors flex items-center border border-slate-600"
                >
                  <span className="mr-2">⭐</span>
                  GitHub
                </a>
                <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-500 transition-colors flex items-center">
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
