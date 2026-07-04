import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('posts'))
    .filter(p => !p.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'KSH1004 — 김순하',
    description: '개발·금융·정보분석 블로그',
    site: context.site,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/posts/${post.id}`,
      categories: [post.data.category, post.data.subcategory, post.data.subsubcategory].filter(Boolean),
    })),
    customData: '<language>ko</language>',
  });
}
