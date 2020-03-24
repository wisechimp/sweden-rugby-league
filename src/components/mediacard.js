import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { FaCamera, FaVideo } from "react-icons/fa"
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import mediaCardStyles from './mediacard.module.css'

export default props => (
  <div className={mediaCardStyles.mediaCard}>
    <h5>{props.eventTitle}</h5>
    {props.photoIcon ? (
      <FaCamera className={mediaCardStyles.mediaIcon} />
    ) : (
      <FaVideo className={mediaCardStyles.mediaIcon} />
    )}
    <Img className={mediaCardStyles.eventImage} fixed={props.eventImgSrc} />
    <div className={`${mediaCardStyles.mediaLink} linkButt`}>
      {props.photoIcon ? (
        <Link to={props.link}>View</Link>
      ) : (
        <OutboundLink
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View
        </OutboundLink>
      )}
    </div>
  </div>
)