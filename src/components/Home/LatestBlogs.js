import React from 'react'
import Tour from '../Tours/Tour'
import { useStaticQuery, graphql } from 'gatsby'
import Title from '../Title'
import styles from '../../css/items.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const FeaturedTours = () => {
  return (
    <section className={styles.tours}>
      {/* <Title title="featured" subtitle="tours" /> */}
      <div className={styles.center}>
        <Tour></Tour>
        <Tour></Tour>
        <Tour></Tour>
        <Tour></Tour>
        <Tour></Tour>
        <Tour></Tour>
        
      </div>
      <AniLink to="/" fade className="btn-primary" >Button</AniLink>
    </section>
  )
}

export default FeaturedTours
