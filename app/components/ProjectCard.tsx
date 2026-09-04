'use client'

interface ProjectCardProps {
  emoji: string
  title: string
  period: string
  periodColor: string   // e.g. 'text-orange-600'
  badgeLabel: string    // e.g. '개발 진행중'
  badgeColor: string    // e.g. 'bg-orange-100 text-orange-800'
  description: string
  techs: string[]
}

const ProjectCard = ({
  emoji,
  title,
  period,
  periodColor,
  badgeLabel,
  badgeColor,
  description,
  techs
}: ProjectCardProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mr-4 text-3xl">
          {emoji}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <span className={`text-sm ${periodColor} font-medium`}>{period}</span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <span className={`${badgeColor} px-4 py-2 rounded-full text-sm font-medium`}>{badgeLabel}</span>
      </div>
      <p className="text-gray-600 mt-4 text-center">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 justify-center mt-4">
        {techs.map((tech, i) => (
          <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">{tech}</span>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
