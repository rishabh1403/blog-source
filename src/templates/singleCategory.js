import React from 'react'
import { graphql, Link } from 'gatsby';

const singlecategories = ({data, pageContext}) => {
  console.log(pageContext)
  return (
    <div>
      something
    </div>
  )
}

// export const query = graphql`
//   query($slug: String!){
//     markdownRemark(frontmatter:{path:{eq:$slug}}){
//       frontmatter{
//         title
//       }
//       html
//     }
//   }
// `
export default singlecategories
