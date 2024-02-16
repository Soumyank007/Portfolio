import React from 'react'
import Layout from '@/components/Layout';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';

const Heart = () => {
    const darkMode = useSelector((state) => state.theme.darkMode);
  return(
    <span className='text-primary dark:text-primaryDark text-1xl px-1'>
    {darkMode ? '💚' : '\u2764'}
    </span>
  )
}

const Footer = () => {
    // eslint-disable-next-line
    const ComponentWithNoSSR = dynamic(() => Promise.resolve(Heart), {
        ssr: false
      });
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light'>
            <Layout className='py-8 flex items-center justify-between'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div className='flex items-center'>
                    Built with
                    <ComponentWithNoSSR />
                    By&nbsp;
                    <Link href='/' className='hover:underline hover:underline-offset-4'>Soumyank Padhy</Link>
                </div>
                <div />
            </Layout>
        </footer>
    )
}

export default Footer