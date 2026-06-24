import React from "react"

import Header from "../header"
import Menu from "../menu/menu"
import Footer from "../footer"
import * as layoutStyles from "./layout.module.css"

export default props => (
  <div>
    <Header />
    <Menu pageTitle={props.pageTitle} />
    <div className={layoutStyles.childrenContainer}>{props.children}</div>
    <Footer />
  </div>
)
