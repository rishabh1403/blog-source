import React from "react"
import styled from "styled-components"
const Logo = ({ title, subtitle, className }) => {
  return (
    <div className={className}>
      <h5>
        <span className="title">{title}</span>
        <span>{subtitle}</span>
      </h5>
    </div>
  )
}

export default styled(Logo)`
  text-transform: uppercase;
  font-size: 1.7rem;
  h5 {
    letter-spacing: 5px;
    color: var(--primaryColor);
    margin-bottom: 0;
    margin-top: 8px;
  }
  .title {
    color: var(--mainBlack);
  }
  span {
    display: block;
  }
  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`
