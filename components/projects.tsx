'use client'

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'

import Project from './project'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-context'

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.5 })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection('Projects')
    }
  }, [inView, setActiveSection, timeOfLastClick])

  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
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
