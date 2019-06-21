import React from 'react'
import { graphql, Link } from 'gatsby';
import Layout from "../components/Layout"
import Disqus from 'gatsby-plugin-disqus'

const blog = (props) => {
  console.log(props.pageContext)
  console.log(props.data.markdownRemark)
  return (
    <Layout>
    <div>
      {props.data.markdownRemark.frontmatter.title}
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
      {props.pageContext.next &&
        <Link to={props.pageContext.next.frontmatter.path}>
          Next</Link>}
      {props.pageContext.prev &&
        <Link to={props.pageContext.prev.frontmatter.path}>
          {props.pageContext.prev.frontmatter.title}</Link>}
    </div>
    <Disqus />
    </Layout>
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
