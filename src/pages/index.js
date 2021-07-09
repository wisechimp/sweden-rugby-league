import React from "react"
import { graphql, Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Layout from "../components/layout"
import HomeTitle from "../components/hometitle"
import Jumbotron from "../components/jumbotron/Jumbotron"
import SrlLogo from "../images/srllogomedium.png"

export default ({ data }) => {
  console.log(data)

  return (
    <Layout pageTitle="SRL">
      <HomeTitle
        title="Sweden Rugby League"
        tagline="The official body responsible for rugby league in Sweden."
        imgSrc={SrlLogo}
        imgAlt="The logo of Sweden Rugby League."
      />
      <Jumbotron
        imageSrc={data.norwayCharge.childImageSharp.fluid}
        imageAltText="A picture of a Sweden forward taking the ball into contact against Norway 2017."
        imageCaption="A pacy hit up against Norway in 2017"
      />
      <div className="bodyContent">
        <p>
          Sweden Rugby League were founded in 2009 with the aim to organise the
          sport of <Link to="/what-is-rugby-league">rugby league</Link> in
          Sweden. They were admitted to the{" "}
          <OutboundLink
            href="https://www.rlef.eu.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rugby League European Federation
          </OutboundLink>{" "}
          in 2011 as Observer members. They oversee the national competition in
          Sweden and the national team who were{" "}
          <OutboundLink
            href="http://www.rlif.com/article/8789/kiwis-take-no--spot-in-latest-international-rugby-league-world-rankings"
            target="_blank"
            rel="noopener noreferrer"
          >
            ranked 30th
          </OutboundLink>{" "}
          in the world at the start of 2020.
        </p>
      </div>
    </Layout>
  )
}

export const jumbotronQuery = graphql`
  query {
    norwayCharge: file(relativePath: { eq: "norwaycharge.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
