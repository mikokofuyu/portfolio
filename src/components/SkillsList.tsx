import React, { ReactElement } from 'react'

interface SkillsListProps {
  skills: string[]
}

const SkillsList: React.FC<SkillsListProps> = ({ skills }): ReactElement => {
  return (
    <ul className="list-disc flex space-x-10 items-center flex-wrap max-w-lg justify-center">
      {skills.map(skill => (
        <li key={skill} className="text-khaki-web font-semibold text-xl">
          <span className="text-morning-blue">{skill}</span>
        </li>
      ))}
    </ul>
  )
}

export default SkillsList
