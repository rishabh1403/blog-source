import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
// import img from "../../images/defaultBcg.jpeg"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';

let getAbout = graphql`
query aboutImage{
  aboutImage:file(relativePath:{eq:"defaultBcg.jpeg"}){
    childImageSharp{
      fluid(maxWidth:600){
        ...GatsbyImageSharpFluid
      }
    }
  }
  blogs:allMarkdownRemark(limit:1,sort:{order:DESC,fields:frontmatter___date}){
    edges{
      node{
        frontmatter{
          title
          date
          description
          categories
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
  const { aboutImage,blogs:{edges} } = useStaticQuery(getAbout);
  // console.log(blogs)
  const {node:{frontmatter,fields}} = edges[0]; 
  return (
    <section className={styles.about}>
      <Title title="Latest" subtitle="updates" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="about company" /> */}
            <Img fluid={aboutImage.childImageSharp.fluid} />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>{frontmatter.title}</h4>
          <p>
            {frontmatter.description}
          </p>
          <p>
            {fields.readingTime.text}
            {frontmatter.categories.map((cat,index) => {
              return <p>{cat}</p>
            })}
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
