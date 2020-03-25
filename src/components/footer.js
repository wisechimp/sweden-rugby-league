import React from "react"
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Link } from 'gatsby'

import Flyttdax from '../images/sponsorflyttdax.png'
import YourLogoHere from '../images/yourlogohere.png'

import footerStyles from "./footer.module.css"

export default () => (
  <div className={footerStyles.footer}>
    <p className={footerStyles.footerText}>
      We're grateful to our partners for their support:
    </p>
    <div className={footerStyles.footerLogos}>
      <OutboundLink
        href="http://www.flyttdax.se/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Flyttdax} alt="Flyttdax's logo" />
      </OutboundLink>
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
