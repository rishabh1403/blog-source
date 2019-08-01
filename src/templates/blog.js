import React from 'react'
import { graphql } from 'gatsby';
import Layout from "../components/Layout"
import Disqus from 'gatsby-plugin-disqus'
import styles from '../css/singleBlog.module.css'
import StyledHero from "../components/StyledHero"
import { FaClock } from "react-icons/fa";
import SEO from '../components/SEO';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const blog = (props) => {
  // console.log(props.pageContext)
  // console.log(props.data.markdownRemark)
  return (
    <Layout>
      <SEO title={props.data.markdownRemark.frontmatter.title}
          image={props.data.markdownRemark.frontmatter.image.childImageSharp.resize.src}
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
            {props.data.markdownRemark.frontmatter.categories.map((category, index) => {
              return <AniLink fade key={index} to={`/categories/${category}`}>
                #{category}</AniLink>
            })}
          </div>
          <div className="blogHolder">
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
          </div>
          <div className={styles.meta}>
            <h2>Read More</h2>
            <div>{props.pageContext.next &&
              <AniLink fade to={`/${props.pageContext.next.frontmatter.path}`}>
                {props.pageContext.next.frontmatter.title}</AniLink>}</div>
            <div>|</div>
            <div>{props.pageContext.prev &&
              <AniLink fade to={`/${props.pageContext.prev.frontmatter.path}`}>
                {props.pageContext.prev.frontmatter.title}</AniLink>}</div>
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
          resize(width: 900, quality: 90) {
            src
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
