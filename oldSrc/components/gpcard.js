import React from "react"
import Img from "gatsby-image"

export default (props) => (
  <div>
    <Img
      fluid={props.cardImgSrc}
      alt={props.cardImgAlt}
      width="300"
    />
    <div>
      <p className="cardText">
        <b>{props.cardItemName}</b><br />
        {props.cardItemDescription}
      </p>
    </div>
  </div>
)
