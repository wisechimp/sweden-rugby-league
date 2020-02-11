import React from "react"
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import HomeTitle from '../components/hometitle'
import ImageCarousel from '../components/imagecarousel'
import SrlLogo from '../images/srllogomedium.png'

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
        <ImageCarousel
          firstSlide={data.norwayCharge.childImageSharp.fluid}
          firstSlideAlt="A picture of a Sweden forward taking the ball into contact against Norway 2017."
          firstSlideCaption="A pacy hit up against Norway in 2017"
          secondSlide={data.teamPicture.childImageSharp.fluid}
          secondSlideAlt="The side that almost upset the Dutch in Amsterdam in 2017."
          secondSlideCaption="The side that faced Holland in Amsterdam in 2017."
          thirdSlide={data.huddleUp.childImageSharp.fluid}
          thirdSlideAlt="Coach Ashley Brown gives some last minute advice prior to a match."
          thirdSlideCaption="The team get some last minute advice."
        />
        <div className="bodyContent">
          <p>
            Sweden Rugby League were founded in 2009 with the aim to organise
            the sport of <Link to="/what-is-rugby-league">rugby league</Link> in
            Sweden. They were admitted to the{" "}
            <a
              href="https://www.rlef.eu.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rugby League European Federation
            </a>{" "}
            in 2011 as Observer members. They oversee the national competition
            in Sweden and the national team who were{" "}
            <a
              href="http://www.rlif.com/article/8789/kiwis-take-no--spot-in-latest-international-rugby-league-world-rankings"
              target="_blank"
              rel="noopener noreferrer"
            >
              ranked 30th
            </a>{" "}
            in the world at the start of 2020.
          </p>
        </div>
      </Layout>
    )
}

export const carouselQuery = graphql`
  query {
  	norwayCharge: file(relativePath: { eq: "norwaycharge.jpg" }) {
      childImageSharp {
        fluid (maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
		}
		teamPicture: file(relativePath: { eq: "swedenteamholland2017.jpg" }) {
			childImageSharp {
				fluid (maxWidth: 1000, quality: 100) {
					...GatsbyImageSharpFluid
				}
			}
		}
		huddleUp: file(relativePath: { eq: "huddleup.jpg" }) {
			childImageSharp {
				fluid (maxWidth: 1000, quality: 100) {
					...GatsbyImageSharpFluid
				}
			}
		}
		 agnesberg: file(relativePath: { eq: "sponsoragnesbergssmall.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`