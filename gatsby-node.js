exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const { data: { allMarkdownRemark: { edges } } } = await graphql(`
  {
    allMarkdownRemark(sort:{order:ASC,fields:frontmatter___date}){
      edges{
        node{
          frontmatter{
            title
            description
            tags
            path
          }
          fields{
            readingTime{
              text
            }
          }
        }
      }
    }
  }
  `)
  edges.forEach((edge, index) => {
    createPage({
      path: edge.node.frontmatter.path,
      component: require.resolve("./src/templates/blog.js"),
      context: {
        slug: edge.node.frontmatter.path,
        prev: index === 0 ? null : edges[index - 1].node,
        next: index === (edges.length - 1) ? null : edges[index + 1].node
      },
    })
  });

}