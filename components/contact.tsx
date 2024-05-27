'use client'

import React from 'react'
import { useSectionInView } from '@/lib/hooks'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { sendEmail } from '@/actions/sendEmail'
import { SubmitBtn } from './submit-btn'
import toast from 'react-hot-toast'

export default function Contact() {
  const { ref } = useSectionInView('Contact')

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:mandipgiri@hotmail.com">
          mandipgiri@hotmail.com
        </a>{' '}
        or{' '}
        <a className="underline" href="mailto:mandipgiri02@gmail.com">
          mandipgiri02@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async formData => {
          const { data, error } = await sendEmail(formData)
          if (error) {
            toast.error(error)
            return
          }
          toast.success('Email sent successfully!')
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack"
          name="senderEmail"
          type="email"
          placeholder="Your email"
          required
          maxLength={50}
        />
        <textarea
          className="h-52 p-4 my-3 borderBlack rounded-lg"
          name="message"
          placeholder="Your message"
          required
          maxLength={500}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
