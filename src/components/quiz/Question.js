import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import '../utils/App.css'
import { fonts, colors } from '../utils/_var'
import { media } from '../utils/_media-queries'

const Wrapper = styled.div`
  .row {
    ${media.mobile`margin-top: 3rem; margin-bottom: 0.5rem;`};
    ${media.tablet`margin-top: 4.5rem; margin-bottom: 2rem;`};
    .col {
      padding: 0 3rem;
      h1 {
        font-family: ${fonts.$titleFont};
        font-size: 1.1rem;
        color: ${colors.$textColor};
        text-align: left;
        line-height: 1.7em;
      }
    }
  }
`

const Question = props => {
  return (
    <Wrapper>
      <div className="row">
        <div className="col">
          <h1>{props.content}</h1>
        </div>
      </div>
    </Wrapper>
  )
}

Question.propTypes = {
  content: propTypes.string.isRequired
}

export default Question