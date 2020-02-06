import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SrlLogo from "../images/srllogolarge.png"

export default () => (
  <Layout
    pageTitle="Whoops!"
  >
    <h1>Whoops!</h1>
    <img className="poster"
      src={SrlLogo}
      alt="Sweden Rugby League's Logo"
    />
    <div className="bodyContent">
      <p align="center">Sorry someone's dropped a ball somewhere as this doesn't appear to be the page you're looking for. You can return to the <Link to="/">home</Link> page or go back to the previous page.</p>
    </div>
  </Layout>
)
