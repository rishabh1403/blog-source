import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import NewestBlog from "../components/Home/NewestBlog"
import LatestBlogs from '../components/Home/LatestBlogs'
import SEO from '../components/SEO';

export default ({data}) => (
  <Layout>
    <SEO title="Home"/>
    <StyledHero home={true} img={data.indexImage.childImageSharp.fluid}>
      <Banner
        title="continue exploring"
        info=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis."
      >
        <Link to="/tours" className="btn-white">
          explore tours
        </Link>
      </Banner>
    </StyledHero>
    <NewestBlog />
    <LatestBlogs />
  </Layout>
)

export const query = graphql`
query{
  indexImage:file(relativePath:{eq:"bcg.jpg"}){
    childImageSharp{
      fluid(quality: 90, maxWidth:100){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;