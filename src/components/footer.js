import React from "react"
//import { Link } from 'gatsby'

import AgnesbergSmall from '../images/sponsoragnesbergssmall.png'
import Flyttdax from '../images/sponsorflyttdax.png'
import Fysiken from '../images/sponsorfysiken.jpg'
import McGlincheys from '../images/sponsormcglincheys.jpg'

import footerStyles from "./footer.module.css"

export default () => (
  <div>
    <p className={footerStyles.footer}>We're grateful to our partners for their support:</p>
    <div className={footerStyles.footerLogos}>
      <a href="http://www.agkungalv.se/" target="_blank" rel="noopener noreferrer">
        <img className={footerStyles.footerLogoBox} src={AgnesbergSmall} alt="Agnesberg's logo" />
      </a>
      <a href="http://www.flyttdax.se/" target="_blank" rel="noopener noreferrer">
        <img src={Flyttdax} alt="Flyttdax's logo" />
      </a>
      <a href="https://fysiken.nu/sv/" target="_blank" rel="noopener noreferrer">
        <img src={Fysiken} alt="Fysiken's logo" />
      </a>
      <img src={McGlincheys} alt="McGlinchey's logo" />
    </div>
  </div>
)
