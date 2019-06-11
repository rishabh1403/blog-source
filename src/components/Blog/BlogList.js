import React from 'react'
import BlogCard from '../Blog/BlogCard'
import styles from '../../css/blog.module.css'
import { graphql, useStaticQuery } from 'gatsby';

let query = graphql`
{
  allMarkdownRemark(sort:{order:DESC,fields:frontmatter___date}){
    edges{
      node{
        frontmatter{
          title
          description
          tags
        }
        fields{
          readingTime{
            text
          }
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
          return <BlogCard edge={edge} key={index} />
        })}
      </div>
    </section>
  )
}

export default BlogList
