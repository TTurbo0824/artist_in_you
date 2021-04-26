import React from 'react'
import propTypes from 'prop-types'
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"
import Artist from "./Artist"
import styled from 'styled-components'
import '../utils/App.css'
import { media } from '../utils/_media-queries'
import { fonts, colors } from '../utils/_var'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;

  .title {
    margin-bottom: 1.5em;
    font-family: ${fonts.$robotoFont};
    font-size: 2em;
    font-weight: 400;
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
    padding: 0 0 0 1em;
    margin-bottom: 4em;
    // background: ${colors.$textColor};
  }
  li {
    width: 85%;
    margin: auto;
    // color: ${colors.$textColor};
    color: white;
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
    font-weight: 900;
    ${media.mobile`font-size: 1em;`};
    ${media.tablet`font-size: 1.1em;`};
  }

  .artistName {
    font-family: ${fonts.$mainFont};
    font-weight: 600;
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
    width: 80%;
    background-color: ${colors.$grayColor};
    border-radius: 15px;
    margin: 0em auto 1em auto;
    padding: .8em .2em 1em .2em;
  }
  .factContainer {
    width: 80%;
    background-color: ${colors.$textColor};
    border-radius: 15px;
    margin: 0em auto 1em auto;
    padding: .8em .2em 1em .2em;
  }
  .quote {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.5rem;
    font-family: Georgia;
    // color: ${colors.$textColor};
    color: #707070;
    text-align: center;
    ${media.mobile`font-size: .9em;`};
    ${media.tablet`font-size: 1em;`};
  }
  .date {
    margin-left: auto;
    margin-right: auto;
    font-family: ${fonts.$titleFont};
    // color: ${colors.$textColor};
    color: #707070;
    text-align: right;
    text-transform: uppercase;
    ${media.mobile`width: 85%; font-size: .7em;`};
    ${media.tablet`width: 90%; font-size: .8em;`};
  }
  .description {
    width: 80%;
    height: auto;
    margin: 1.5em auto;
    padding-bottom: 4em;
    line-height: 1.7em;
    font-family: ${fonts.$titleFont};
    color: ${colors.$textColor};
    text-align: left;
    white-space: pre-wrap;
    ${media.mobile`font-size: .9em;`};
    ${media.tablet`font-size: .95em;`};
  }
  .img-box {
    ${media.mobile`height: 150px; width: 150px;`};
    ${media.tablet`height: 200px; width: 200px`};
    margin: 1.5em auto 2.5em auto;
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
  .app-frame {
    height: auto;
  }

  .main-content {
    position: relative;
    .owl-theme {
      .custom-nav {
        position: absolute;
        top: 20%;
        left: 0;
        right: 0;
        .owl-prev, .owl-next {
            position: absolute;
            color: ${colors.$textColor};
            ${media.mobile`font-size: 2em; height: 75px;`};
            ${media.tablet`font-size: 3em; height: 100px;`};
            background: none;
            border: none;
            z-index: 100;
        }
        .owl-prev, .owl-next:focus {
          outline: none;
        }
        .owl-prev {
            left: .25rem;
        }
        .owl-next {
            right: .25rem;
        }
      }
    }
  }
`
const options = {
  loop: true,
  nav: true,
  dots: true,
  autoplay: false,
  navContainer: '.main-content .custom-nav',
  // stagePadding: 5,
  smartSpeed: 1000,
  responsive: {
      0: {
          items: 1,
      },
      319: {
        items: 2,
        margin: 5,
      },
      400: {
          items: 3,
          margin: 10,
      },
      545: {
        items: 3,
        margin: 5,
      },
      700: {
          items: 3,
          margin: 5,
      }
  },
};

function Result(props) {
  var artist;
  artist = Artist[1];
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
        <h2 className="artistName">{artist.artistName}</h2>
        <div
          className="img-box"
          style={{
            "backgroundImage": `url(/artist_in_you/image/${artist.image}.jpeg)`,
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
        <div className="factContainer">
        <ul>
          <li>{artist.facts[0]}</li>
          <li>{artist.facts[1]}</li>
          <li>{artist.facts[2]}</li>
          <li>{artist.facts[3]}</li>
          <li>{artist.facts[4]}</li>
        </ul>
        </div>
        <div styles="padding-bottom: 40px;"></div>
        <h1 className="title"><span>Artworks</span></h1>
          <div className="main-content">
          <OwlCarousel className="owl-theme" responsiveClass="true" {...options}>
            <div
              className="artwork-box item"
              style={{
                "backgroundImage": `url(/artist_in_you/image/artworks/${artist.image}00.jpeg)`,
              }}
            ></div>
            <div
              className="artwork-box item"
              style={{
                "backgroundImage": `url(/artist_in_you/image/artworks/${artist.image}01.jpeg)`,
              }}
            ></div>
            <div
              className="artwork-box item"
              style={{
                "backgroundImage": `url(/artist_in_you/image/artworks/${artist.image}02.jpeg)`,
              }}
            ></div>
            <div
              className="artwork-box item"
              style={{
                "backgroundImage": `url(/artist_in_you/image/artworks/${artist.image}03.jpeg)`,
              }}
            ></div>
            <div
              className="artwork-box item"
              style={{
                "backgroundImage": `url(/artist_in_you/image/artworks/${artist.image}04.jpeg)`,
              }}
            ></div>
          </OwlCarousel>
          <div className="owl-theme">
            <div className="owl-controls">
                <div className="custom-nav owl-nav"></div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

Result.propTypes = {
  resultBriggs: propTypes.string.isRequired
}

export default Result