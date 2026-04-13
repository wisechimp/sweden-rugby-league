import Link from "next/link";

import { fetchClubs } from "@/actions";
import Clubcard from "@/components/club-card/clubcard";
import Jumbtron from "@/components/jumbotron/Jumbotron";

import norwayCharge from "../images/norwaycharge.jpg";

const HomePage = async () => {
  const clubData = await fetchClubs();

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
          Sweden. They were admitted to the{" "}
          <Link
            href="https://europeanrugbyleague.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            European Rugby League
          </Link>{" "}
          in 2011 as Observer members. They oversee the{" "}
          <Link href="/clubs">national competition</Link> in Sweden and the
          national team who were{" "}
          <Link
            href="https://intrl.sport/world-rankings"
            target="_blank"
            rel="noopener noreferrer"
          >
            ranked 32nd
          </Link>{" "}
          in the world as recently as 2022.
        </p>
      </div>
      <h2>Latest News</h2>
      <div>Yeah like some latest news here eller hur.</div>
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
