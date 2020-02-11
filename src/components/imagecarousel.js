import React from "react"
import { Carousel } from "react-bootstrap"
import Img from 'gatsby-image'

import styles from "./imagecarousel.module.css"

export default (props) => (
  <Carousel fade="true">
    <Carousel.Item>
      <Img
        className="d-block w-100"
        fluid={props.firstSlide}
        alt={props.firstSlideAlt}
      />
      <p className={styles.carouselCaption}>{props.firstSlideCaption}</p>
    </Carousel.Item>
    <Carousel.Item>
      <Img
        className="d-block w-100"
        fluid={props.secondSlide}
        alt={props.secondSlideAlt}
      />
      <p className={styles.carouselCaption}>{props.secondSlideCaption}</p>
    </Carousel.Item>
    <Carousel.Item>
      <Img
        className="d-block w-100"
        fluid={props.thirdSlide}
        alt={props.thirdSlideAlt}
      />
      <p className={styles.carouselCaption}>{props.thirdSlideCaption}</p>
    </Carousel.Item>
  </Carousel>
)
