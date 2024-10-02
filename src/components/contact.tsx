'use client'
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import useSectionInView from '@/lib/useInView'
import SubmitBtn from './submit-btn'
import { Fade } from 'react-awesome-reveal'
const Contact = () => {
  const { ref } = useSectionInView('#contact')
  return (
    <motion.section id="contact" ref={ref}>
      <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce>
        <SectionHeading>{'Contact Me'}</SectionHeading>
      </Fade>

      <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce>
        <p className="text-gray-700 -mt-6 dark:text-white/80">
          {'Feel free to contact me directly through this form'}
        </p>
      </Fade>

      <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce>
        <form className="mt-10 flex flex-col dark:text-black" action="">
          <input
            className="h-14 rounded-lg border-black dark:bg-white dark:text-white/80"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your Email"
          />

          <textarea
            className="h-52 my-3 resize-nones rounded-lg border-black dark:bg-white dark:text-white/80"
            name="message"
            required
            maxLength={5000}
            placeholder="Your Email"
          />
        </form>
      </Fade>
      <SubmitBtn text={'Submit'} />
    </motion.section>
  )
}

export default Contact
