import Link from "next/link";

import { Image } from "next-sanity/image";

import { urlFor } from "@/sanity/lib/image";

import * as styles from "./news-card.module.css";

type NewsCardProps = {
  key: string;
  newsData: any;
};

const NewsCard = ({ newsData }: NewsCardProps) => {
  const {
    title,
    slug,
    mainImage,
    mainImageAltText,
    mainImageWidth,
    mainImageHeight,
  } = newsData;
  const aspectRatio = mainImageWidth / mainImageHeight;
  const imageUrl = urlFor(mainImage)
    .width(320)
    .maxHeight(400)
    .auto("format")
    .url();
  return (
    <div className={styles.cardStructure}>
      <h3>{title}</h3>
      <Image
        src={imageUrl}
        alt={mainImageAltText}
        width={320}
        height={Math.round(mainImageHeight / aspectRatio)}
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
