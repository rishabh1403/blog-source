import React from "react"
import styles from '../css/items.module.css'
import BlogCard from '../components/Blog/BlogCard'
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import BlogList from '../components/Blog/BlogList';
import { groupByYear } from '../util/utils';
const singlecategories = ({ data, pageContext }) => {
  console.log(pageContext)
  return (
    <Layout>
      {/* <StyledHero home={true} img={this.props.data.stubImage.childImageSharp.fluid}>
    </StyledHero> */}
      {/* <section className={styles.blogs}>
        <div className={styles.center}>
          {pageContext.posts.map((post, index) => {
            return <AniLink key={index} to={post.frontmatter.path}>{post.frontmatter.title}</AniLink>
          })}
        </div>
      </section> */}
      <BlogList edges={groupByYear(pageContext.posts)} />
    </Layout>
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
