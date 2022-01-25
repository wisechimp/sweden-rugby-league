import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from 'gatsby-image'

import Layout from "../components/layout/Layout"
import blogStyles from "./blogpost.module.css"

const BlogPostTemplate = ({ data }) => {
  const { frontmatter, body } = data.mdx

  return (
    <Layout pageTitle="News">
      <div className={blogStyles.blogpostStyle}>
        <h1>{frontmatter.title}</h1>
        <p>Posted by {frontmatter.author} on {frontmatter.date}</p>
        <Img fluid={frontmatter.imageSrc.childImageSharp.fluid} alt="" />
        <br />
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Layout>
)}

export default BlogPostTemplate

export const query = graphql`
  query PostsById($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        author
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
`
