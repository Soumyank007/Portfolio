import AnimatedText from '@/components/AnimatedText'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Layout from './../components/Layout';
import Image from 'next/image';
import profilePic from 'public/images/profile/SP_1_bg_removed.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>

}

const about = () => {
  return (
    <>
      <Head>
        <title>About | Soumyank Padhy</title>
        <meta name='description' content='any description' />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText className='mb-16' text='Passion Ignites Progress' />
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
              <p className='font-medium'>
                Hi, I&apos;m Soumyank Padhy, a seasoned Full-Stack Developer with experience in creating robust and scalable web applications. With expertise in both front-end and back-end development, I deliver high-quality solutions tailored to clients needs. Always eager for new challenges, I continuously seek opportunities for growth and learning in the tech industry.              </p>
              <p className='font-medium my-4'>
                I understand that successful development is about more than just design. It&apos;s about creating solutions that are both aesthetically pleasing and functionally robust, ensuring a seamless and intuitive user experience.
              </p>
              <p className='font-medium'>
                Whether I&apos;m working on a website, mobile app, or
                other digital product With a focus on user-centric design I&apos;m excited to apply my skills and passion to your next project&apos;s success.
              </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
              {/* Have to Change this image with a better one */}
              <Image src={profilePic} alt='alt' className='w-full h-auto rounded-2xl' />
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between'>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>Projects Completed</h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>Coding Skills</h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>Years of experience</h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  )
}

export default about