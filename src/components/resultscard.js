import React from "react"
import Img from 'gatsby-image'

import resultsCardStyles from "./resultscard.module.css"

export default props => (
  <div>
    <div className={resultsCardStyles.resultContainer}>
      <div className={resultsCardStyles.teamContainer}>
        <div className={resultsCardStyles.teamLogo}>
          <Img fixed={props.homeTeamLogo} alt={props.homeTeamLogoAlt} />
        </div>
        <div className={resultsCardStyles.homeTeam}>
          <p>{props.homeTeam}</p>
        </div>
      </div>
      <div className={resultsCardStyles.score}>
        <p>
          {props.homeScore} <b>v</b> {props.awayScore}
        </p>
      </div>
      <div className={resultsCardStyles.teamContainer}>
        <div className={resultsCardStyles.awayTeam}>
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
  </div>
)
