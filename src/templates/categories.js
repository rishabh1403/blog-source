import React from "react"
import styles from '../css/categories.module.css'
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const categories = ({ data, pageContext }) => {
  // console.log(pageContext)
  return (
    <Layout>
      <StyledHero home={true} img={data.stubImage.childImageSharp.fluid}>
        </StyledHero>
      <section className={styles.blogs}>
        <div className={styles.center}>
          {pageContext.categories.map((category, index) => {
            return <AniLink fade className={styles.title} key={index} to={`/categories/${category.name}`}>
              {category.name}<span className={styles.count}>({category.count})</span>
            </AniLink>
          })}
        </div>
      </section>
    </Layout>
  )
}


export const categoryImageQuery = graphql`
  query  {
    stubImage:file(relativePath:{eq:"categories.jpg"}){
      childImageSharp{
        fluid(quality: 90, maxWidth:2000){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default categories
