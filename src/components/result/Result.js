import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../utils/_media-queries'
import { fonts, colors } from '../utils/_var'

// import { Wrapper } from '../utils/ResultWrapper'
import Artist from "./Artist"

const Wrapper = styled.div`

  .title {
    font-family: ${fonts.$titleFont};
    font-size: 2em;
    text-align: center;
    ${media.tablet`font-size: 1.5em`};
    ${media.laptop`font-size: 1em`};
  }
  .my-4 {
    width: 60%;
    ${media.tablet`width: 40%;`};
    ${media.laptop`width: 25%;`};
  }
  .resultTxt {
    font-family: ${fonts.$mainFont};
    color: ${colors.$colorGold};
    text-align: center;
    ${media.tablet`font-size: 2em`};
    ${media.laptop`font-size: 2.2em`};
  }

  .my-5 {
    width: 0;
    margin-bottom: -1em !important;
  }
  .quote {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.5rem;
    font-family: ${fonts.$titleFont};
    text-align: center;
    ${media.laptop`font-size: 1em`};
  }
  .context {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.5rem;
    font-family: ${fonts.$titleFont};
    text-align: left;
    white-space: pre-wrap;
    ${media.laptop`font-size: 1em`};
  }
  .description {
    width: 85%;
    height: 20%;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.5rem;
    overflow: scroll;
    font-family: ${fonts.$titleFont};
    text-align: left;
    white-space: pre-wrap;
    ${media.laptop`font-size: 1em`};
  }
`

function Result(props) {
  
  var artist;

  if (props.resultBriggs === "ESTP" || props.resultBriggs === "ESFP") {
      artist = Artist[0];
  } else if (props.resultBriggs === "ISTJ" || props.resultBriggs === "ISFJ") {
      artist = Artist[1];
  } else if (props.resultBriggs === "ENTJ" || props.resultBriggs === "ESTJ") {
      artist = Artist[2];
  } else if (props.resultBriggs === "INTP" || props.resultBriggs === "ISTP") {
      artist = Artist[3];
  } else if (props.resultBriggs === "ENTP" || props.resultBriggs === "ENFP"){ 
      artist = Artist[4];
  } else if (props.resultBriggs === "INTJ" || props.resultBriggs === "INFJ") {
      artist = Artist[5];
  } else if (props.resultBriggs === "ENFJ" || props.resultBriggs === "ESFJ") {
      artist = Artist[6];
  } else if (props.resultBriggs === "INFP" || props.resultBriggs === "ISFP") {
      artist = Artist[7];
  }
  
  console.log(props.resultBriggs);

  return (
    <Wrapper>
      <div className="app-frame">
        <h1 className="title">Result</h1>
        <hr className="my-4" />
        <div
          className="img-box"
          style={{
            "backgroundImage": `url(/image/${artist.image}.jpeg)`,
          }}
        ></div>
        <h2 className="display-6 resultTxt">{artist.artistName} </h2>
        <p className="context">{artist.date}</p>

        <hr className="my-5" />
        <p className="quote">{artist.quote}</p>
        <p className="description">{artist.description}</p>

      </div>
    </Wrapper>
  );
}

Result.propTypes = {
  resultBriggs: propTypes.string.isRequired
}

export default Result