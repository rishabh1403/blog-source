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
    allMarkdownRemark(sort:{order:DESC,fields:frontmatter___date}){
      edges{
        node{
          frontmatter{
            title
            description
            categories
            date(formatString: "MMMM Do, YYYY")
            shortDate:date(formatString: "MMM Do")
            year:date(formatString: "YYYY")
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
    node.frontmatter.categories.forEach(category => {
      if (!postByCategory[category]) {
        postByCategory[category] = [];
      }
      postByCategory[category].push({ node });
    })
  });

  const categories = Object.keys(postByCategory);
  const data = categories.reduce((acc, el) => {
    // console.log(postByCategory[acc]);
    const posts = postByCategory[el];
    // console.log(posts);
    return [...acc, { name: el, count: posts.length }]
  }, []);
  data.sort((a,b)=> b.count - a.count);
  createPage({
    path: '/categories',
    component: require.resolve("./src/templates/categories.js"),
    context: {
      categories: data
    },
  })


  categories.forEach(category => {
    const posts = postByCategory[category];
    createPage({
      path: `/categories/${category}`,
      component: require.resolve("./src/templates/singleCategory.js"),
      context: {
        category,
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
