import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"

export default ({data}) => (
  <Layout>
    <StyledHero home={false} img={data.indexImage.childImageSharp.fluid}>
      <Banner
        title="continue exploring"
        info=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis."
      >
        <Link to="/tours" className="btn-white">
          explore tours
        </Link>
      </Banner>
    </StyledHero>
  </Layout>
)

export const query = graphql`
query{
  indexImage:file(relativePath:{eq:"bc.png"}){
    childImageSharp{
      fluid(quality: 90, maxWidth:100){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;