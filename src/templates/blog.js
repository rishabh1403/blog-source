import React from 'react'
import { graphql, Link } from 'gatsby';
import Layout from "../components/Layout"
import Disqus from 'gatsby-plugin-disqus'
import styles from '../css/singleBlog.module.css'
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import { FaClock } from "react-icons/fa";

const blog = (props) => {
  console.log(props.pageContext)
  console.log(props.data.markdownRemark)
  return (
    <Layout>
      {/* <StyledHero home={true} img={props.data.stubImage.childImageSharp.fluid}>
        </StyledHero> */}
      <div className={styles.blog}>
        <div>
          <h1 className={styles.heading}>{props.data.markdownRemark.frontmatter.title}</h1>
          <div className={styles.meta}>
            <div>{props.data.markdownRemark.frontmatter.date}</div>
            <div>|</div>
            <div><FaClock/>{props.data.markdownRemark.fields.readingTime.text}</div>
          </div>
          <div className={styles.linkHolder}>
            {props.data.markdownRemark.frontmatter.categories.map((category)=>{
              return <Link to={`categories/${category}`}>
              #{category}</Link>
            })}
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
        {props.pageContext.next &&
          <Link to={props.pageContext.next.frontmatter.path}>
            {props.pageContext.next.frontmatter.title}</Link>}
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
        date(formatString: "MMMM Do, YYYY")
        categories
      }
      fields{
        readingTime{
          text
        }
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
