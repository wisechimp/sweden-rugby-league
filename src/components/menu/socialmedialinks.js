import React from "react"
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import { OutboundLink } from 'gatsby-plugin-google-analytics'

//import swedenFlag from "../images/sv-flag.png"
import styles from "./socialmedialinks.module.css"

export default () => (
  <div className={styles.socialGroup}>
    <OutboundLink
      href="https://www.facebook.com/swedenrugbyleague/"
      aria-label="Facebook icon link to Sweden Rugby League's Facebook page"
    >
      <FaFacebookSquare />
    </OutboundLink>
    <OutboundLink
      href="https://www.instagram.com/sweden_rugby_league"
      aria-label="Instagram icon link to Sweden Rugby League's Instagram page"
    >
      <FaInstagram />
    </OutboundLink>
    <OutboundLink
      href="https://twitter.com/swedenrugby"
      aria-label="Twitter icon link to Sweden Rugby League's Twitter page"
    >
      <FaTwitter />
    </OutboundLink>
    <OutboundLink
      href="https://www.youtube.com/channel/UCFgK9OchuqAxrBLrvcs4MKg"
      aria-label="Youtube icon link to Sweden Rugby League's Youtube page"
    >
      <FaYoutube />
    </OutboundLink>
  </div>
)
