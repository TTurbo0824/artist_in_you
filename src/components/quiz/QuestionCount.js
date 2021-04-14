import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import '../utils/App.css'
import { media } from '../utils/_media-queries'
import { fonts, colors } from '../utils/_var'

const Wrapper = styled.div`
  margin: 1em 2em;
  .questionCountLeft {
    display: inline-block;
    border-bottom: solid 2px ${colors.$pinkColor};
    padding-bottom: 1px;
    font-family: ${fonts.$titleFont};
    text-align: left;
    font-size: 0.8em;
    color: ${colors.$pinkColor};
    ${media.mobile`font-size: 1.25em;`};
    ${media.tablet`font-size: 1.5em;`};
  }

  .questionCountRight {
    display: inline-block;
    padding: 0.5em 1.25em;
    background-color: #E5E4E2;
    border-radius: 30px;
    float: right;
    text-align: right;
    font-family: ${fonts.$titleFont};
    font-size: 0.8em;
    color: ${colors.$textColor};
    ${media.mobile`font-size: 0.75em;`};
    ${media.tablet`font-size: 0.9em;`};
  }
`

const QuestionCount = props => {
  return (
    <Wrapper>
      <div className="questionCountLeft">
      Q{props.counter}
      </div>
      <div className="questionCountRight">
        <b><span>{props.counter}</span> / <span>{props.total}</span></b>
      </div> 
    </Wrapper>
  )
}

QuestionCount.propTypes = {
  counter: propTypes.number.isRequired,
  total: propTypes.number.isRequired
}

export default QuestionCount