import { getNews } from "@/functions";

const NewsPage = () => {
  const allNews = getNews();
  console.log(allNews);
  return (
    <div>
      <h1>Latest News</h1>
      <h3>Sweden Rugby League travelling to Iceland</h3>
      <p>Pic above this then some chat here about the forthcoming fixture.</p>
    </div>
  );
};

export default NewsPage;
