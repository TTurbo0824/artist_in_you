import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import '../utils/App.css'
import { fonts } from '../utils/_var'
import { media } from '../utils/_media-queries'

const Wrapper = styled.div`
.answerOptionLabel {
  ${media.mobile`font-size: 1em; padding: 1rem 2rem 1rem 2rem;`};
  ${media.tablet`font-size: 1.25em; padding: 1.75rem 4rem 1.75rem 4rem;`};
}

  // ${media.mobile`margin: .4em;`};
  // ${media.tablet`margin: 0.8em 2em;`};
  // ${media.laptop`margin: 1em 2em;`};
  // .questionCount {
  //   position: relative;
  //   padding: 1em 2em;
  //   text-align: right;
  //   font-family: ${fonts.$titleFont};
  //   font-size: 0.8em;
  //   ${media.mobile`font-size: 0.9em;`};
  // }
`

const AnswerOption = props => {
  return (
    <Wrapper>
      <li className="answerOption">
        <input
          className="answerOptionButton"
          checked={props.answerType === props.answer}
          id={props.answerType}
          value={props.answerType}
          name={props.answerType}
          disabled={props.answer}
          onChange={props.onAnswerSelected}
          type="radio"
        />
        <label className="answerOptionLabel" htmlFor={props.answerType}>
          {props.answerContent}
        </label>
      </li>
    </Wrapper>
  );
}

AnswerOption.propTypes = {
  answerType: propTypes.string.isRequired,
  answerContent: propTypes.string.isRequired,
  answer: propTypes.string.isRequired,
  onAnswerSelected: propTypes.func.isRequired
}

export default AnswerOption