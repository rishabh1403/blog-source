import React from "react"
import styles from '../css/items.module.css'
import BlogCard from '../components/Blog/BlogCard'
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const getPreviousPageLink = currentPage => {
  if (currentPage < 3) {
    return "/"
  } else {
    return `/page/${currentPage - 1}`;
  }
}

export default class BlogList extends React.Component {
  render() {
    const { currentPage, numPages } = this.props.pageContext;
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <Layout>
        <StyledHero home={true} img={this.props.data.stubImage.childImageSharp.fluid}>
        </StyledHero>
        <section className={styles.blogs}>
          <div className={styles.center}>
            {posts.map((edge, index) => {
              return <BlogCard edge={edge} key={index} />
            })}

          </div>
          <div className={styles.meta}>
            <div style={{ float: "left" }}>
              <AniLink to={getPreviousPageLink(currentPage)} fade className="btn-primary" >Newer Posts</AniLink>

            </div>
            <div style={{ float: "right" }}>
              {currentPage < numPages && <AniLink to={`page/${currentPage + 1}`} fade className="btn-primary" >Older Posts</AniLink>}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
            readingTime{
              text
            }
          }
          frontmatter{
            title
            date(formatString: "MMMM Do, YYYY")
            description
            categories
            path
            image{
              childImageSharp{
                fluid(quality: 90, maxWidth:1000){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    stubImage:file(relativePath:{eq:"blogBcg.jpeg"}){
      childImageSharp{
        fluid(quality: 90, maxWidth:2000){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`