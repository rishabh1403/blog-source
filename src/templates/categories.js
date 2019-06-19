import React from "react"
import styles from '../css/items.module.css'
import BlogCard from '../components/Blog/BlogCard'
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const categories = ({data, pageContext}) => {
  console.log(pageContext)
  return (
    <Layout>
        {/* <StyledHero home={true} img={this.props.data.stubImage.childImageSharp.fluid}>
        </StyledHero> */}
        <section className={styles.blogs}>
          <div className={styles.center}>
            {pageContext.categories.map((category, index) => {
              return <AniLink key={index} to={`categories/${category}`}>{category}</AniLink>
            })}
          </div>
        </section>
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
export default categories
