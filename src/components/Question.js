import React, { Component } from 'react'
import styled from 'styled-components'
import Quiz from '../components/quiz/Quiz'
import Result from '../components/result/Result'
import quizQuestions from '../api/quizQuestions'
import './utils/App.css'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;

  li {
    list-style-type: none;
    max-width: 75%;
    margin: auto;
  }
`

class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        // Briggs: {
        //   E: 2,
        //   I: 1,
        //   S: 2,
        //   N: 1,
        //   T: 2,
        //   F: 1,
        //   J: 1,
        //   P: 2
        // }
        Briggs: {
          I: 1,
          S: 1,
          T: 1,
          J: 1,
        }
      },
      resultBriggs: ''
    }
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this)
  }

  // populate app’s state using the componentWillMount life cycle event
  componentDidMount() {
    const answerOptions = quizQuestions.map(question => question.answers)
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: answerOptions[0]
    })
  }

  // setting the answer based on the user’s selection
  setUserAnswer(answer) {
    const answersCount = this.state.answersCount
    let applyAnswer = answer => {
      const answer_array = answer.split(',')
      let briggsAnswer = answer_array[0]
      if (answer_array.length === 1) {
        answersCount['Briggs'][briggsAnswer] += 1
      } else if (answer_array.length === 2) {
        answersCount['Briggs'][briggsAnswer] -= 1
      }
      return answersCount
    }
    this.setState({
      answersCount: applyAnswer(answer),
      answer: answer
    })
  }

  // increment the counter and questionId state
  setNextQuestion() {
    const counter = this.state.counter + 1
    const questionId = this.state.questionId + 1
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    })
  }

  // setting the answer and then setting the next question
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value)
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 500)
    } else {
      setTimeout(() => this.setResults(this.getBriggsResults()), 500)
    }
  }

  // ===========================================================================
  //                        get results
  // ===========================================================================
  getBriggsResults() {
    const answerCount = this.state.answersCount
    const briggsAnswer = answerCount['Briggs']
    // const answersCountKeysBriggs = Object.keys(briggsAnswer)
    // const answersCountValuesBriggs = answersCountKeysBriggs.map(key => briggsAnswer[key])
    let briggsType = ''
    if (briggsAnswer.E >= briggsAnswer.I) {
      briggsType += 'E'
    } else briggsType += 'I'
    if (briggsAnswer.S >= briggsAnswer.N) {
      briggsType += 'S'
    } else briggsType += 'N'
    if (briggsAnswer.T >= briggsAnswer.F) {
      briggsType += 'T'
    } else briggsType += 'F'
    if (briggsAnswer.J >= briggsAnswer.P) {
      briggsType += 'J'
    } else briggsType += 'P'
    return briggsType
  }

  // ===========================================================================
  //                        set results
  // ===========================================================================
  setResults(resultBriggs) {
    if (resultBriggs.length >= 1) {
      this.setState({ resultBriggs: resultBriggs })
    }
  }

  // ===========================================================================
  //                    functions to render quiz
  // ===========================================================================
  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    )
  }

  // ===========================================================================
  //                       render this question page
  // ===========================================================================
  render() {
    let resultBriggs = this.state.resultBriggs
    if (resultBriggs) {
      return this.renderResult()
    }
    return (
      <Wrapper>
        {this.renderQuiz()}
      </Wrapper>
    )
  }

  // ===========================================================================
  //                    functions to render result
  // ===========================================================================
  renderResult() {
    return (
      <Result
        resultBriggs={this.state.resultBriggs}
      />
    )
  }
}

export default Question