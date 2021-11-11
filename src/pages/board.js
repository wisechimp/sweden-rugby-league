import React from 'react'
import { graphql } from "gatsby"
import { getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout/Layout'
import BoardProfileCard from '../components/boardprofilecard/BoardProfileCard'

const Board = ({ data }) => {
	return (
    <Layout pageTitle="Board">
			<h1>The SRL Board</h1>
			<div>
				{data.allBoardmembersJson.edges.map(({ node }) => {
					const { id, imageSrc } = node
					const imageData = getImage(imageSrc)
					console.log(imageData)
					return (
						<BoardProfileCard
							key={id}
							boardmember={node}
							imageData={imageData}
						/>
					)
				})}
			</div>
    </Layout>
)}

export default Board

export const boardQuery = graphql`
	query {
		allBoardmembersJson {
			edges {
				node {
					appointed
					bio
					id
					imageAltText
					imageSrc {
						childImageSharp {
							gatsbyImageData
						}
					}
					name
					position
					termEnds
				}
			}
		}
	}
`