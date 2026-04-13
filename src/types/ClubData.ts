import { StaticImageData } from "next/image";

type ClubData = {
  key: number,
  clubName: string,
  imgSrc: StaticImageData,
  imgAlt: string,
  description: string,
  clubLink: string,
}

export default ClubData