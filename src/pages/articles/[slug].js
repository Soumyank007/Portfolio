import { React } from 'react';
import { client } from '@/lib/sanityClient'
import { PortableText } from '@portabletext/react'
import TransitionEffect from '@/components/TransitionEffect';
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText';
import CustomCodeBlock from '@/components/CustomCodeBlock';
import Head from 'next/head'

const myPortableTextComponents = {
  types: {
    code: ({ value }) => (
      <CustomCodeBlock language={value.language} code={value.code} />
    ),
    image: ({ value }) => <Image src={value.imageUrl} alt="img" />,
  },
};

const Article = ({ posts }) => {
  return (
    <>
      {posts && posts.map((post, index) => (
        <Head key={index}>
          <title>{post.title} | Soumyank Padhy</title>
          <meta name="description" content={post.shortDescription} />
        </Head>
      ))}
      <TransitionEffect />
      {posts && posts.map((post, index) => (
        <AnimatedText key={index} className="max-w-3xl my-8 !text-7xl lg:!text-5xl sm:mt-8 sm:my-0 sm:!text-4xl xs:!text-3xl sm:px-2" text={post.title} />
      ))}
      <article className="max-w-3xl mx-auto mt-0 p-6">
        <div>
          {posts && posts.map((post, index) => (
            <Image
              key={index}
              src={post.imageUrl}
              width={800}
              height={800}
              alt='Title Image'
              priority
              className='rounded-lg mb-8 border mx-auto'
            />
          ))}
        </div>
        <div className='prose prose-headings:underline prose-primary prose-xl sm:prose-base dark:prose-invert mx-auto'>
          {posts && posts.map((post, index) => (
            <PortableText key={index} className='dark:text-light' value={post.description} components={myPortableTextComponents} />
          ))}
        </div>
      </article>
    </>
  )
};

export async function getStaticPaths() {
  const query = `*[_type == "post"]{
    'slug':slug.current,
  }`;

  const posts = await client.fetch(query);

  const paths = posts.map((post) => ({
    params: { slug: post.slug }
  }));

  return {
    paths,
    fallback: true,
  };
}



export async function getStaticProps(context) {
  const slug = context.params.slug
  const query = `*[_type == "post"  && slug.current == '${slug}']{
    title,
    'slug':slug.current,
    'description':body,
     shortDescription,
    'imageUrl': mainImage.asset->url,
    publishedAt,
    readTime,
  }`
  const posts = await client.fetch(query)

  return {
    props: {
      posts,
    },
    revalidate: 30,
  };
}

export default Article;
