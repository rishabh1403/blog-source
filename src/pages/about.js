import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from '../components/SEO';

// import StyledHero from "../components/StyledHero"
// import Banner from "../components/Banner"
// import Contact from '../components/Contact/Contact'

export default () => (
  <Layout>
    <SEO title="About" description="About page of Rishabh Jain's blog.Empty right now" />
    {/* <StyledHero home={false} img={data.indexImage.childImageSharp.fluid}>
      <Banner
        title="continue exploring"
        info=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis."
      >
        <Link to="/tours" className="btn-white">
          explore tours
        </Link>
      </Banner>
    </StyledHero> */}
    {/* <Contact /> */}
  </Layout>
)

export const query = graphql`
query{
  indexImage:file(relativePath:{eq:"blogBcg.jpeg"}){
    childImageSharp{
      fluid(quality: 90, maxWidth:2000){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;