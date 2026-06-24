import { defineQuery } from "next-sanity";

export const getNewsItems =
  defineQuery(`*[_type == "news" ] | order(publishedOn desc) {
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "mainImage": mainImage,
      "mainImageAltText": mainImage.altText,
      "mainImageWidth": mainImage.asset->metadata.dimensions.width,
      "mainImageHeight": mainImage.asset->metadata.dimensions.height,
      publishedOn
    }`);

export const getNews = defineQuery(
  `*[_type == "news" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      "mainImageAltText": mainImage.altText,
      "mainImageWidth": mainImage.asset->metadata.dimensions.width,
      "mainImageHeight": mainImage.asset->metadata.dimensions.height,
      publishedOn,
      body[]
    }`
);
