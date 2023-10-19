import AnimatedText from '@/components/AnimatedText'
import Head from 'next/head'
import React from 'react'
import Layout from './../components/Layout';
import Image from 'next/image';
import profilePic from 'public/images/profile/SP_1_bg_removed.png'

const about = () => {
  return (
    <>
      <Head>
        <title>About | Soumyank Padhy</title>
        <meta name='description' content='any description' />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText className='mb-16' text='Passion fuels purpose' />
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
          </div>
        </Layout>
      </main>
    </>
  )
}

export default about