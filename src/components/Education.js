import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Lilcon from './Lilcon'

const Details = ({type,time,place,info }) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mt-0 w-[60%] mx-auto flex flex-col items-start justify-between'>
        <Lilcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
        >
            <h3 className='capitalize font-bold text-2xl'>
                {type}&nbsp;
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                {time} | {place}
            </span>
            <p className='font-medium w-full'>
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start']
    })
    return (
        <div className='my-32'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>
                Education
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative'>
                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light' />
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details type='Bachelor of Technology' time='2019-2023' place='Institute of Technical Education and Research Bhubaneswar,Odisha' info='Computer Science' />
                    <Details type='Higher Secondary Education' time='2017-2019' place='Swarajya senior Secondary School Alwar,Rajasthan' info='NWAC' />
                    <Details type='Matriculation Education' time='2004-2016' place='De Paul School Berhampur,Odisha' info='ICSE' />
                </ul>
            </div>
        </div>
    )
}

export default Education