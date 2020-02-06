import React from "react"

import Layout from '../components/layout'
import SrlLogo from '../images/srllogo.png'

export default () => {
    return (
        <Layout>
            <img src={SrlLogo} alt="Sweden Rugby League logo" />
            <h1>Welcome to Sweden Rugby League's website.</h1>
            <p>This is currently a work in progress so be sure to return soon for updated content!</p>
        </Layout>
    )
}