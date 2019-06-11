import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Title from '../Title'
import styles from '../../css/items.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import BlogCard from '../Blog/BlogCard';

let getAbout = graphql`
query someImage{
  someImage:file(relativePath:{eq:"defaultBcg.jpeg"}){
    childImageSharp{
      fluid(maxWidth:600){
        ...GatsbyImageSharpFluid
      }
    }
  }
  blogs:allMarkdownRemark(limit:3,skip:1sort:{order:DESC,fields:frontmatter___date}){
    edges{
      node{
        frontmatter{
          title
          date(formatString: "MMMM Do, YYYY")
          description
          categories
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
  const { someImage, blogs } = useStaticQuery(getAbout);
  console.log(blogs);
  return (
    <section className={styles.blogs}>
      {/* <Title title="featured" subtitle="tours" /> */}
      <div className={styles.center}>
        {blogs.edges.map((edge, index) => {
          return <BlogCard edge={edge} key={index} />
        })}

      </div>
      <AniLink to="/" fade className="btn-primary" >Button</AniLink>
    </section>
  )
}

export default FeaturedTours
