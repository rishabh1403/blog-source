import React from 'react'
import { graphql, Link } from 'gatsby';
import Layout from "../components/Layout"
import Disqus from 'gatsby-plugin-disqus'
import styles from '../css/singleBlog.module.css'
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"

const blog = (props) => {
  console.log(props.pageContext)
  console.log(props.data.markdownRemark)
  return (
    <Layout>
      <StyledHero home={true} img={props.data.stubImage.childImageSharp.fluid}>
      <Banner
        title={props.data.markdownRemark.frontmatter.title}
        info={props.data.markdownRemark.frontmatter.description}
      />
        </StyledHero>
    <div>
      {props.data.markdownRemark.frontmatter.title}
      <div className={styles.blog} dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
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
        description
      }
      html
    }
    stubImage:file(relativePath:{eq:"bc.png"}){
      childImageSharp{
        fluid(quality: 90, maxWidth:100){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default blog
