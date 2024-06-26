import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import corpcommentImg from '@/public/corpcomment.png'
import rmtdevImg from '@/public/rmtdev.png'
import wordanalyticsImg from '@/public/wordanalytics.png'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  // {
  //   name: 'Projects',
  //   hash: '#projects',
  // },
  {
    name: 'Skills',
    hash: '#skills',
  },
  // {
  //   name: 'Experience',
  //   hash: '#experience',
  // },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const experiencesData = [
  {
    title: 'TODO',
    location: 'LOCATION',
    description: 'DESCRIPTION',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'TODO',
    location: 'LOCATION',
    description: 'DESCRIPTION',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'TODO',
    location: 'LOCATION',
    description: 'DESCRIPTION',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
] as const

export const projectsData = [
  {
    title: 'TODO',
    description: 'DESCRIPTION',
    tags: ['React', 'MongoDB', 'Tailwind'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'TODO',
    description: 'DESCRIPTION',
    tags: ['React'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'TODO',
    description: 'DESCRIPTION',
    tags: ['React'],
    imageUrl: corpcommentImg,
  },
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Git',
  'Tailwind',
  'MongoDB',
  'Redux',
  'Node.js',
  'Express',
  'Framer Motion',
  'GoLang',
  'AWS',
] as const
