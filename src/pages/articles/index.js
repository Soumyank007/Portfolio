import React, { useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useMotionValue } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import { client } from '@/lib/sanityClient'
import dayjs from 'dayjs'
const FramerImage = motion.create(Image);

export async function getStaticProps() {
  const query = `*[_type == "post"]{
    title,
    'slug':slug.current,
    'description':shortDescription,
    'imageUrl': mainImage.asset->url,
    publishedAt,
    readTime,
  } | order(publishedAt desc)`
  const posts = await client.fetch(query)
  return {
    props: {
      posts,
    },
    revalidate: 30,
  }
}

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
    <Link href={link}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      aria-label="Article Image"
    >
        <h2 className='capitalize text-2xl font-bold hover:underline xs:text-lg'>{title}</h2>
      <FramerImage
        priority
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        width={640}
        height={640}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef} src={img} alt={title} className='z-10 pt-4 w-96 h-auto hidden absolute rounded-lg md:!hidden' />
    </Link>

  )
}

const Article = ({ img, title, link, date }) => {
  return (
    <motion.li
      initial={{y:100}}
      whileInView={{y:0,transition:{duration:0.5,ease:'easeInOut'}}}
      viewport={{once:true}}
      className='relative w-full p-4 py-6 my-4 rounded-xl flex sm:flex-col justify-between bg-light text-dark first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4 dark:bg-dark dark:text-light'>
      <MovingImg priority title={title} img={img} link={link} />
      <span className='text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:p-0 xs:text-sm'>{date}</span>
    </motion.li>
  )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className=' relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
        href={link}
        aria-label="Article Image"
      >
        <FramerImage
        width={640}
        height={640}
        priority sizes='(max-width:768) 100vw,(max-width:1200px) 50vw,33vw' src={img} alt={title}   className="xs:max-h-[200px] xs:min-h-[200px] sm:max-h-[320px] sm:min-h-[320px] lg:max-h-[320px] lg:min-h-[320px] xl:max-h-[320px] xl:min-h-[320px] 2xl:max-h-[320px] 2xl:min-h-[320px] max-h-[640px] min-h-[640px] w-full h-auto"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        />
      </Link>
      <Link aria-label="Article Title" href={link}>
        <h2 className='capitalize text-2xl font-bold my-2 hover:underline xs:text-lg'>{title}</h2>
      </Link>
      <p className='text-sm mb-2 line-clamp-3'>{summary}</p>
      <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
    </li>
  )
}

const Articles = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Articles | Soumyank Padhy</title>
        <meta name='description' content='Explore Soumyank Padhy&#39;s collection of insightful articles.Engage with insightful articles on web development, technology trends, and creative musings. Stay informed, inspired, and join the dialogue.' />
      </Head>
      <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
          <Layout className='pt-16'>
            <AnimatedText text='Words Shape Our World' className='mb-16 lg:!text-7xl sm:mb-8 sm:!!text-6xl xs:!text-4xl' />
            <ul className='grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16'>
            {posts && posts.map((post, index) => (
              <FeaturedArticle key={index} title={post.title} img={post.imageUrl} summary={post.description} link={`articles/${post.slug}`} time={post.readTime} />
              ))}
            </ul>
            <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
            <ul>
            {posts && posts.map((post, index) => (
              <Article key={index} title={post.title} img={post.imageUrl} link={`articles/${post.slug}`}  date={dayjs(post.publishedAt).format('DD MMMM YYYY')} />
              ))}
            </ul>
          </Layout>
        </main>

    </>
  )
}

export default Articles