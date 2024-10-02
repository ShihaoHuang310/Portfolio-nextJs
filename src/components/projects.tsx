'use client'
import useSectionInView from '@/lib/useInView'
import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project-card'

const Projects = () => {
  const { ref } = useSectionInView('#projects', 0.1)

  return (
    <section id="projects" ref={ref} className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>

      <div>
        {projectsData.map((project, index) => {
          return <Project {...project} key={index} />
        })}
      </div>
    </section>
  )
}

export default Projects
