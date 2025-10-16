import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '../../site.config.ts';

export async function GET(context) {
  const posts = await getCollection('posts-en');

  // Filter out draft posts and sort by publication date
  const publishedPosts = posts
    .filter(post => !post.data.draft)
    .sort((a, b) => new Date(b.data.publishDate).valueOf() - new Date(a.data.publishDate).valueOf());

  const customData = [
    `<atom:link href="${context.site}en/rss.xml" rel="self" type="application/rss+xml" />`,
    `<language>${siteConfig.rss.en.language}</language>`,
    `<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`
  ].join('\n    ');

  return rss({
    title: siteConfig.rss.en.title,
    description: siteConfig.descriptions.en,
    site: context.site,
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
      content: 'http://purl.org/rss/1.0/modules/content/'
    },
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      content: post.body,
      author: siteConfig.author,
      link: `/en/posts/${post.slug}/`,
      categories: post.data.tags,
    })),
    customData,
  });
}
