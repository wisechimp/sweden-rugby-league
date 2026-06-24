import Link from "next/link";

import { fetchClubs } from "@/actions";
import Clubcard from "@/components/club-card/club-card";
import ExternalLink from "@/components/external-link/External-Link";
import Jumbtron from "@/components/jumbotron/Jumbotron";
import NewsCard from "@/components/news/news-card";
import norwayCharge from "@/images/norwaycharge.jpg";
import { sanityFetch } from "@/sanity/lib/live";
import { getNewsItems } from "@/sanity/lib/queries";

const HomePage = async () => {
  const clubData = await fetchClubs();
  const { data: latestNews } = await sanityFetch({
    query: getNewsItems,
  });

  console.log(latestNews);

  const renderedNews = latestNews.map((news) => {
    if (latestNews.length === 0) {
      return;
    } else {
      return <NewsCard key={news._id} newsData={news} />;
    }
  });

  return (
    <div>
      <Jumbtron
        imageSrc={norwayCharge}
        imageAltTxt="A Sweden player charges towards the Norwegian defenders with the ball"
      />
      <div className={"pageMainParagraph"}>
        <p>
          Sweden Rugby League was founded in 2009 with the aim to introduce and
          grow the sport of <Link href="/rugby-league">rugby league</Link> in
          Sweden. We were admitted to the{" "}
          <ExternalLink
            externalUrl="https://europeanrugbyleague.com/"
            externalLinkText="European Rugby League"
            umamiEventLabel="visitERL"
          />{" "}
          in 2011 as Observer members. We oversee the{" "}
          <Link href="/clubs">national competition</Link> in Sweden and the
          national team who were{" "}
          <ExternalLink
            externalUrl="https://intrl.sport/world-rankings"
            externalLinkText="ranked 32nd"
            umamiEventLabel="visitRankings"
          />{" "}
          in the world as recently as 2022.
        </p>
      </div>
      <h2>Latest News</h2>
      <div className="flexCards">{renderedNews}</div>
      <h2>Our Clubs</h2>
      <div className="flexCards">
        {clubData.map((club) => {
          return <Clubcard key={club.key} data={club} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
