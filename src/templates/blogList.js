import React from "react"
import styles from '../css/items.module.css'
import BlogCard from '../components/Blog/BlogCard'
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <Layout>
        <StyledHero home={true} img={this.props.data.stubImage.childImageSharp.fluid}>
        </StyledHero>
        <section className={styles.blogs}>
          {/* <Title title="featured" subtitle="tours" /> */}
          <div className={styles.center}>
            {posts.map((edge, index) => {
              return <BlogCard edge={edge} key={index} />
            })}

          </div>
          {/* <AniLink to="/page/2" fade className="btn-primary" >Older Posts</AniLink> */}
        </section>
        {/* {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return <div key={node.fields.slug}>{node.fields.slug}</div>
        })} */}
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
          }
        }
      }
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