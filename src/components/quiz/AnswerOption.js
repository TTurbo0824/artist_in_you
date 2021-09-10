import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import '../utils/App.css';
import { colors } from '../utils/_var';
import { media } from '../utils/_media-queries';

const Wrapper = styled.div`
  li {
    list-style-type: none;
  }
  .answerOption {
    font-family: Poppins;
    text-align: center;
  }
  .answerOptionButton {
      position: absolute;
      width: auto;
      opacity: 0;
  }
  .answerOptionButton,
  .answerOptionLabel {
    display: flex;
    cursor: pointer;
  }
  .answerOptionLabel {
    position: relative;
    margin: 20px auto 10px auto;
    color: #fff;
    background-color: ${colors.$textColor};
    border-radius: 5px;
    text-align: center;
    ${media.mobile`font-size: 1em; padding: 1.4rem 2rem 1.4rem 2rem; line-height: 1.6rem;`};
    ${media.tablet`font-size: 1.1em; padding: 1.75rem 4rem 1.75rem 4rem; line-height: 1.7rem;`};
  }
  .answerOptionLabel:active {
    background-color: ${colors.$pinkColor};
  }
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