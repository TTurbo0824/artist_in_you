import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import '../utils/App.css';
import { media } from '../utils/_media-queries';
import { fonts, colors } from '../utils/_var';

const Wrapper = styled.div`
  margin: 1em 2em;
  .questionCountLeft {
    display: inline-block;
    border-bottom: solid .17em ${colors.$pinkColor};
    font-family: Cabin;
    text-align: left;
    font-size: .8em;
    color: ${colors.$pinkColor};
    ${media.mobile`font-size: 1.5em;`};
    ${media.tablet`font-size: 1.75em;`};
  }
  .questionCountRight {
    display: inline-block;
    padding: .5em 1.25em;
    background-color: #e5e4e2;
    border-radius: 30px;
    float: right;
    text-align: right;
    font-family: ${fonts.$titleFont};
    font-size: .8em;
    color: ${colors.$grayColor};
    ${media.mobile`font-size: .75em;`};
    ${media.tablet`font-size: .9em;`};
  }
`

const QuestionCount = props => {
  return (
    <Wrapper>
      <div className="questionCountLeft">
      <b>Q {props.counter}</b>
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