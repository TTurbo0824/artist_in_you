import React from 'react'
import styled from 'styled-components'
import { StartBtn } from '../components/utils/Buttons'
import { media } from '../components/utils/_media-queries'
import '../components/utils/App.css'
import { fonts, colors } from '../components/utils/_var'

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;

  h1 {
    position: relative;
    font-family: ${fonts.$titleFont};
    font-size: 1.1em;
    color: ${colors.$textColor};
    text-align: center;
    padding-top: 2em;
    ${media.tablet`font-size: 1.5em; letter-spacing: 1.5px;`};
    ${media.laptop`font-size: 2em; letter-spacing: 2px;`};
  }
  .list-group {
    padding: 0 2em;
    margin-top: 10%;
    .list-group-item {
      background: transparent;
      padding: 1em 1.25em;
      margin-bottom: 0;
      font-family: ${fonts.$robotoFont};
      border: 0;
      color: ${colors.$textColor};
      ${media.tablet`font-size: 1.3em`};
      text-align: center;
    }
  }
`

const Intro = ({ title, _onStartClick }) => {
  return (
    <Wrapper>
      <div className="app-frame">
        <h1>{title}</h1>
      <ul className="list-group">
        <li className="list-group-item">This test consits of 12 questions</li>
        <li className="list-group-item">Please answer quickly and honestly</li>
      </ul>
      <StartBtn onClick={_onStartClick}>
        <span>Start Test</span>
      </StartBtn>
      </div>
    </Wrapper>
  )
}

export default Intro