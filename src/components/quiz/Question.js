// question only

import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import '../utils/App.css'
import { fonts } from '../utils/_var'

const Wrapper = styled.div`
  .row {
    margin-top: 4.5rem;
    margin-bottom: 1.5rem;
    .col {
      padding: 0 3rem;
      h1 {
        font-size: 1.1rem;
        font-family: ${fonts.$titleFont};
        text-align: center;
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