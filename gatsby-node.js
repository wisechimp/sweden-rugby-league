const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/blogpost.js")

  return graphql(`
    {
      allMdx {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const BlogPosts = result.data.allMdx.edges
    BlogPosts.forEach(({ node }, index) => {
      createPage({
        path: `/news/${node.slug}`,
        component: BlogPostTemplate,
        context: {
          id: node.id,
        },
      })
    })
  })
}
