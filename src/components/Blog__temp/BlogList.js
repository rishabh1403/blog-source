import React from 'react'
import BlogCard from './BlogCard'
import styles from '../../css/blog.module.css'
import { graphql, useStaticQuery } from 'gatsby';

let query = graphql`
{
  allMarkdownRemark(sort:{order:DESC,fields:frontmatter___date}){
    edges{
      node{
        frontmatter{
          title
        }
      }
    }
  }
}

`

const BlogList = () => {
  let {allMarkdownRemark:{edges}} = useStaticQuery(query);
  return (
    <section className={styles.blog}>
      <div className={styles.center}>
        {edges.map((edge,index)=> {
          return <BlogCard />
        })}
      </div>
    </section>
  )
}

export default BlogList
