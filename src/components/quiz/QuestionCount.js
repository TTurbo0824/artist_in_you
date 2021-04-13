import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../utils/_media-queries'
import '../utils/App.css'
import { fonts } from '../utils/_var'


const Wrapper = styled.div`
  ${media.largerPhone`margin: .4em;`};
  ${media.tablet`margin: 0.8em 2em;`};
  ${media.laptop`margin: 1em 2em;`};
  .questionCount {
    position: relative;
    padding: 1em 2em;
    text-align: right;
    font-family: ${fonts.$titleFont};
    font-size: 0.8em;
    ${media.largerPhone`font-size: 0.9em;`};
  }
`

const QuestionCount = props => {
  return (
    <Wrapper>
      <div className="questionCount">
        Question <span>{props.counter}</span> / <span>{props.total}</span>
      </div> 
    </Wrapper>
  )
}

QuestionCount.propTypes = {
  counter: propTypes.number.isRequired,
  total: propTypes.number.isRequired
}

export default QuestionCount