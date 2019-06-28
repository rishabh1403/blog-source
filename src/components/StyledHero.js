import React from 'react'
import styled from 'styled-components'
// import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image';

const StyledHero = ({ img, className, children, home, gradient }) => {
  return (
    <Img className={className} fluid={img}>
      {children}
    </Img>
  )
}

export default styled(StyledHero)`
  max-height: calc(100vh - 71px);
  /* background: ${props =>
    props.home ? 'linear-gradient(rgba(0,0,0, 0.7), rgba(0, 0, 0, 0.3))' : 'none'}; */
  /* background: ${props =>
    props.gradient ? 'linear-gradient(rgba(63, 208, 212, 0.5), rgba(0, 0, 0, 0.7))' : 'none'}; */
  /* background-position: center;
  background-size:cover;
  opacity: 1!important;
  display:flex;
  justify-content: center;
  align-items:center; */

`
