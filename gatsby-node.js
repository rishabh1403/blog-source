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

  const postByCategory = {}
  edges.forEach(({ node }) => {
    node.frontmatter.tags.forEach(tag => {
      if (!postByCategory[tag]) {
        postByCategory[tag] = [];
      }
      postByCategory[tag].push(node);
    })
  });

  const tags = Object.keys(postByCategory);
  createPage({
    path: '/tags',
    component: require.resolve("./src/templates/categories.js"),
    context: {
      tags: tags.sort()
    },
  })


  tags.forEach(tag => {
    const posts = postByCategory[tag];
    createPage({
      path: `/tags/${tag}`,
      component: require.resolve("./src/templates/singleCategory.js"),
      context: {
        tag,
        posts
      },
    })
  })

}