import Layout from '@/components/Layout';
import Image from 'next/image';
import profilePic from '../../public/images/profile/SP_1_bg_removed.png';
import Head from 'next/head';
import ParticlesContainer from '@/components/ParticlesContainer';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Soumyank Padhy</title>
        <meta name="description" content="Hi I&#39;m Soumyank Padhy, a tech enthusiast and full-stack web developer. Explore my journey, delve into innovative web solutions, and gain insights into the ever-evolving tech landscape."/>
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full relative">
            <div className="w-1/3 relative">
              <Image priority src={profilePic} alt="alt" className="w-full h-auto" />
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <ParticlesContainer />
              </div>
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <Image priority src={profilePic} alt="alt" className="w-full h-auto" />
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText text='Crafting Digital Marvels with the Power of Code and Creativity.' className='!text-left' />
              <p className='my-4 text-base font-medium'>
                With a knack for full-stack wizardry, I specialize in bringing your ideas to life through innovative web applications. Dive into my latest projects and insightful articles, highlighting my expertise in web development and design.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/Soumyank_Padhy_Resume.pdf" className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-dark border-2 border-solid border-transparent hover:border-dark' target={'blank'}>Resume<LinkArrow className={'w-6 ml-1'} /></Link>
                <HireMe className='ml-16' />
              </div>
            </div>
          </div>
        </Layout>
        <div className='absolute right-8 bottom-8 inline-block w-24'>
          <Image src={lightBulb} alt='alt' className='w-full h-auto' />
        </div>
      </main>
    </>
  );
}
