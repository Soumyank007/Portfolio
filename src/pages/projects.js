import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import theyyamImg from '../../public/images/projects/theyyamhome.png';
import nagarikaImg from '../../public/images/projects/nagarikahome.png';
import docpuzzleImg from '../../public/images/projects/docpuzzlehome.png';
import jobportalImg from '../../public/images/projects/jobportal.png';
import rcmsImg from '../../public/images/projects/rcms.png';
import { useState } from 'react';
import { motion } from 'framer-motion'

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerImage priority src={img} alt={title} className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">{type}</span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          {github && (
            <Link className="w-10" href={github} target="_blank">
              <GithubIcon />
            </Link>
          )}
          <Link
            className={`${github ? 'ml-4 ' : ''}rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark`}
            href={link}
            target="_blank"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ summary, title, img, link, github, type }) => {
  const [showSummary, setShowSummary] = useState(false);

  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light relative p-6 dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.1rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg relative"
        href={link}
        target="_blank"
      >
        <FramerImage priority src={img} alt={title} className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">{type}</span>
        <Link className="relative" href={link} target="_blank">
          <div className="flex items-center">
            <h2 className="hover:underline underline-offset-2 my-2 w-full text-left text-3xl font-bold dark:text-light">
              {title}{' '}
            </h2>
            <span
              className="ml-2 cursor-pointer rounded-full bg-light p-2 dark:bg-dark"
              onMouseEnter={() => setShowSummary(true)}
              onMouseLeave={() => setShowSummary(false)}
            >
              ℹ️
            </span>
          </div>
        </Link>
        {showSummary && (
          <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        )}
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            className="text-lg rounded-lg bg-dark text-light p-2 px-6 font-semibold hover:underline dark:bg-light dark:text-dark"
            href={link}
            target="_blank"
          >
            Visit Project
          </Link>
          {github && (
            <Link className="w-8" href={github} target="_blank">
              <GithubIcon />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};


const projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Soumyank Padhy</title>
        <meta
          name="description"
          content="Greetings! I'm Soumyank Padhy a passionate web developer and tech enthusiast.Explore my projects, insights, and the intersection of technology and creativity."
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText className="mb-16" text="Projects i have worked on" />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                title="Theyyam Festival"
                summary={'Theyyam Festival is a Festival management App created using VueJS, NuxtJS, Tailwind CSS, Kuroco(Headless CMS).'}
                link="https://theyyamfestival.com"
                type="Featured Project | Kemuri Technology"
                img={theyyamImg}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Nagarika"
                summary="Nagarika is a Contemporary dance video archive created using HTML, Tailwind CSS, Django, Python, JavaScript.Built from scratch,I worked on a major part of this project ranging from frontend to backend."
                link="https://nagarika.org"
                type="Project | Kemuri Technology"
                img={nagarikaImg}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Docpuzzle"
                summary="Docpuzzle is a Puzzle Creation Tool created using VueJS, Vuetify, NuxtJS, Tailwind CSS, Kuroco(Headless CMS).Users can create test's from various types of documents easily.I worked mainly on UI changes for this project"
                link="https://Docpuzzle.com"
                type="Project | Kemuri Technology"
                img={docpuzzleImg}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Job Search Portal"
                summary="A Full stack job search portal created using React.js, TypeScript, Express JS, NodeJS, MongoDB, REST API's, Redux.js, Material UI.Job searchers can sign up and apply for listed job's while HR's with admin priveleges can list new jobs and access candidate insights through a interactive dashboard."
                link="https://job-search-portal-ashy.vercel.app"
                type="Featured Project | Personal"
                img={jobportalImg}
                github="https://github.com/Soumyank007/Job-search-portal"
              />
            </div>
            <div className="col-span-6 col-start-4">
              <Project
                title="RCMS"
                summary="RCMS is a Headless Content Management Based on PHP.During my tenure at Kemuri Technology,I developed various Features and Fixed many intricate bugs for a variety of client project's based on RCMS."
                type="Project | Kemuri Technology"
                link="https://www.diverta.asia/topics_list20"
                img={rcmsImg}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
