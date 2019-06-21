import React from 'react'
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby'

const getData = graphql`
query{
  site{
    siteMetadata{
      siteTitle:title
      siteDescription: description
      author
      siteUrl
      twitterUsername
      image
    }
  }
}

`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getData);
  const { siteTitle, siteDescription, author, siteUrl, twitterUsername, image } = site.siteMetadata;
  return (
    <Helmet htmlAttributes={{ lang: 'en' }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDescription} />
      <meta name="image" content={image}/>
      <meta name="author" content={author} />
      {/* Twitter Cards */}
      <meta name="twitter:card" content={"summary_large_image"} />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={`${title} | ${siteTitle}`} />
      <meta name="twitter:description" content={description || siteDescription} />
      <meta name="twitter:image" content={`${siteUrl}/${image}`} />
    </Helmet>
  )
}

export default SEO
