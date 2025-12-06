import Layout from '@/components/Layout';
import Image from 'next/image';
import profilePic from '../../public/images/profile/SP_1_bg_removed.png';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import TransitionEffect from '@/components/TransitionEffect';

const ParticlesContainer = dynamic(() => import('@/components/ParticlesContainer'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Soumyank Padhy</title>
        <meta name="description" content="Hi I&#39;m Soumyank Padhy, a tech enthusiast and full-stack web developer. Explore my journey, delve into innovative web solutions, and gain insights into the ever-evolving tech landscape." />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light sm:items-start">
        <Layout className="pt-0 md:p-28 sm:pt-12">
          <div className="flex items-center justify-between w-full relative lg:flex-col">
            <div className="w-1/3 md:w-[20rem] relative md:mb-4">
              <Image
                priority
                sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
                src={profilePic}
                alt='alt'
                className='w-full h-auto z-10 lg:hidden md:inline-block md:w-full'
              />
              <div className='absolute inset-0 flex items-center justify-center z-[-10]'>
                <ParticlesContainer />
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText text='Crafting Digital Marvels with the Power of Code.' className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md::!text-5xl sm:!text-3xl' />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                With a knack for Full-stack wizardry, I specialize in bringing your ideas to life through interactive web and mobile applications. Dive into my latest projects and insightful articles, highlighting my expertise in app development and design.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/Soumyank_Padhy_Resume(Dec-2025).pdf" className='md:p-2 md:px-4 md:text-base flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light' target={'blank'}>Resume<LinkArrow className={'w-6 ml-1'} /></Link>
              </div>
            </div>
          </div>
          <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
            <Image sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw' src={lightBulb} alt='alt' className='w-full h-auto' />
          </div>
        </Layout>
        <HireMe className='ml-16' />
      </main>
    </>
  );
}
