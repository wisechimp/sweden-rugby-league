import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'

import styles from "./newssnippet.module.css"

export default props => (
  <div className={styles.snippet}>
    <div className={styles.headline}>
      <p>{props.headline}</p>
    </div>
    <div className={styles.newsDate}>
      <p>{props.date}</p>
    </div>
    <div>
      <Img className={styles.newsImage} fluid={props.imgSrc} alt=""/>
    </div>
    <div className={styles.newsSnippet}>
      <p>{props.snippet}</p>
    </div>
    <div className="linkButt">
      <Link to={`/news/${props.slug}`}>Read more...</Link>
    </div>
  </div>
)
