import React from "react"
import { graphql } from "gatsby"
import Parser from "html-react-parser"

import Layout from "../components/layout"
import blogStyles from "./blogpost.module.css"

const BlogPostTemplate = ({ data }) => (
  <Layout
    pageTitle="News"
  >
    <div className={blogStyles.blogpostStyle}>
      <h1>{Parser(data.wordpressPost.title)}</h1>
      <p>
        Posted by Sweden Rugby League on {data.wordpressPost.date}
      </p>
      <br />
      <p dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }} />
    </div>
  </Layout>
)

export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: {eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
    }
  }
`