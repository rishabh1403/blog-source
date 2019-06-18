import React from 'react'
import styles from '../../css/blog.module.css'
import { graphql, useStaticQuery } from 'gatsby';

let query = graphql`
{
  allMarkdownRemark(sort:{order:DESC,fields:frontmatter___date}){
    edges{
      node{
        frontmatter{
          title
          path
          date(formatString: "MMMM Do, YYYY")
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
          return <p>{edge.node.frontmatter.title}</p>
        })}
      </div>
    </section>
  )
}

export default BlogList
