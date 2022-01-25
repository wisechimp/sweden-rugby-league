import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"
import NewsSnippet from "../components/newssnippet"
//import latestNewsStyles from './latest-news.module.css'

export default ({ data }) => {
  console.log(data)

  return (
    <Layout pageTitle="Latest News">
      <h1>Latest News</h1>
      <div>
        {data.allMdx.edges.map(({ node }) => {
          return (
            <NewsSnippet
              key={node.id}
              headline={node.frontmatter.title}
              date={node.frontmatter.date}
              snippet={node.excerpt}
              slug={node.slug}
              imgSrc={node.frontmatter.imageSrc.childImageSharp.fluid}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export const newsQuery = graphql`
  query {
    allMdx{
      edges {
        node {
          id
          slug
          excerpt
          frontmatter {
            title
            date(formatString: "Do MMMM, YYYY")
            imageSrc{
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
