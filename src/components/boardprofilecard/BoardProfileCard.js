import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import * as styles from "./boardprofilecard.module.css"

const BoardProfileCard = ({ boardmember, imageData }) => {
  const { name, position, bio, appointed, termEnds, ImageAltText } = boardmember
  return (
    <div className={styles.boardCardContainer}>
      <h2>
        {name} - {position}
      </h2>
      <p>Bio - {bio}</p>
      <GatsbyImage image={imageData} alt={ImageAltText} />
    </div>
  )
}

export default BoardProfileCard
