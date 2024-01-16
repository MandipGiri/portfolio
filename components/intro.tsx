'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-context'

export default function Intro() {
  const { ref, inView } = useInView({ threshold: 0.5 })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection('Home')
    }
  }, [inView, setActiveSection, timeOfLastClick])

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] scroll-mt-[100rem]">
      {/* Image section */}
      <div className="flex items-center justify-center ">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src={
                'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=2200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt="Mandip Potrait"
              width={200}
              height={200}
              quality={95}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              priority
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 125, delay: 0.1, duration: 0.7 }}
            className="absolute bottom-0 right-0 text-4xl"
          >
            {' '}
            👋{' '}
          </motion.span>
        </div>
      </div>

      {/* Text section */}
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Mandip.</span> I'm a{' '}
        <span className="font-bold">full-stack developer</span> with{' '}
        <span className="font-bold">6 years</span> of experience. I enjoy building{' '}
        <span className="italic">sites & apps</span>. My focus is{' '}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      {/* Button section */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-l font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{' '}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
          href="/MandipGiri.pdf"
          download
        >
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-[1.15] transition cursor-pointer border border-black/10"
          href="https://www.linkedin.com/in/mandip-giri-02166080/"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-[1.15] transition cursor-pointer border border-black/10"
          href="https://github.com/MandipGiri"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}
