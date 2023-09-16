import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = ({className=''}) => {
  return (
    <div className={`flex h-48 w-48 items-center justify-center overflow-hidden ${className}`}>
        <div className='w-[15.2rem] h-[15.2rem] flex items-center justify-center relative bg-circleStar bg-cover bg-center bg-no-repeat group'>
        <div className='flex items-center justify-center relative'>
            <CircularText className={'fill-dark animate-spin-slow h-auto'} />
            </div>
            <Link href="mailto:soumyank.padhy@gmail.com" className='flex font-semibold items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full hover:bg-light hover:text-dark'>
                Hire Me
            </Link>
        </div>
    </div>
  )
}

export default HireMe