import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Layout from "../components/layout/Layout"
import merchandiseStyles from "./merchandise.module.css"

export default ({ data }) => (
  <Layout pageTitle="Merchandise">
    <Img
      className={merchandiseStyles.shirtImage}
      fluid={data.file.childImageSharp.fluid}
      alt="The Sweden Rugby League team shirt."
    />
    <div className={`${merchandiseStyles.bigBuyButt} linkButt`}>
      <OutboundLink
        href="https://1908.store/collections/frontpage/products/sweden-national-jersey"
        target="_blank"
        rel="noopener noreferrer"
      >
        Buy Now!
      </OutboundLink>
    </div>
    <p className={merchandiseStyles.shopText}>
      The national team's current kit is supplied by the{" "}
      <OutboundLink
        href="https://1908.store/pages/about-us"
        target="_blank"
        rel="noopener noreferrer"
      >
        Baskerville project
      </OutboundLink>
      . If you are interested in getting your own to show you support for Sweden
      rugby league then please visit them{" "}
      <OutboundLink
        href="https://1908.store/collections/frontpage/products/sweden-national-jersey"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </OutboundLink>
      .
      <br />
      <br />
      UPDATE: The National Team jersey is currently sold out with our suppliers.
      If you would like to get your hands on one them please{" "}
      <Link to="/Contact">Contact us</Link> and we will work to arrange a
      re-stock to meet demand.
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
