import React from "react"
import Img from "gatsby-image"

import * as jumbotronStyles from "./jumbotron.module.css"

const Jumbotron = ({ imageSrc, imageCaption, imageAltText }) => (
  <div>
    <Img fluid={imageSrc} alt={imageAltText} />
    <p className={jumbotronStyles.captionBox}>{imageCaption}</p>
  </div>
)

export default Jumbotron
