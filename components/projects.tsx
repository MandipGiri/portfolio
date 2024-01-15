import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'

import  Project  from './project'

export default function Projects() {
  return (
    <section className='mb-28'>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, idx) => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
