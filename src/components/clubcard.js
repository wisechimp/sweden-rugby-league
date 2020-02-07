import React from 'react'
//import Link from 'gatsby'
//import Img from 'gatsby-image'

import clubcardStyles from './clubcard.module.css'

export default (props) => (
    <div className={clubcardStyles.cardStructure}>
        <h5>{props.clubName}</h5>
        <img 
            src={props.imgSrc}
            alt={props.imgAlt}
        />
        <p>{props.description}</p>
        <a href={props.clubLink} target="_blank" rel="noopener noreferrer">Learn More...</a>
    </div>
)