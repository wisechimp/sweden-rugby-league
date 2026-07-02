import { readdir } from "fs/promises";

import NewsItem from "@/types/NewsItem";

export const getNews = async (): Promise<NewsItem[]> => {
  const slugs = (
    await readdir(`./src/app/news/`, {
      withFileTypes: true,
    })
  ).filter((dirent) => dirent.isDirectory());

  // Retrieve metadata from MDX files
  const allNews = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`../app/news/${name}/page.mdx`);
      const newSlug = "news/" + name;
      return { slug: newSlug, ...metadata };
    })
  );

  allNews.sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
  return allNews;
};
