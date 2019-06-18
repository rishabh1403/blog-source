const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: node.frontmatter.path,
    })
  }
}




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


  const paginated = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
  const paginatedposts = paginated.data.allMarkdownRemark.edges
  const postsPerPage = 9
  const numPages = Math.ceil(paginatedposts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: `/page/${i + 1}`,
      component: require.resolve("./src/templates/blogList.js"),
      context: {
        limit: postsPerPage,
        skip: (i * postsPerPage) + 1,
        numPages,
        currentPage: i + 1,
      },
    })
  })

}
// function limit (i){
//   if(i === 0){
//     10
//   }else{
//     9
//   }
// }
// function skip (i){
//   if(i === 0){
//     (i * post ) +1
//   }else{
//     9
//   }
// }