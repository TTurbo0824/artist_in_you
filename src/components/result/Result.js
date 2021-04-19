import React from 'react'
import propTypes from 'prop-types'
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"
import Artist from "./Artist"
import styled from 'styled-components'
import { media } from '../utils/_media-queries'
import { fonts, colors } from '../utils/_var'

const Wrapper = styled.div`
  .title {
    margin-bottom: 1.5em;
    font-family: ${fonts.$robotoFont};
    font-size: 2em;
    text-align: center;
    color: white;
    ${media.mobile`font-size: 1em`};
    ${media.tablet`font-size: 1.1em`};
    line-height: 1.5rem;
  }
  h1 span {
    background-color: ${colors.$textColor};
    padding: .4em .75em;
    border-radius: 20px;
  }
  ul {
    list-style: none;
    padding: 0 0 4em 1em;
  }
 
  li {
    // list-style-type: "🎨 ";
    width: 85%;
    margin: auto;
    color: ${colors.$textColor};
    line-height: 1.7em;
    font-family: ${fonts.$titleFont};
    ${media.mobile`font-size: .9em;`};
    ${media.tablet`font-size: 1em;`};
  }
  li::before {
    content: "• ";
    color: ${colors.$pinkColor};
    display: inline-block; 
    width: 1em;
    margin-left: -1em;
    font-family: ${fonts.$robotoFont};
    ${media.mobile`font-size: 1em;`};
    ${media.tablet`font-size: 1.1em;`};
  }

  .artistName {
    font-family: ${fonts.$mainFont};
    text-align: center;
    color: ${colors.$pinkColor};
    ${media.mobile`font-size: 1.5em;`};
    ${media.tablet`font-size: 1.8em;`};
    margin-bottom: .75em;
  }
  .my-4 {
    width: 60%;
    ${media.tablet`width: 40%;`};
    ${media.laptop`width: 25%;`};
  }
  .my-5 {
    width: 0;
    margin-bottom: -1em !important;
  }
  .quoteContainer {
    width: 75%;
    background-color: ${colors.$grayColor};
    border-radius: 15px;
    margin: 0em auto 1em auto;
    padding: 1em .2em .2em .2em;
  }
  .quote {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.5rem;
    font-family: Georgia;
    color: ${colors.$textColor};
    text-align: center;
    ${media.mobile`font-size: .9em;`};
    ${media.tablet`font-size: 1em;`};
  }
  .date {
    margin-left: auto;
    margin-right: auto;
    font-family: ${fonts.$titleFont};
    color: ${colors.$textColor};
    text-align: right;
    text-transform: uppercase;
    ${media.mobile`width: 85%; font-size: .7em;`};
    ${media.tablet`width: 90%; font-size: .8em;`};
  }
  .description {
    width: 85%;
    height: auto;
    margin: 1.5em auto;
    padding-bottom: 4em;
    line-height: 1.7em;
    font-family: ${fonts.$titleFont};
    color: ${colors.$textColor};
    text-align: left;
    white-space: pre-wrap;
    ${media.mobile`font-size: .9em;`};
    ${media.tablet`font-size: 1em;`};
  }
  .img-box {
    ${media.mobile`height: 150px; width: 150px;`};
    ${media.tablet`height: 200px; width: 200px`};
    margin: 1em auto 1.5em auto;
    background-size: cover;
    background-position: center;
  }
  .artwork-box {
    ${media.mobile`height: 150px; width: 150px;`};
    ${media.tablet`height: 200px; width: 200px;`};
    margin: 1em auto 1.5em auto;
    background-size: cover;
    background-position: center;
  }
`

const options = {
  margin: -10,
  nav: true,
  dots: true,
  autoplay: false,
  // navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
      0: {
          items: 1,
      },
      320: {
        items: 2,
      },
      400: {
          items: 3,
      },
      700: {
          items: 3,
      }
  },
};

function Result(props) {
  var artist;
  artist = Artist[0];
  // if (props.resultBriggs === "ESTP" || props.resultBriggs === "ESFP") {
  //     artist = Artist[0];
  // } else if (props.resultBriggs === "ISTJ" || props.resultBriggs === "ISFJ") {
  //     artist = Artist[1];
  // } else if (props.resultBriggs === "ENTJ" || props.resultBriggs === "ESTJ") {
  //     artist = Artist[2];
  // } else if (props.resultBriggs === "INTP" || props.resultBriggs === "ISTP") {
  //     artist = Artist[3];
  // } else if (props.resultBriggs === "ENTP" || props.resultBriggs === "ENFP"){ 
  //     artist = Artist[4];
  // } else if (props.resultBriggs === "INTJ" || props.resultBriggs === "INFJ") {
  //     artist = Artist[5];
  // } else if (props.resultBriggs === "ENFJ" || props.resultBriggs === "ESFJ") {
  //     artist = Artist[6];
  // } else if (props.resultBriggs === "INFP" || props.resultBriggs === "ISFP") {
  //     artist = Artist[7];
  // }
  
  console.log(props.resultBriggs);

  return (
    <Wrapper>
      <div className="app-frame">
        <h1 className="title"><span>the artist in you is</span></h1>
        <h2 className="display-6 artistName"><b>{artist.artistName}</b></h2>
        <div
          className="img-box"
          style={{
            "backgroundImage": `url(/image/${artist.image}.jpeg)`,
          }}
        ></div>
        {/* <hr className="my-4" /> */}
        {/* <hr className="my-5" /> */}
        <div className="quoteContainer">
          <p className="quote"><i>"{artist.quote}"</i></p>
          <p className="date">{artist.date}</p>
        </div>
        <p className="description">{artist.description}</p>
        <h1 className="title"><span>Interesting Facts about {artist.artistName}</span></h1>
        <ul>
          <li>{artist.facts[0]}</li>
          <li>{artist.facts[1]}</li>
          <li>{artist.facts[2]}</li>
          <li>{artist.facts[3]}</li>
          <li>{artist.facts[4]}</li>
        </ul>
        <div styles="padding-bottom: 40px; background: black"></div>
        <h1 className="title"><span>Artworks</span></h1>
        <OwlCarousel className="owl-theme" loop="true" responsiveClass="true" {...options}>
          <div
            className="artwork-box"
            style={{
              "backgroundImage": `url(/image/artworks/${artist.image}00.jpeg)`,
            }}
          ></div>
          <div
            className="artwork-box"
            style={{
              "backgroundImage": `url(/image/artworks/${artist.image}01.jpeg)`,
            }}
          ></div>
          <div
            className="artwork-box"
            style={{
              "backgroundImage": `url(/image/artworks/${artist.image}02.jpeg)`,
            }}
          ></div>
          <div
            className="artwork-box"
            style={{
              "backgroundImage": `url(/image/artworks/${artist.image}03.jpeg)`,
            }}
          ></div>
          <div
            className="artwork-box"
            style={{
              "backgroundImage": `url(/image/artworks/${artist.image}04.jpeg)`,
            }}
          ></div>
        </OwlCarousel>
      </div>
    </Wrapper>
  );
}

Result.propTypes = {
  resultBriggs: propTypes.string.isRequired
}

export default Result