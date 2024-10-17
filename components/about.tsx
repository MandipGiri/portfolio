'use client'
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView('About')

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in Computer Engineering, I decided to pursue my career as a
        software engineer. I started my career as an android developer intern & got the job after 2
        months of internship as Jr.Android Dev. I worked on various projects during my time as
        android dev and again was promoted in the same company. While I was working as android dev I
        got the opportunity to learn and work with React. I got to work on a project for an app with
        React Native after which my enthusiasm for React peaked.I continued to work on React Native
        projects and after the switch from the company, I started working as a full-stack developer.
        I have been working as a full-stack developer for the past 2 years. As a full stack
        developer, I have worked on various various technologies like React, Node, Express, MongoDB,
        AWS, etc. What I love about programming is the aspect of problem solving and coming together
        with different people from different backgrounds to create something meaningful. I love the
        aspect of learning new things and the challenges that come with it. I am always looking to
        learn new things and improve my skills.
      </p>

      <p>
        When I'm not coding, I enjoy cooking. I also
        enjoy learning new things & try as much as I can to learn something new every day.
      </p>
    </motion.section>
  )
}
