import React from 'react'
import styles from '../../css/tour.module.css'
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
const Tour = () => {
  const { aboutImage } = useStaticQuery(getAbout);
  return (
    <article className={styles.tour} >
      <div className={styles.imgContainer}>
        <Img className={styles.img} fluid={aboutImage.childImageSharp.fluid} />
        <AniLink to="/" fade className={styles.link} >Button</AniLink>
      </div>
      <div className={styles.footer}>
        <h3>Some blog name</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            Some country
          </h4>
          <div className={styleMedia.details}>
            <h6>some</h6>
            <h6>some</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Tour
