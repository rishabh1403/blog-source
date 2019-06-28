import React from 'react'
import { graphql, Link } from 'gatsby';
import Layout from "../components/Layout"
import Disqus from 'gatsby-plugin-disqus'
import styles from '../css/singleBlog.module.css'
import StyledHero from "../components/StyledHero"
import { FaClock } from "react-icons/fa";
import SEO from '../components/SEO';

const blog = (props) => {
  // console.log(props.pageContext)
  // console.log(props.data.markdownRemark)
  return (
    <Layout>
      <SEO title={props.data.markdownRemark.frontmatter.title}
        keywords={props.data.markdownRemark.frontmatter.keywords.join(" , ")}
        description={props.data.markdownRemark.frontmatter.description} />

      <StyledHero home={true} img={props.data.markdownRemark.frontmatter.image.childImageSharp.fluid}>
      </StyledHero>
      <div className={styles.blog}>
        <div className={styles.aboutCenter}>
          <h1 className={styles.heading}>{props.data.markdownRemark.frontmatter.title}</h1>
          <div className={styles.meta}>
            <div>{props.data.markdownRemark.frontmatter.date}</div>
            <div>|</div>
            <div><FaClock />{props.data.markdownRemark.fields.readingTime.text}</div>
          </div>
          <div className={styles.linkHolder}>
            {props.data.markdownRemark.frontmatter.categories.map((category) => {
              return <Link to={`/categories/${category}`}>
                #{category}</Link>
            })}
          </div>
          <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
          <div className={styles.meta}>
            <h2>Read More</h2>
            <div>{props.pageContext.next &&
              <Link to={`/${props.pageContext.next.frontmatter.path}`}>
                {props.pageContext.next.frontmatter.title}</Link>}</div>
            <div>|</div>
            <div>{props.pageContext.prev &&
              <Link to={`/${props.pageContext.prev.frontmatter.path}`}>
                {props.pageContext.prev.frontmatter.title}</Link>}</div>
          </div>


          <Disqus />
        </div>

      </div>

    </Layout>
  )
}

export const query = graphql`
  query($slug: String!){
        markdownRemark(frontmatter: {path: {eq: $slug}}){
        frontmatter{
      title
      description
      date(formatString: "MMMM Do, YYYY")
      categories
      keywords
        image{
        childImageSharp{
      fluid(maxWidth:2000){
        ...GatsbyImageSharpFluid
      }
      }
    }
  }
      fields{
        readingTime{
      text
    }
  }
  html
}
}
`
export default blog
