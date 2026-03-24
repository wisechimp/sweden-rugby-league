import Image from "next/image";
import Link from "next/link";

import ClubData from "@/types/ClubData";

import clubcardStyles from "./clubcard.module.css";

type ClubCardPropsType = {
  data: ClubData;
};

export default ({ data }: ClubCardPropsType) => {
  const { key, clubName, imgSrc, imgAlt, description, clubLink } = data;
  return (
    <div className={clubcardStyles.cardStructure}>
      <h2>{clubName}</h2>
      <Image src={imgSrc} alt={imgAlt} width={240} />
      <p>{description}</p>
      <div className="linkButt">
        <Link href={clubLink} target="_blank" rel="noopener noreferrer">
          Learn More...
        </Link>
      </div>
    </div>
  );
};
