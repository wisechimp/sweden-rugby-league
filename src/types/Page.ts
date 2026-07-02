type Page = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  mainImage: string;
  mainImageAltText: string;
  mainImageHeight: number;
  mainImageWidth: number;
  content: string;
};

export default Page;
