import React from 'react'
import Layout from '@/components/Layout';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
            <Layout className='py-8 flex items-center justify-between'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div className='flex items-center'>
                    Build with
                    <span className='text-red-800 text-1xl px-1'>
                        &#x2764;
                    </span>
                    By&nbsp;
                    <Link href='/' className='underline underline-offset-2'>Soumyank Padhy</Link>
                </div>
                <Link href='/'></Link>
            </Layout>
        </footer>
    )
}

export default Footer