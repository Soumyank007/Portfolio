import React, { useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import article1 from '../../public/images/articles/work-life_balance.jpg';
import { motion, useMotionValue } from 'framer-motion'
const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = 'inline-block';
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave() {
    imgRef.current.style.display = 'none';
    x.set(0);
    y.set(0);
  }
  return (
    <Link href={link} target='_blank'
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className='capitalize text-xl font-semibold hover:underline'>
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef} src={img} alt={title} className='z-10 pt-4 w-96 h-auto hidden absolute rounded-lg' />
    </Link>

  )
}

const Article = ({ img, title, link, date }) => {
  return (
    <motion.li
    initial={{y:200}}
    whileInView={{y:0,transition:{duration:0.5,ease:'easeInOut'}}}
    viewport={{once:true}}
     className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4'>
      <MovingImg title={title} img={img} link={link} />
      <span className='text-primary font-semibold pl-4'>{date}</span>
    </motion.li>
  )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className=' relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl'>
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target='_blank'>
        <h2 className='capitalize text-2xl font-bold my-2 hover:underline'>{title}</h2>
      </Link>
      <p className='text-sm mb-2'>{summary}</p>
      <span className='text-primary font-semibold'>{time}</span>
    </li>
  )
}

const articles = () => {
  return (
    <>
      <Head>
        <title>Articles | Soumyank Padhy</title>
        <meta name='description' content='Explore Soumyank Padhy&#39;s collection of insightful articles.Engage with insightful articles on web development, technology trends, and creative musings. Stay informed, inspired, and join the dialogue.' />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
        <Layout className='pt-16'>
          <AnimatedText text='Words can change the world' className='mb-16' />
          <ul className='grid grid-cols-2 gap-16'>
            <FeaturedArticle title="Navigating Work and Life in the Dynamic World of Software Development" img={article1} summary="Navigate the dynamic world of software development with a focus on work-life balance. Explore effective time management, continuous learning without burnout, and self-care rituals. Adapt to remote work challenges and understand the positive impact of balance on individual success and the broader software development community. Master the art of equilibrium for lasting fulfillment." link='/' time='5 min read' />
          </ul>
          <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
          <ul>
            <Article title="Navigating Work and Life in the Dynamic World of Software Development" img={article1} link='/' date='05 Feb 2024' />
          </ul>
        </Layout>
      </main>
    </>
  )
}

export default articles