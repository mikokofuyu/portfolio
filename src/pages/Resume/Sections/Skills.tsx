import React, { ReactElement } from 'react'
import SkillsList from '../../../components/SkillsList'

const Skills: React.FC = (): ReactElement => (
  <section className="flex flex-col items-center justify-center pt-16" id="projects">
    <h2 className="font-header text-3xl mb-10 text-khaki-web">Skills</h2>
    <SkillsList
      skills={[
        'React',
        'NextJS',
        'JavaScript',
        'TypeScript',
        'React Testing Library',
        'Jest',
        'NodeJS',
        'Express',
        'Agile Methodologies',
        'SEO',
        'Accessibility',
        'Performance Optimisation',
        'NoSQL',
        'Redux',
      ]}
    />
  </section>
)

export default Skills
