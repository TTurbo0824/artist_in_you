import React from 'react'
import propTypes from 'prop-types'
import '../utils/App.css'

const AnswerOption = props => {
  return (
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
  );
}

AnswerOption.propTypes = {
  answerType: propTypes.string.isRequired,
  answerContent: propTypes.string.isRequired,
  answer: propTypes.string.isRequired,
  onAnswerSelected: propTypes.func.isRequired
}

export default AnswerOption