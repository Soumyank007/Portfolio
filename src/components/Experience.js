import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Lilcon from './Lilcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mt-0 w-[60%] mx-auto flex flex-col items-start justify-between'>
        <Lilcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
        >
            <h3 className='capitalize font-bold text-2xl'>
                {position}&nbsp;
                <a target='_blank' href={companyLink} className='text-primary capitalize dark:text-primaryDark'><br />@{company}</a>
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start']
    })
    return (
        <div className='my-32'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>
                Experience
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative'>
                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light' />
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details position='Full Stack Developer' company='Freelance' time='Sept 2023 - Present' work='Working as an Freelance developer on a variety of technologies like Next JS, React Native, Node JS, MongoDB, SpingBoot, AWS and more.'
                        companyLink='www.kemuri.in' address='Bangalore,India' />
                    <Details position='Systems Engineer' company='Kemuri Technology' time='Dec 2022 - Sept 2023' work='Developed features for Headless CMS (RCMS) projects, optimizing content management with PHP, JavaScript, and Postgres. Delivered diverse client projects with Nuxt JS, Vue JS, React JS, Node JS, Django, and Flutter. Introduced automated testing (Katalon, Puppeteer) for robust software quality, including real-time testing. Managed servers directly using SSH, created API load testing scripts with Node JS and JMeter. Integrated third-party REST APIs and JavaScript frameworks, resolving intricate code issues through systematic debugging. Implemented GitHub Actions and Docker for efficient CI/CD operations. Applied code optimization techniques for clean, efficient, and high-performance coding.'
                        companyLink='www.kemuri.in' address='Bangalore,India' />
                    <Details position='Systems Engineer Intern' company='Kemuri Technology' time='Sept 2022 - Dec 2022' work='Significantly contributed to Headless CMS projects, Nuxt JS, Vue JS, and led the development of a Django website from inception to completion.'
                        companyLink='www.kemuri.in' address='Bangalore,India' />
                </ul>
            </div>
        </div>
    )
}

export default Experience