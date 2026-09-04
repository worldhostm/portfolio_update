'use client'

interface TechBadgeProps {
  tech: string
  colorClass?: string  // 기본값: 'bg-gray-100 text-gray-700'
}

const TechBadge = ({ tech, colorClass = 'bg-gray-100 text-gray-700' }: TechBadgeProps) => {
  return (
    <span className={`${colorClass} px-3 py-1 rounded-full text-xs`}>{tech}</span>
  )
}

export default TechBadge
