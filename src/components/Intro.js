import React from 'react'
import styled from 'styled-components'
import '../components/utils/App.css'
import { media } from '../components/utils/_media-queries'
import { fonts, colors } from '../components/utils/_var'
import { StartBtn } from '../components/utils/Buttons'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;

  h1 {
    position: relative;
    font-family: Cabin Sketch;
    color: ${colors.$textColor};
    text-align: center;
    padding-top: 2em;
    ${media.mobile`font-size: 2em; letter-spacing: 2px;`};
    ${media.tablet`font-size: 2.7em; letter-spacing: 3px;`};
  }

  ul {
    display: inline; 
    text-align: center;
    line-height: 100%;
  }

  li {
    list-style-type: none;
  }

  .app-frame {
    height: 100vh;
  }

  .list-group {
    padding: 0 2em;
    margin-top: 10%;
    .list-item {
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
        <h1><b>{title}</b></h1>
      <ul className="list-group">
        <li className="list-item">This test consits of 12 questions</li>
        <li className="list-item">Please answer quickly and honestly</li>
      </ul>
      <StartBtn onClick={_onStartClick}>
        <span>Start Test</span>
      </StartBtn>
      </div>
    </Wrapper>
  )
}

export default Intro