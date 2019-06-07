import React from 'react'
import links from '../constants/links';

const Footer = () => {
  return (
    <div>
      {links.map((el,index) => <p key={index}>{el.name}</p>)}
      Social icons here
      copyright here
    </div>
  )
}

export default Footer
