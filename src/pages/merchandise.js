import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import merchandiseStyles from './merchandise.module.css'

export default ({ data }) => (
  <Layout pageTitle="Merchandise">
    <Img
			className={merchandiseStyles.shirtImage}
      fluid={data.file.childImageSharp.fluid}
      alt="The Sweden Rugby League team shirt."
    />
    <p className={merchandiseStyles.shopText}>
      The national team's current kit is supplied by the <a
        href="https://1908.store/pages/about-us"
        target="_blank"
        rel="noopener noreferrer"
      >Baskerville project</a>
      . If you are interested in getting your own to show you support for Sweden
      rugby league then please visit them <a
        href="https://1908.store/collections/frontpage/products/sweden-national-jersey"
        target="_blank"
        rel="noopener noreferrer"
      >here</a>.
    </p>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "srlshirt2018.png" }) {
      childImageSharp {
        fluid(maxWidth: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`