import Link from "next/link";

import { getImageDimensions } from "@sanity/asset-utils";
import { Image } from "next-sanity/image";

import { urlFor } from "@/sanity/lib/image";
import NewsItem from "@/types/NewsItem";

type NewsCardProps = {
  key: string;
  newsData: NewsItem;
};

const NewsCard = ({ newsData }: NewsCardProps) => {
  const { title, slug, mainImage, mainImageAltText } = newsData;
  const { width, height } = getImageDimensions(mainImage);
  const aspectRatio = width / height;
  const imageUrl = urlFor(mainImage)
    .width(320)
    .maxHeight(400)
    .auto("format")
    .url();
  return (
    <div>
      <h3>{title}</h3>
      <Image
        src={imageUrl}
        alt={mainImageAltText}
        width={320}
        height={Math.round(240 / aspectRatio)}
      />
      <div className="linkButt">
        <Link href={slug} target="_blank" rel="noopener noreferrer">
          Read More...
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
