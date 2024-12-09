import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import clubcardStyles from './clubcard.module.css'

export default (props) => (
    <div className={clubcardStyles.cardStructure}>
        <h2>{props.clubName}</h2>
        <img 
            src={props.imgSrc}
            alt={props.imgAlt}
        />
        <p>{props.description}</p>
        <div className="linkButt">
            <OutboundLink
                href={props.clubLink} 
                target="_blank" 
                rel="noopener noreferrer"
            >
                Learn More...
            </OutboundLink>
        </div>
    </div>
)