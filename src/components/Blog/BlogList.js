import React from 'react'
import styles from '../../css/blogList.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const BlogList = ({ edges }) => {
  return (
    <section className={styles.blog}>
      <div className={styles.center}>
        {Object.keys(edges).sort().reverse().map((edge, index) => {
          return (
            <div key={index}>
              <h2>{edge}</h2>
              <div className={styles.text}>
                {edges[edge].map((ed, el) => {
                  return <p key={el}>
                    <span className={styles.date}>{ed.date}</span>
                    <AniLink fade to={`/${ed.path}`} className={styles.title}> {ed.title}</AniLink>
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
