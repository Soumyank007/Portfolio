import React from 'react'
import { CircularText, CircularTextInverted } from './Icons'
import Link from 'next/link'
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';

const HireMe = ({className=''}) => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const CircularComponent = darkMode ? CircularTextInverted : CircularText; 
  
// eslint-disable-next-line
const ComponentWithNoSSR = dynamic(() => Promise.resolve(CircularComponent), {
  ssr: false
});


  return (
    <div className={`md:absolute z-20 fixed flex flex-col left-[-1.8rem] bottom-6 items-center justify-center overflow-hidden md:right-6 md:left-auto md:top-4 md:bottom-auto  ${className}`}>
        <div className='w-[11rem] h-auto md:w-[5rem] flex items-center justify-center relative'>
        <ComponentWithNoSSR className="animate-spin-slow" />
            <Link href="mailto:soumyank.padhy@gmail.com" className='md:w-12 md:h-12 md:text-[10px] flex font-semibold items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark dark:border-light w-20 h-20 rounded-full hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light'>
                Hire Me
             </Link>
        </div>
    </div>
  )
}

export default HireMe