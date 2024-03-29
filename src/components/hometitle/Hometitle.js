import React from "react"

import styles from "./hometitle.module.css"

export default (props) => (
  <div className={styles.headerContainer}>
    <div className={styles.brandname}>
      <h1>{props.title}</h1>
      <h2 className={styles.tagline}><i>{props.tagline}</i></h2>
    </div>
    <div className={styles.logo}>
      <img className={styles.logo} src={props.imgSrc} alt={props.imgAlt} />
    </div>
  </div>
)
