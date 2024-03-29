import React from "react"
import Img from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import resultsCardStyles from "./resultscard.module.css"

export default props => (
  <>
    <div className={resultsCardStyles.resultContainer}>
      <div className={resultsCardStyles.homeTeamContainer}>
        <div className={resultsCardStyles.teamLogo}>
          <Img fixed={props.homeTeamLogo} alt={props.homeTeamLogoAlt} />
        </div>
        <div className={resultsCardStyles.team}>
          <p>{props.homeTeam}</p>
        </div>
      </div>
      <div className={resultsCardStyles.score}>
        <p>
          {props.homeScore} <b>v</b> {props.awayScore}
        </p>
      </div>
      <div className={resultsCardStyles.awayTeamContainer}>
        <div className={resultsCardStyles.team}>
          <p>{props.awayTeam}</p>
        </div>
        <div className={resultsCardStyles.teamLogo}>
          <Img fixed={props.awayTeamLogo} alt={props.awayTeamLogoAlt} />
        </div>
      </div>
    </div>
    <div className={resultsCardStyles.matchDetails}>
      <p>
        {props.date}, {props.venue}
      </p>
    </div>
    {props.videoExists && (
      <div className={resultsCardStyles.linkButt}>
      <OutboundLink href={props.videoLink} target="_blank" rel="noopener noreferrer">Video</OutboundLink>
    </div>
    )}
    {props.matchReportExists && (
      <div className={resultsCardStyles.linkButt}>
        <OutboundLink href={props.matchReportLink} target="_blank" rel="noopener noreferrer">Match Report</OutboundLink>
      </div>
    )}
  </>
)
