import React from "react"
import { Link } from "gatsby"

import styles from "./newssnippet.module.css"

export default props => (
  <div className={styles.snippet}>
    <h3>{props.headline}</h3>
    <div className={styles.snippetContent}>
      <p className={styles.newsSnippet}>{props.snippet}</p>
      <img className={styles.imageReducedSize} src={props.imgSrc} alt=""/>
    </div>
    <div className={styles.readMore}>
      <Link to={`/news/${props.slug}`}>Read more...</Link>
    </div>
  </div>
)
