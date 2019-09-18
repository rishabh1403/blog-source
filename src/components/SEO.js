import React from 'react'
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby'
import icon from '../images/icon.png'

const getData = graphql`
query{
  site{
    siteMetadata{
      siteTitle:title
      siteDescription: description
      author
      siteUrl
      twitterUsername
      siteImage
    }
  }
}

`

const SEO = ({ title, description, keywords, image }) => {
  const { site } = useStaticQuery(getData);
  const { siteTitle, siteDescription, author, siteUrl, twitterUsername, siteImage } = site.siteMetadata;
  const finalImage = image ? `${siteUrl}${image}` : `${siteUrl}${siteImage}`;
  return (
    <Helmet htmlAttributes={{ lang: 'en' }} title={`${title} | ${siteTitle}`}
      link={[
        { rel: 'icon', type: 'image/png', sizes: "16x16", href: `${icon}` },
        { rel: 'icon', type: 'image/png', sizes: "32x32", href: `${icon}` },
        { rel: 'shortcut icon', type: 'image/png', href: `${icon}` },
      ]}
    >
      <meta name="description" content={description || siteDescription} />
      <meta name="image" content={finalImage} />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords} />
      {/* Twitter Cards */}
      <meta name="twitter:card" content={"summary_large_image"} />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={`${title} | ${siteTitle}`} />
      <meta name="twitter:description" content={description || siteDescription} />
      <meta name="twitter:image" content={finalImage} />
      {/* Facebook Cards */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title} | ${siteTitle}`} />
      <meta property="og:description" content={description || siteDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:heigth" content="300" />

    </Helmet>
  )
}

export default SEO
