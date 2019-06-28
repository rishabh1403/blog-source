import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styles from '../../css/items.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import BlogCard from '../Blog/BlogCard';

let getAbout = graphql`
query someImage{
  blogs:allMarkdownRemark(limit:9,skip:1,sort:{order:DESC,fields:frontmatter___date}){
    edges{
      node{
        frontmatter{
          title
          date(formatString: "MMM Do, YYYY")
          description
          path
          categories
          image{
            childImageSharp{
              fluid(maxWidth:600){
                ...GatsbyImageSharpFluid
              }
            }
          }
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
`;

const FeaturedTours = () => {
  const { blogs } = useStaticQuery(getAbout);
  return (
    <section className={styles.blogs}>
      <div className={styles.center}>
        {blogs.edges.map((edge, index) => {
          return <BlogCard edge={edge} key={index} />
        })}
      </div>
      <AniLink to="/page/2" fade className="btn-primary" >Older Posts</AniLink>
    </section>
  )
}

export default FeaturedTours
