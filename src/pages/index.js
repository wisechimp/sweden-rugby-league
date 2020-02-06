import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import HomeTitle from '../components/hometitle'
import SrlLogo from '../images/srllogolarge.png'

export default () => {
    return (
        <Layout pageTitle="SRL">
            <HomeTitle
                title="Sweden Rugby League"
                tagline="The official body responsible for rugby league in Sweden."
                imgSrc={SrlLogo}
                imgAlt="The logo of Sweden Rugby League."
            />
            <div className="bodyContent">
                <p>Sweden Rugby League were founded in 2009 with the aim to organise the sport of <Link to='/what-is-rugby-league'>rugby league</Link> in Sweden. They were admitted to the <a href="https://www.rlef.eu.com" target="_blank" rel="noopener noreferrer">Rugby League European Federation</a> in 2011 as Observer members. They oversee the national competition in Sweden and the national team who were <a href="http://www.rlif.com/article/8789/kiwis-take-no--spot-in-latest-international-rugby-league-world-rankings" target="_blank" rel="noopener noreferrer">ranked 30th</a> in the world at the start of 2020.</p>
            </div>
        </Layout>
    )
}