import React from 'react'
import propTypes from 'prop-types'
// import styled from 'styled-components'
import Question from './Question'
import QuestionCount from './QuestionCount'
import AnswerOption from './AnswerOption'
// import { media } from '../utils/_media-queries'

// const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center; 
// `

const Quiz = props => {
  const renderAnswerOptions = key => {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    )
  }

  return (
    // <Wrapper key={props.questionId}>
      <div className="app-frame">
        <QuestionCount counter={props.questionId} total={props.questionTotal} />
        <Question content={props.question} />
        <ul>{props.answerOptions.map(renderAnswerOptions)}</ul>
      </div>
    // </Wrapper>
  )
}

Quiz.propTypes = {
  answer: propTypes.string.isRequired,
  answerOptions: propTypes.array.isRequired,
  // counter: propTypes.number.isRequired,
  question: propTypes.string.isRequired,
  questionId: propTypes.number.isRequired,
  questionTotal: propTypes.number.isRequired,
  onAnswerSelected: propTypes.func.isRequired
}

export default Quiz