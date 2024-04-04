import { React } from 'react';
import { client } from '@/lib/sanityClient'
import { PortableText } from '@portabletext/react'
import TransitionEffect from '@/components/TransitionEffect';
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText';
import CustomCodeBlock from '@/components/CustomCodeBlock';
import Head from 'next/head'
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const myPortableTextComponents = {
  types: {
    code: ({ value }) => (
      <CustomCodeBlock language={value.language} code={value.code} />
    ),
    image: ({ value }) => (
      <Image
        className='rounded-lg mb-8 border mx-auto w-full h-auto'
        layout='responsive'
        width={0}
        height={0}
        alt='bodyImage'
        src={urlFor(value).auto('format').fit('max').quality(100).url()}
      />
    ),
  },
};

const Article = ({ posts }) => {
  let headTitle = '';
  let headDescription = '';

  if (posts && posts.length > 0) {
    headTitle = `${posts[0].title} | Soumyank Padhy`;
    headDescription = posts[0].shortDescription;
  }

  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content={headDescription} />
      </Head>
      <TransitionEffect />
      {posts && posts.map((post, index) => (
          <div key={index}>
            <AnimatedText className="max-w-3xl my-8 !text-7xl lg:!text-5xl sm:mt-8 sm:my-0 sm:!text-4xl xs:!text-3xl sm:px-2" text={post.title} />
            <article className="max-w-3xl mx-auto mt-0 p-6">
              <Image
                src={post.imageUrl}
                width={800}
                height={800}
                alt='Title Image'
                priority
                className='rounded-lg mb-8 border mx-auto'
              />
              <div className='prose prose-primary prose-xl sm:prose-base dark:prose-invert mx-auto'>
                <PortableText className='dark:text-light' value={post.description} components={myPortableTextComponents} />
              </div>
            </article>
          </div>
        ))}
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