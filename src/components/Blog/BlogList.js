import React from 'react'
import BlogCard from './BlogCard'
import styles from '../../css/blog.module.css'

const BlogList = () => {
  return (
    <section className={styles.blog}>
      <div className={styles.center}>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </div>
    </section>
  )
}

export default BlogList
