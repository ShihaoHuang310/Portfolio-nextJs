import React, { useRef } from 'react'
import Image from 'next/image'
import { ProjectInfo } from '@/lib/types'
import { motion, useScroll, useTransform } from 'framer-motion'

type ProjectProps = ProjectInfo

const Project = ({ title, description, tags, imageUrl, link }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
      className="group mb-3 sm:mb-8 last:mb-0">
      <section className="bg-white max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 sm:pl-10 m:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:pr-0 sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
          <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
            {tags.map((tag, index) => {
              return (
                <li
                  key={index}
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                  {tag}
                </li>
              )
            })}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={'project I worked'}
          width={400}
          height={100}
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 rounded-r-lg shadow-2xl transition
          group-hover:scale-[1.04] group-hover:-translate-x-3
          group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3
          group-even:group-hover:-translate-y-3 group-even:group-hover:rotate-2
          group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  )
}

export default Project
