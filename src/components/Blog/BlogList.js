import React from 'react'
import styles from '../../css/blogList.module.css'
import { graphql, useStaticQuery } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const BlogList = ({ edges }) => {
  return (
    <section className={styles.blog}>
      <div className={styles.center}>
        {Object.keys(edges).sort().reverse().map((edge, index) => {
          return (
            <div>
              <h2>{edge}</h2>
              <div className={styles.text}>
                {edges[edge].map((ed, el) => {
                  return <p>
                    <span className={styles.date}>{ed.date}</span>
                    <AniLink to={ed.path} className={styles.title}> {ed.title}</AniLink>
                  </p>
                })}
              </div>
            </div>
          )

        })}
      </div>
    </section>
  )
}

export default BlogList
