import React from 'react';
import styled from 'styled-components';
import '../components/utils/App.css';
import { media } from '../components/utils/_media-queries';
import { fonts, colors } from '../components/utils/_var';
import { StartBtn } from '../components/utils/Buttons';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;

  h1 {
    position: relative;
    font-family: Ubuntu;
    font-weight: 700;
    color: ${colors.$textColor};
    text-align: center;
    margin-top: 1.2em;
    margin-bottom: 0em;
    ${media.mobile`font-size: 1.8em; letter-spacing: 2.5px;`};
    ${media.tablet`font-size: 2.2em; letter-spacing: 3.5px;`};
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
    .list-item {
      background: transparent;
      padding: 1em 1.25em;
      font-family: ${fonts.$titleFont};
      border: 0;
      color: ${colors.$textColor};
      // color: ${colors.$pinkColor};
      ${media.mobile`font-size: 1em`};
      ${media.tablet`font-size: 1.15em`};
      text-align: center;
    }
  }
  .img-box {
    ${media.mobile`height: 300px; width: 300px; margin: 0.8em auto 1.2em auto;`};
    ${media.tablet`height: 410px; width: 400px; margin: 0.4em auto -0.5em auto;`};
    background-size: cover;
    background-position: center;
  }
`

const Intro = ({ title, _onStartClick }) => {
  return (
    <Wrapper>
      <div className="app-frame">
        <h1>{title}</h1>
        <ul className="list-group">
          <li className="list-item">Find out which artist you are most like.</li>
        </ul>
        <div
          className="img-box"
          style={{
            "backgroundImage": `url(/artist_in_you/images/front.png)`,
          }}
        ></div>
        <StartBtn onClick={_onStartClick}>
          <span>Start Test!</span>
        </StartBtn>
      </div>
    </Wrapper>
  )
}

export default Intro