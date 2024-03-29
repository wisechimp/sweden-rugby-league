import React from "react"
import { graphql, Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Layout from "../components/layout/Layout"
import HomeTitle from "../components/hometitle/Hometitle"
import Jumbotron from "../components/jumbotron/Jumbotron"
import SrlLogo from "../images/srllogomedium.png"

export default ({ data }) => {
  console.log(data)

  return (
    <Layout pageTitle="Sweden Rugby League">
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
          Sweden Rugby League was founded in 2009 with the aim to introduce and grow the
          sport of <Link to="/what-is-rugby-league">rugby league</Link> in
          Sweden. They were admitted to the{" "}
          <OutboundLink
            href="https://europeanrugbyleague.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            European Rugby League
          </OutboundLink>{" "}
          in 2011 as Observer members. They oversee the <Link to="/clubs">national competition</Link> in
          Sweden and the national team who were{" "}
          <OutboundLink
            href="https://intrl.sport/world-rankings/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ranked 32nd
          </OutboundLink>{" "}
          in the world at the start of 2022.
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
