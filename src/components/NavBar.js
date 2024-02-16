import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { GithubIcon, InstagramIcon, LinkedInIcon, MoonIcon, SunIcon } from './Icons'
import useThemeSwitcher from '@/hooks/useThemeSwitcher'
import { useDispatch } from 'react-redux';
import { toggleTheme } from '@/store/reducers/themeSlice';

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] dark:bg-light ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </Link>
  )
}
const CustomMobileLink = ({ href, title, className = '', toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href)
  }
  return (
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] dark:bg-dark ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </button>
  )
}
const NavBar = () => {
  const dispatch = useDispatch();
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-[-10] lg:px-16 md:px-12 sm:px-8'>
      <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
        <span className={`bg-dark dark:bg-light  transition-all block duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light   transition-all block duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark  dark:bg-light  transition-all block duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>
      <div className='w-full flex justify-between items-center lg:hidden'>
        <nav className='select-none'>
          <CustomLink href="/" title="Home" toggle={handleClick} />
          <CustomLink href="/about" title="About" className='mx-4' />
          <CustomLink href="/projects" title="Projects" className='mx-4' />
          <CustomLink href="/articles" title="Articles" className='ml-4' />
        </nav>

        <nav className='flex items-center justify-center flex-wrap'>
          <motion.a aria-label="LinkedInIcon" href="https://linkedin.com/in/soumyank-padhy007" target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='w-6 mr-3'
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a aria-label="GithubIcon" href="https://github.com/soumyank007" target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='w-6 mx-3'>
            <GithubIcon />
          </motion.a>
          <motion.a aria-label="InstagramIcon" href="https://www.instagram.com/soumyank/" target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='ml-3 mr-3 mb-1'>
            <InstagramIcon />
          </motion.a>
          <button onClick={() => { dispatch(toggleTheme()); setMode(mode === 'light' ? 'dark' : 'light'); }}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
          >
            {
              mode === 'dark' ?
                <SunIcon className={'fill-dark'} />
                :
                <MoonIcon className={'fill-dark'} />
            }

          </button>
        </nav>
      </div>
      {
        isOpen ?
          <motion.div
          initial={{scale:0,opacity:0,x:'-50%',y:'-50%'}}
          animate={{scale:1,opacity:1}}
          transition={{duration:0.12}}
           className='min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>
            <nav className='select-none flex items-center flex-col justify-center'>
              <CustomMobileLink href="/" title="Home" className='' toggle={handleClick} />
              <CustomMobileLink href="/about" title="About" className='' toggle={handleClick} />
              <CustomMobileLink href="/projects" title="Projects" className='' toggle={handleClick} />
              <CustomMobileLink href="/articles" title="Articles" className='' toggle={handleClick} />
            </nav>

            <nav className='flex items-center justify-center flex-wrap mt-2'>
              <motion.a aria-label="LinkedInIcon" href="https://linkedin.com/in/soumyank-padhy007" target={'_blank'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className='w-6 mr-3 sm:mx-1'
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a aria-label="GithubIcon" href="https://github.com/soumyank007" target={'_blank'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className='w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1'>
                <GithubIcon />
              </motion.a>
              <motion.a aria-label="InstagramIcon" href="https://www.instagram.com/soumyank/" target={'_blank'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className='ml-3 mr-3 mb-1 sm:mx-1'>
                <InstagramIcon />
              </motion.a>
              <button onClick={() => { dispatch(toggleTheme()); setMode(mode === 'light' ? 'dark' : 'light'); }}
                className={`ml-3 sm:mx-1 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
              >
                {
                  mode === 'dark' ?
                    <SunIcon className={'fill-dark'} />
                    :
                    <MoonIcon className={'fill-dark'} />
                }

              </button>
            </nav>
          </motion.div>
          : null
      }
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default NavBar