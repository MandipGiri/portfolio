import React from 'react'
import { LuSmartphone, LuComputer } from 'react-icons/lu'
import lgm from '@/public/lg.png'
import dh from '@/public/dh.png'
import eph from '@/public/ep.png'
import hn from '@/public/hn.png'
import ng from '@/public/ng.png'
import hr from '@/public/hr.jpg'
import sa from '@/public/sa.png'
import ecom from '@/public/ecom.jpg'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const experiencesData = [
  {
    title: 'Android Internship',
    location: 'Hazesoft Pvt. Ltd',
    description:
      'Learned about android development processes and its architecture, software development life cycles in a real world project',
    icon: React.createElement(LuSmartphone),
    date: 'Oct, 2017 - Dec, 2017',
  },
  {
    title: 'Jr. Android Developer',
    location: 'Hazesoft Pvt. Ltd',
    description:
      'Finished my internship early and joined as a Jr.Android Developer.As Junior Developer, I worked on 2 projects along side with the senior and kept on learning and improving myself.',
    icon: React.createElement(LuSmartphone),
    date: 'Jan, 2018 - Apr, 2018',
  },
  {
    title: 'Mobile App Developer',
    location: 'Hazesoft Pvt. Ltd',
    description:
      'I was employed at Hazesoft as an mobile app developer (Android Native App developer/ React Native Developer). I had been developing React Native App in Hazesoft since Dec,2018 alongside Android Native Apps.My core responsibility is to look over all the current projects app-side, upgrade them with new technologies and features as required and fix bugs if any arises.I was responsible and was looking over the mobile app development of the company.',
    icon: React.createElement(LuSmartphone),
    date: 'Apr, 2018 - July, 2019',
  },
  {
    title: 'Application Engineer',
    location: 'AMNIL Technologies',
    description: `As an Application Engineer at AMNIL Technologies was to develop mobile applications with React Native along with providing support to previous projects for feature enhancements and issue fixes.Also from time to time I provided support to frontend team on React JS projects and also mentor interns for React.As for my last role for the last project I did in AMNIL I had been a Team Lead & Application Engineer where I was managing my team member's along with communicating with the client and closing communication gap with the team and client. Understand the requirement of the client,managing client expectations and delivering the project on time with quality along with the team.`,
    icon: React.createElement(LuSmartphone),
    date: 'July, 2019 - Dec, 2021',
  },
  {
    title: 'Software Engineer',
    location: 'Cloudfactory ',
    description:
      'As a Software Engineer at Cloudfactory, I had been working as a fullstack developer for a internal tool of the company. I had been working to develop features along with understanding domains. I had been grooming myself to new tech stack that included React with NodeJS in BFF pattern followed by Golang and AWS. In this time I also had mentored interns',
    icon: React.createElement(LuComputer),
    date: 'Jan , 2022 - Jul, 2023',
  },
  {
    title: 'Sr. Software Engineer',
    location: 'Cloudfactory ',
    description:
      'I am continuing the same work I did as a Software Engineer but now I get more involved in technical and architecture decisions. Since I have nieche experience in React, I help other team members and lead different improvements and try to drive and set standards for React and help them introduce to new tech in React itself.',
    icon: React.createElement(LuComputer),
    date: 'Jul , 2023 - Present',
  },
] as const

export const projectsData = [
  {
    title: 'Hayn Super App',
    description:
      'One of the first projects that I had worked on in my career was Hayn app. It was a super app for Saudi Arabia and had 2 apps in total one for the user and one for the service provider. The app was developed for native android using Java.',
    tags: ['Android', 'Java'],
    imageUrl: sa,
  },
  {
    title: 'Lugmety',
    description:
      'Lugmety is a food delivery system that I had worked on that exists in Saudi Arabia. It had total of 3 apps, one for the user, one for the service provider and one for the delivery person. The app was initially developed with Java for Android app during which I was responsible for its maintainance and feature enhancements. Later on the apps was rewrote with Kotlin as well where I lead that initiative. The apps contained features from food delivery to grocery delivery and also had a feature for the user to book a table in a restaurant.Also had the feature of live tracking their order and delivery person.',
    tags: ['Android', 'Java', 'Kotlin'],
    imageUrl: lgm,
  },
  {
    title: 'Dokaan',
    description:
      "Dokaan was a e-commerce app for Nepal that I had worked for which sadly didn't go live. I worked on native android app for Dokaan which was built with Kotlin. The app had features like product listing, product details, cart, checkout, order tracking, order history, wishlist, etc.",
    tags: ['Android', 'Java'],
    imageUrl: ecom,
  },
  {
    title: 'HR Pie',
    description:
      'This was the first project I had worked on with React Native. It was a HR system that had features like employee management, leave management, attendance, etc. The app was developed for both Android and iOS.',
    tags: ['JS', 'React Native'],
    imageUrl: hr,
  },
  {
    title: 'DishHome Care',
    description:
      'A project that I had worked on for DishHome Nepal. It was a customer care app for DishHome customers. The app was developed with React Native and had features like customer care chat, customer care call, customer care ticket,customer topups etc.',
    tags: ['JS', 'React Native'],
    imageUrl: dh,
  },
  {
    title: 'ePharmacy Nepal',
    description:
      'ePharmacy was a online store for pharmacuitical products. The app was developed with React Native and had features like product listing, product details, cart, checkout, order tracking, order history, wishlist, medicine reminders, scheduled stock up reminders etc.',
    tags: ['JS', 'Redux', 'React Native'],
    imageUrl: eph,
  },
  {
    title: 'Nagarik News',
    description:
      'Nagarik News was a news app for Nepal. The app was developed with React Native and had features like news listing, news details, news search, news categories, news bookmark, news share, etc.',
    tags: ['JS', 'React Native'],
    imageUrl: ng,
  },
  {
    title: 'Hamro Nirman',
    description:
      'Hamro Nirman was a ecommerce for construction materials. The app was developed with React Native and had features like product listing, product details, cart, checkout, order tracking, order history, wishlist, etc.',
    tags: ['TS', 'Redux', 'React Native'],
    imageUrl: hn,
  },
  {
    title: 'Vesta App',
    description:
      'Vesta app was a super app for Singapore. It had 2 apps in total one for the user and one for the service provider. The app was developed with React Native and had features like requesting help of anykind from plumber to painter.The app contained reward system for the service provider and user along with chat facilities and review system. The apps also contained good amount of animations achieved with react-native-animatable and SVG images.',
    tags: ['TS', 'React Native', 'react-native-animatable'],
    imageUrl: sa,
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
  'MongoDB',
  'Redux',
  'Node.js',
  'Express',
  'GoLang',
  'AWS Services',
  'Docker',
  'React Native',
  'Android',
  'Kotlin',
] as const
