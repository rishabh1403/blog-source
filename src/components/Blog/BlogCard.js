import React from 'react'
import styles from '../../css/blog-card.module.css'
// import styles from '../../css/tour.module.css'
import img from "../../images/defaultBcg.jpeg"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { FaClock } from "react-icons/fa";

let getAbout = graphql`
query tourImage{
  aboutImage:file(relativePath:{eq:"bc.png"}){
    childImageSharp{
      fluid(maxWidth:600){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;
const Tour = (props) => {
  console.log(props.edge.node)
  const { aboutImage } = useStaticQuery(getAbout);
  return (
    <article className={styles.blog} >
      <div className={styles.imgContainer}>
        <Img className={styles.img} fluid={aboutImage.childImageSharp.fluid} />
        <AniLink to={`/${props.edge.node.frontmatter.path}`} fade className={styles.link} >Read More</AniLink>
        <h6 className={styles.date}>{props.edge.node.frontmatter.date}</h6>
      </div>
      <div className={styles.footer}>
        <h3>{props.edge.node.frontmatter.title}</h3>
        <div className={styles.info}>
          <h4 className={styles.details}>
            {props.edge.node.frontmatter.description}
          </h4>
          <div className={styles.meta}>
            <h6><FaClock />{props.edge.node.fields.readingTime.text}</h6>
            {props.edge.node.frontmatter.categories && 
              props.edge.node.frontmatter.categories.map((tag, index) => {
                return <AniLink to={`/categories/${tag}`}>#{tag}</AniLink>
              })}
          </div>
        </div>
      </div>
    </article>
  )
}

export default Tour
