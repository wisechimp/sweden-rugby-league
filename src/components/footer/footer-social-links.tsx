import Link from "next/link";

import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import styles from "./footersocialmedialinks.module.css";

const FooterSocialMediaLinks = () => (
  <div className={styles.socialGroup}>
    <Link
      href="https://www.facebook.com/swedenrugbyleague/"
      aria-label="Facebook icon link to Sweden Rugby League's Facebook page"
      rel="noopener noreferrer"
      target="_blank"
    >
      <FaFacebookSquare />
    </Link>
    <Link
      href="https://www.instagram.com/sweden_rugby_league"
      aria-label="Instagram icon link to Sweden Rugby League's Instagram page"
      rel="noopener noreferrer"
      target="_blank"
    >
      <FaInstagram />
    </Link>
    <Link
      href="https://twitter.com/swedenrugby"
      aria-label="Twitter icon link to Sweden Rugby League's Twitter page"
      rel="noopener noreferrer"
      target="_blank"
    >
      <FaTwitter />
    </Link>
    <Link
      href="https://www.youtube.com/channel/UCFgK9OchuqAxrBLrvcs4MKg"
      aria-label="Youtube icon link to Sweden Rugby League's Youtube page"
      rel="noopener noreferrer"
      target="_blank"
    >
      <FaYoutube />
    </Link>
  </div>
);

export default FooterSocialMediaLinks;
