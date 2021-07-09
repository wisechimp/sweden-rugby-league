import React from "react"

import Layout from "../components/layout/Layout"
import thanksStyles from "./thanks.module.css"

export default () => (
  <Layout pageTitle="Thanks!">
    <div className={thanksStyles.thanksContent}>
      <h3>Thank you!</h3>
      <br />
      <p>Thank you for taking the time to contact Sweden Rugby League.</p>
      <br />
      <p>We will try to get back to you as soon as possible.</p>
    </div>
  </Layout>
)
