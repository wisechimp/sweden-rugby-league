import React from 'react'
import Img from 'gatsby-image'

const Jumbotron = ({ imageSrc, imageCaption, imageAltText }) => (
  <div>
    <Img
      fluid={imageSrc}
      alt={imageAltText}
    />
		<p>{imageCaption}</p>
  </div>
)

export default Jumbotron