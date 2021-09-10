import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import '../utils/App.css';
import { media } from '../utils/_media-queries';
import { fonts, colors } from '../utils/_var';

const Wrapper = styled.div`    
  .row {
    ${media.mobile`margin-top: 3rem; margin-bottom: -1.5rem;`};
    ${media.tablet`margin-top: 4.5rem; margin-bottom: 0rem;`};
    .col {
      padding: 0 3rem;
      h1 {
        color: ${colors.$textColor};
        font-family: ${fonts.$titleFont};
        ${media.mobile`font-size: 1rem;`};
        ${media.tablet`font-size: 1.1rem;`};
        text-align: left;
        line-height: 1.7em;
      }
      h2 {
        color: gray;
        color: transparent;
        font-size: 1rem;
        line-height: 0;
      }
    }
  }
`

const Question = props => {
  return (
    <Wrapper>
      <div className="row">
        <div className="col">
          <h1><b>{props.content}</b></h1>
          <h2>this is just an empty content. this is just an empty content. this is just an empty content.</h2>
        </div>
      </div>
    </Wrapper>
  )
}

Question.propTypes = {
  content: propTypes.string.isRequired
}

export default Question