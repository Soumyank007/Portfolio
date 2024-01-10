import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Soumyank Padhy</title>
        <meta name="description" content="Greetings! I'm Soumyank Padhy a passionate web developer and tech enthusiast.Explore my projects, insights, and the intersection of technology and creativity." />
      </Head>
      <main>
        <Layout>
          <AnimatedText text='Get a knack for my projects' />
        </Layout>
      </main>
    </>
  )
}

export default projects