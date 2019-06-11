import React from 'react'
import { graphql } from 'gatsby';

const blog = (props) => {
  console.log(props.data.markdownRemark)
  return (
    <div>
      {props.data.markdownRemark.frontmatter.title}
      <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}} />
    </div>
  )
}

export const query = graphql`
  query($slug: String!){
    markdownRemark(frontmatter:{path:{eq:$slug}}){
      frontmatter{
        title
      }
      html
    }
  }
`
export default blog
