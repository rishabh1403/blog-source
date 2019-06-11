import React from 'react'
import styles from '../../css/blog-card.module.css'
// import styles from '../../css/tour.module.css'
import img from "../../images/defaultBcg.jpeg"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

let getAbout = graphql`
query tourImage{
  aboutImage:file(relativePath:{eq:"defaultBcg.jpeg"}){
    childImageSharp{
      fluid(maxWidth:600){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;
const Tour = (props) => {
  console.log(props.edge.node.frontmatter)
  const { aboutImage } = useStaticQuery(getAbout);
  return (
    <article className={styles.blog} >
      <div className={styles.imgContainer}>
        <Img className={styles.img} fluid={aboutImage.childImageSharp.fluid} />
        <AniLink to="/" fade className={styles.link} >Button</AniLink>
        <h6 className={styles.date}>may 15th, 2016</h6>
      </div>
      <div className={styles.footer}>
        <h3>Some blog name</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            {props.edge.node.frontmatter.description}
          </h4>
          <div className={styles.details}>
            <h6>{props.edge.node.fields.readingTime.text}</h6>
            {props.edge.node.frontmatter.tags.map((tag,index)=> <h6>#{tag}</h6>)}
          </div>
        </div>
      </div>
    </article>
  )
}

export default Tour
