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
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
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
    description: `• Built two real-world Android applications, gaining hands-on experience in mobile app development.\n
• Learned and applied key concepts of the Software Development Life Cycle (SDLC), including planning, design, development, testing, and deployment.\n
• Collaborated with senior developers to understand best practices in Android development, focusing on Java and Android SDK.\n
• Enhanced debugging and troubleshooting skills by resolving issues during the development and testing phases.Learned about android development processes and its architecture, software development life cycles in a real world project\n`,
    icon: React.createElement(LuSmartphone),
    date: 'Oct, 2017 - Dec, 2017',
  },
  {
    title: 'Jr. Android Developer',
    location: 'Hazesoft Pvt. Ltd',
    description: `• Finished my internship early and joined as a Jr.Android Developer.\n
      • As Junior Developer, I finished the 2 projects along side with the senior and kept on learning and improving myself.`,
    icon: React.createElement(LuSmartphone),
    date: 'Jan, 2018 - Apr, 2018',
  },
  {
    title: 'Mobile App Developer',
    location: 'Hazesoft Pvt. Ltd',
    description: `• Led the entire mobile app department, managing app-side development and overseeing all projects independently for several months.\n
• Developed and maintained mobile applications using both React Native and Android Native, ensuring high-quality code and app performance across projects.\n
• Took on the role of Senior Developer in the mobile team, guiding junior developers and providing technical leadership to ensure successful project delivery.\n
• Played the role of Project Lead on several key projects, managing timelines, coordinating with stakeholders, and ensuring alignment with client requirements. \n
• Spearheaded app upgrades by integrating new technologies and features, while resolving bugs and ensuring continuous improvement.\n`,
    icon: React.createElement(LuSmartphone),
    date: 'Apr, 2018 - July, 2019',
  },
  {
    title: 'Application Engineer',
    location: 'AMNIL Technologies',
    description: `• Developed and maintained mobile applications using React Native, while also providing feature enhancements and issue resolution for legacy projects.\n
• Supported the frontend team by contributing to React JS projects, ensuring seamless integration across platforms.\n
• Mentored interns, guiding them in React development and fostering a collaborative and growth-focused environment within the team. \n
• Led a team in the final project phase, managing team members and maintaining clear communication with the client to bridge any gaps between the team and client expectations.\n
• Analyzed client requirements, ensured the team had a thorough understanding, and oversaw the successful delivery of projects in line with client needs.\n`,
    icon: React.createElement(LuSmartphone),
    date: 'July, 2019 - Dec, 2021',
  },
  {
    title: 'Software Engineer',
    location: 'Cloudfactory ',
    description:
      `• Developed and enhanced features as a full-stack developer on an internal tool while gaining a strong understanding of various business domains.\n
• Worked extensively with a modern tech stack, including React, NodeJS (BFF pattern), Golang, and AWS, to deliver scalable and maintainable solutions.\n
• Mentored interns, supporting their growth by providing guidance and technical insights, fostering a culture of learning within the team.\n
• Presented at KTMJS on React Testing Library, sharing knowledge with the developer community and further developing public speaking and technical presentation skills.\n
• Actively contributed to both team success and the wider tech community, refining technical expertise and fueling a passion for mentorship and community engagement.\n`,
    icon: React.createElement(LuComputer),
    date: 'Jan , 2022 - Jul, 2023',
  },
  {
    title: 'Sr. Software Engineer',
    location: 'Cloudfactory ',
    description:
      `• Lead architecture design and epic refinements to ensure alignment between technical implementation and business objectives, focusing on long-term scalability and efficiency.\n
• Volunteered to step in as a temporary Team Lead during the absence of the Team Lead, demonstrating proactive leadership by driving sprint execution, mentoring team members, and facilitating discussions to keep projects on track.\n
• Contributed to the development and refinement of core systems using React, NodeJS (BFF pattern), Golang, and AWS.\n
• Actively took initiatives to improve team processes and foster a collaborative environment, showcasing a passion for innovation and team growth.\n`,
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
