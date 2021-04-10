import React, { Component } from 'react'
import Intro from './components/Intro'
import Question from './components/Question'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showQuestion: false
    }
    this._onStartClick = this._onStartClick.bind(this)
  }

  renderIntro() {
    return <Intro _onStartClick={this._onStartClick} title="Welcome To Artist in You 🎨" />
  }

  renderQuestion() {
    return <Question />
  }

  render() {
    let showQuestion = this.state.showQuestion
    if (showQuestion) {
      return this.renderQuestion()
    }
    return this.renderIntro()
  }

  _onStartClick() {
    setTimeout(() => this.setState({ showQuestion: !this.state.showQuestion }), 500)
  }
}

export default App