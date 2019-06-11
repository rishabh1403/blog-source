import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Title from '../Title'
import styles from '../../css/items.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import BlogCard from '../Blog/BlogCard';

const FeaturedTours = () => {
  return (
    <section className={styles.blogs}>
      {/* <Title title="featured" subtitle="tours" /> */}
      <div className={styles.center}>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        
      </div>
      <AniLink to="/" fade className="btn-primary" >Button</AniLink>
    </section>
  )
}

export default FeaturedTours
