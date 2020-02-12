import React from "react"
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Link } from 'gatsby'

import AgnesbergSmall from '../images/sponsoragnesbergssmall.png'
import Flyttdax from '../images/sponsorflyttdax.png'
import Fysiken from '../images/sponsorfysiken.jpg'
import McGlincheys from '../images/sponsormcglincheys.jpg'
import YourLogoHere from '../images/yourlogohere.png'

import footerStyles from "./footer.module.css"

export default () => (
  <div>
    <p className={footerStyles.footer}>
      We're grateful to our partners for their support:
    </p>
    <div className={footerStyles.footerLogos}>
      <OutboundLink
        href="http://www.agkungalv.se/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={AgnesbergSmall} alt="Agnesberg's logo" />
      </OutboundLink>
      <OutboundLink
        href="http://www.flyttdax.se/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Flyttdax} alt="Flyttdax's logo" />
      </OutboundLink>
      <OutboundLink
        href="https://fysiken.nu/sv/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Fysiken} alt="Fysiken's logo" />
      </OutboundLink>
      <img src={McGlincheys} alt="McGlinchey's logo" />
    </div>
    <Link to="/contact/">
      <img
        className={footerStyles.sponsorUs}
        src={YourLogoHere}
        alt="Learn how to sponsor us and have your logo here."
      />
    </Link>
  </div>
)
