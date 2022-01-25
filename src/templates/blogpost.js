import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"
import blogStyles from "./blogpost.module.css"

const BlogPostTemplate = ({ data }) => (
  <Layout pageTitle="News">
    <div className={blogStyles.blogpostStyle}>
      {/* <h1>{wordpressPost.title}</h1>
      <p>Posted by Sweden Rugby League on {data.wordpressPost.date}</p>
      <br />
      <p>{data.wordpressPost.content}</p> */}
    </div>
  </Layout>
)

export default BlogPostTemplate

/* export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "Do MMMM, YYYY")
    }
  }
` */
