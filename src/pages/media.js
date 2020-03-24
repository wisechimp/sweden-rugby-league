import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import MediaCard from '../components/mediacard'
import mediaStyles from './media.module.css'

export default ({ data }) => {
  console.log(data)

  return (
    <Layout pageTitle="Media">
      <h1>Media</h1>
      <h3>2020</h3>
      <div className={mediaStyles.mediaContainer}>
        <MediaCard
          key={data.allMediaJson.edges[0].node.id}
          eventTitle={data.allMediaJson.edges[0].node.eventTitle}
          photoIcon={data.allMediaJson.edges[0].node.photoIcon}
          eventImgSrc={
            data.allMediaJson.edges[0].node.thumbnail.childImageSharp.fixed
          }
          link={data.allMediaJson.edges[0].node.link}
        />
      </div>
      <h3>2019</h3>
      <div className={mediaStyles.mediaContainer}>
        <MediaCard
          key={data.allMediaJson.edges[1].node.id}
          eventTitle={data.allMediaJson.edges[1].node.eventTitle}
          photoIcon={data.allMediaJson.edges[1].node.photoIcon}
          eventImgSrc={
            data.allMediaJson.edges[1].node.thumbnail.childImageSharp.fixed
          }
          link={data.allMediaJson.edges[1].node.link}
        />
      </div>
    </Layout>
  )
}

export const mediaQuery = graphql`
query {
	allMediaJson {
		edges {
      node {
        id
        eventTitle
        date
        photoIcon
        thumbnail {
         childImageSharp {
            fixed(width: 300) {
						 ...GatsbyImageSharpFixed
						}
					}
				}
			 	link
		  }
	  }
	}
}
`