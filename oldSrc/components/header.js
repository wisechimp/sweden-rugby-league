import React from "react"
import { Helmet } from "react-helmet"

export default () => (
  <Helmet>
    <html lang="en" />
    <title>Sweden Rugby League</title>
    <meta charset="utf-8" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="description" content="The website for Sweden Rugby League" />
    <meta name="keywords" content="rugby league, sweden, sverige" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta property="og:title" content="Sweden Rugby League" />
    <meta property="og:description" content="Sweden Rugby League are the body responsible for rugby league in Sweden." />
    <meta property="og:image" content="https://swedenrugbyleague.com/images/srllogo.png" />
    <meta property="og:url" content="https://swedenrugbyleague.com/index.htm" />
    <meta property="og:site_name" content="Sweden Rugby League" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image:alt" content="Sweden Rugby League logo." />
    <link rel="apple-touch-icon" href="single-page-icon.png" />
  </Helmet>
)
