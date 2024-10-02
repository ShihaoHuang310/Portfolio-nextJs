'use client'
import React from 'react'
import SectionHeading from './section-heading'
import Image from 'next/image'
import useSectionInView from '@/lib/useInView'
import { motion } from 'framer-motion'
import { Fade } from 'react-awesome-reveal'
const About = () => {
  const { ref } = useSectionInView('#about')

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
      className="max-w-[45rem] mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28">
      <div className="container mx-auto">
        <Fade direction="up" delay={400} damping={1e-1} triggerOnce>
          <SectionHeading>About Me</SectionHeading>
        </Fade>
        <div className="grid xl:grid-cols-2 lg:text-start">
          <div className="flex-1">
            <div className="text-lg mt-12 xl:mt-3">
              <div className="flex justify-start flex-col">
                <Fade direction="up" delay={400} damping={1e-1} triggerOnce>
                  <h3 className="font-bold mt-6">Our Mission</h3>
                </Fade>
                <Fade direction="up" delay={600} damping={1e-1} triggerOnce>
                  <p className="mt-2 leading-relaxed text-sm text-gary-700 dark:text-white/70">
                    We believe that everyone deserves to have a beautiful.
                  </p>
                </Fade>

                <Fade direction="up" delay={800} damping={1e-1} triggerOnce>
                  <h3 className="font-bold mt-6">Our Vision</h3>
                </Fade>
                <Fade direction="up" delay={1000} damping={1e-1} triggerOnce>
                  <p className="mt-2 leading-relaxed text-sm text-gary-700 dark:text-white/70">
                    We believe that everyone deserves to have a beautiful.
                  </p>
                </Fade>
              </div>
            </div>
          </div>

          <div>
            {/* 左边图片 */}
            <Fade direction="right" delay={600} damping={1e-1} triggerOnce>
              <Image
                src="/boy.png"
                alt="about me"
                width={600}
                height={600}
                quality={100}
                priority={true}
                className="rounded-full mt-8 object-cover"
              />
              s
            </Fade>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
