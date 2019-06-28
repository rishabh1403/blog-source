import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
// import img from "../../images/defaultBcg.jpeg"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { FaClock } from "react-icons/fa";

let getAbout = graphql`
query aboutImage{
  blogs:allMarkdownRemark(limit:1,sort:{order:DESC,fields:frontmatter___date}){
    edges{
      node{
        frontmatter{
          title
          date(formatString: "MMMM Do, YYYY")
          description
          categories
          path
          image{
            childImageSharp{
              fluid(maxWidth:800){
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
      }
    }
  }
}
`;
const About = () => {
  const {  blogs: { edges } } = useStaticQuery(getAbout);
  const { node: { frontmatter, fields } } = edges[0];
  return (
    <section className={styles.about}>
      <Title title="Latest" subtitle="updates" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="about company" /> */}
            <Img fluid={frontmatter.image.childImageSharp.fluid} />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h3 className={styles.title}>{frontmatter.title}</h3>
          <div className={styles.meta}>
            <div>{frontmatter.date}</div>
            <div>|</div>
            <div><FaClock />{fields.readingTime.text}</div>
          </div>
          <div className={styles.linkHolder}>

            {frontmatter.categories.map((category, index) => {
              return <AniLink to={`/categories/${category}`}>#{category}</AniLink>
            })}
          </div>
          <div className={styles.description}>
            <h4>{frontmatter.description}</h4>
          </div>

          <AniLink to={`/${frontmatter.path}`} fade className="btn-primary" >Read More</AniLink>
        </article>
      </div>
    </section>
  )
}

export default About
