exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const { data: { allMarkdownRemark: { edges } } } = await graphql(`
  {
    allMarkdownRemark(sort:{order:DESC,fields:frontmatter___date}){
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
  edges.forEach(edge => {
    console.log(edge)
    createPage({
      path: edge.node.frontmatter.path,
      component: require.resolve("./src/templates/blog.js"),
      context: {
        slug: edge.node.frontmatter.path
      },
    })
  });

}