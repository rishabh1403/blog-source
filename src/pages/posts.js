import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import BlogList from '../components/Blog/BlogList';
import { groupByYear } from '../util/utils';
export default ({ data }) => (
  <Layout>
    <StyledHero home={true} img={data.indexImage.childImageSharp.fluid}>
    </StyledHero>
    <BlogList edges={groupByYear(data.allMarkdownRemark.edges)} />
  </Layout>
)

export const query = graphql`
query{
  indexImage:file(relativePath:{eq:"archive.jpg"}){
    childImageSharp{
      fluid(quality: 90, maxWidth:100){
        ...GatsbyImageSharpFluid
      }
    }
  }
  allMarkdownRemark(sort:{order:DESC,fields:frontmatter___date}){
    edges{
      node{
        frontmatter{
          title
          path
          shortDate:date(formatString: "MMM Do")
          year:date(formatString: "YYYY")
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