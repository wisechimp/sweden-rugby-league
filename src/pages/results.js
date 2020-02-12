import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ResultsCard from '../components/resultscard'
import resultsStyles from './results.module.css'

export default ({ data }) => (

  <Layout pageTitle="Results">
		<h1>Results</h1>
		<div>
			{data.allResultsJson.edges.map(({ node }) => {
				return (
          <ResultsCard
            key={node.id}
            homeTeamLogo={node.homeTeamLogo.childImageSharp.fixed}
            homeTeamLogoAlt={node.homeTeamLogoAlt}
            homeTeam={node.homeTeam}
            homeScore={node.homeScore}
            awayTeam={node.awayTeam}
            awayScore={node.awayScore}
            awayTeamLogo={node.awayTeamLogo.childImageSharp.fixed}
            awayTeamLogoAlt={node.awayTeamLogoAlt}
            date={node.date}
						venue={node.venue}
						matchReportExists={node.matchReportExists}
						matchReportLink={node.matchReportLink}
          />
        )
			})}
		</div>    
  </Layout>
)

export const resultsQuery = graphql`
query {
	allResultsJson {
		edges {
      node {
        id
        homeTeam
        homeScore
        awayTeam
        awayScore
        date
        venue
        homeTeamLogo {
         childImageSharp {
            fixed(width: 60) {
						 ...GatsbyImageSharpFixed
						}
					}
				}
			 	homeTeamLogoAlt
			 	awayTeamLogo {
        	childImageSharp {
          	fixed(width: 60) {
            	...GatsbyImageSharpFixed
          	}
         	}
       	}
				 awayTeamLogoAlt
				 matchReportExists
				 matchReportLink
			}
		}
	}
}`