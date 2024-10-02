'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'
import { FaPaperPlane } from 'react-icons/fa'

type SubmitBtnProps = {
  text: string
}

const SubmitBtn = ({ text }: SubmitBtnProps) => {
  const { pending } = useFormStatus()
  return (
    <button
      className="group flex items-center justify-center gap-2 w-8rem h-3rem bg-gary-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      type="submit"
      disabled={pending}>
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          {text}{' '}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{' '}
        </>
      )}
    </button>
  )
}

export default SubmitBtn
