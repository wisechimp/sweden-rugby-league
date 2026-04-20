import { groq } from "next-sanity";

import NewsItem from "@/types/NewsItem";
import Page from "@/types/Page";
import Partner from "@/types/Partner";

import clientConfig from "./config/client-config";

const getPage = async (slug: string): Promise<Page> => {
  return clientConfig.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      content,
      "mainImage": mainImage.asset->url,
      "mainImageAltText": mainImage.altText,
      "mainImageHeight": mainImage.imagesize[]->height,
      "mainImageWidth": mainImage.imagesize[]->width
    }`,
    { slug: slug }
  );
};

const getNewsItems = async (): Promise<NewsItem[]> => {
  return clientConfig.fetch(
    groq`*[_type == "news" ] | order(publishedOn desc) {
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      "mainImageAltText": mainImage.altText,
      "mainImageHeight": mainImage.imagesize[]->height,
      "mainImageWidth": mainImage.imagesize[]->width,
      publishedOn
    }`
  );
};

const getNews = async (slug: string): Promise<Page> => {
  return clientConfig.fetch(
    groq`*[_type == "news" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content,
      "mainImage": mainImage.asset->url,
      "mainImageAltText": mainImage.altText,
      "mainImageHeight": mainImage.imagesize[]->height,
      "mainImageWidth": mainImage.imagesize[]->width,
      publishedOn
    }`,
    { slug: slug }
  );
};

const getPartners = async (): Promise<Partner[]> => {
  return clientConfig.fetch(
    groq`*[_type == "partner"]{
      _id,
      _createdAt,
      name,
      "logo": logo.asset->url,
      "logoAltText": logo.altText,
      url,
    }`
  );
};

export { getPage, getNews, getNewsItems, getPartners };
