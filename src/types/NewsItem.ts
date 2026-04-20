type NewsItem = {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  mainImage: SanityImage;
  mainImageAltText: string;
  mainImageHeight: number;
  mainImageWidth: number;
};

export default NewsItem;
