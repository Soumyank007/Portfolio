import { getServerSideSitemapLegacy } from 'next-sitemap';
import { client } from '@/lib/sanityClient'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export async function getServerSideProps(ctx) {
  const query = `*[_type == "post"]{
    'slug':slug.current,
    '_updatedAt':_updatedAt
  }`;

  const posts = await client.fetch(query);

  const fields = posts.map((post) => ({
    loc: `${siteUrl}/articles/${post.slug}`,
    lastmod: new Date(post._updatedAt).toISOString(),
    changefreq: 'daily',
    priority: 0.7,
  }))

return getServerSideSitemapLegacy(ctx, fields)
}

export default function Sitemap() {}