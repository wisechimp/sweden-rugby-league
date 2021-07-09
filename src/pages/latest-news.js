import React from "react"
import { graphql } from "gatsby"
import Parser from "html-react-parser"

import Layout from "../components/layout/Layout"
import NewsSnippet from "../components/newssnippet"
//import latestNewsStyles from './latest-news.module.css'

export default ({ data }) => {
  console.log(data)

  return (
    <Layout pageTitle="Latest News">
      <h1>Latest News</h1>
      <div>
        {data.allWordpressPost.edges.map(({ node }) => {
          return (
            <NewsSnippet
              key={node.id}
              headline={Parser(node.title)}
              date={node.date}
              snippet={Parser(node.excerpt)}
              slug={node.slug}
              imgSrc={node.jetpack_featured_media_url}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export const newsQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          id
          content
          date(formatString: "Do MMMM, YYYY")
          slug
          excerpt
          title
          jetpack_featured_media_url
        }
      }
    }
  }
`
