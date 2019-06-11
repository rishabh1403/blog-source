import React from 'react'
import styles from '../../css/blog-card.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

let getAbout = graphql`
query blogImage{
  aboutImage:file(relativePath:{eq:"defaultBcg.jpeg"}){
    childImageSharp{
      fluid(maxWidth:600){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;
const BlogCard = () => {
  const { aboutImage } = useStaticQuery(getAbout);

  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
      <Img className={styles.img} fluid={aboutImage.childImageSharp.fluid} />
      <AniLink to="/" fade className={styles.link} >Button</AniLink>
      <h6 className={styles.date}>may 15th, 2016</h6>
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
            <h6>some</h6>
            <h6>some</h6>
            <h6>some</h6>
            <h6>some</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

export default BlogCard
