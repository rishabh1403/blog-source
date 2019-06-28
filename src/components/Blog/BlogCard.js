import React from 'react'
import styles from '../../css/blog-card.module.css'
// import styles from '../../css/tour.module.css'
// import img from "../../images/defaultBcg.jpeg"
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { FaClock } from "react-icons/fa";

const Tour = (props) => {
  return (
    <article className={styles.blog} >
      <div className={styles.imgContainer}>
        <Img className={styles.img} fluid={props.edge.node.frontmatter.image.childImageSharp.fluid} />
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
            <div className={styles.readingTime}>
              <FaClock />{props.edge.node.fields.readingTime.text}
            </div>
            <div className={styles.categories}>
              {props.edge.node.frontmatter.categories &&
                props.edge.node.frontmatter.categories.map((tag, index) => {
                  return <AniLink key={index} fade to={`/categories/${tag}`}>#{tag}</AniLink>
                })}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Tour
