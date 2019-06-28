import React from "react"
import Layout from "../components/Layout"

import BlogList from '../components/Blog/BlogList';
import { groupByYear } from '../util/utils';
const singlecategories = ({ data, pageContext }) => {
  return (
    <Layout>
      {/* <StyledHero home={true} img={this.props.data.stubImage.childImageSharp.fluid}>
    </StyledHero> */}
      <BlogList edges={groupByYear(pageContext.posts)} />
    </Layout>
  )
}

export default singlecategories
