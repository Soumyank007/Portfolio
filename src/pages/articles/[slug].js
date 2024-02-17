import React from 'react';
import Layout from '../../components/Layout';
import AnimatedText from '@/components/AnimatedText';

const Article = ({ article }) => (
  <Layout>
    <article className="max-w-3xl mx-auto p-6">
      <AnimatedText className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' text={article.title} />
      <p className="dark:text-light text-lg">{article.content}</p>
    </article>
  </Layout>
);

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'work-life-balance' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps() {
  // Fetch article data based on slug
  const article = {
    title: 'Feature under development Coming Soon...',
    content: '',
  };

  return {
    props: {
      article,
    },
  };
}

export default Article;
