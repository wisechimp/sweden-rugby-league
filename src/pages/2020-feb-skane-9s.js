import React from 'react'
import { graphql } from 'gatsby'
import ImageGallery from 'react-image-gallery'

import Layout from '../components/layout'

export default ({ data }) => {
  const { nodes } = data.allCloudinaryMedia
  console.log(nodes)

  const images = nodes.map(({ secure_url }) => ({ original: secure_url, thumbnail: secure_url.replace("q_auto,f_auto", "h_150,w_250") }))

  return (
    <Layout pageTitle="Skane 9's Feb 2020">
      <ImageGallery items={images} lazyLoad />
    </Layout>
  )
}

export const Skane9sImages202002 = graphql`
  query MyQuery {
    allCloudinaryMedia(filter: {public_id: {glob: "sweden-rugby-league/202002-skane9s/*"}}) {
      nodes {
        id
        secure_url
      }
    }
  }
`