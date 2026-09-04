'use client'

import { useEffect, useState, useMemo } from 'react'

const SideNavigation = () => {
  const [activeSection, setActiveSection] = useState('about')

  const sections = useMemo(() => [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'personal_projects', label: 'Personal' },
    { id: 'contact', label: 'Contact' }
  ], [])

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

export default SideNavigation
