import React from 'react';
import propTypes from 'prop-types';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Artist from './Artist';
import styled from 'styled-components';
import '../utils/App.css';
import { media } from '../utils/_media-queries';
import { fonts, colors } from '../utils/_var';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;

  .app-frame {
    height: auto;
  }
  .title {
    margin-bottom: 1.5em;
    font-family: ${fonts.$robotoFont};
    font-family: Ubuntu;
    text-transform: lowercase;
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
    padding: 0 0 0 .3em;
    margin-bottom: 2.2em;
    // background: ${colors.$textColor};
  }
  li {
    width: 85%;
    margin: auto;
    // color: #707070;
    color: #555555;
    margin-bottom: 1em;
    font-family: ${fonts.$titleFont};
    ${media.mobile`font-size: .9em; line-height: 1.4em;`};
    ${media.tablet`font-size: .95em; line-height: 1.5em;`};
  }
  li::before {
    content: "•";
    // color: ${colors.$textColor};
    color: #535994;
    display: inline-block; 
    width: 1em;
    margin-left: -1em;
    font-family: ${fonts.$robotoFont};
    font-weight: 900;
    ${media.mobile`font-size: 1em;`};
    ${media.tablet`font-size: 1.2em;`};
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
  .quoteContainer {
    width: 80%;
    background-color: #f2f2f2;
    border-radius: 10px;
    ${media.mobile`margin: 2.3em auto 2.1em auto; padding: .3em .2em .8em .2em;`};
    ${media.tablet`margin: 2.4em auto 3.8em auto; padding: .8em .2em 1.1em .2em;`};
  }
  .factContainer {
    width: 80%;
    background-color: #f2f2f2;
    border-radius: 10px;
    ${media.mobile`margin: 2.4em auto 4.5em auto;`};
    ${media.tablet`margin: 2.5em auto 4.8em auto;`};
    padding: .8em .2em .1em .2em
  }
  .quote {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.3em;
    line-height: 1.7em;
    font-family: Ubuntu;
    color: ${colors.$grayColor};
    text-align: center;
    ${media.mobile`font-size: .8em;`};
    ${media.tablet`font-size: .95em;`};
  }
  .date {
    margin-left: auto;
    margin-right: auto;
    font-family: ${fonts.$titleFont};
    color: ${colors.$grayColor};
    text-align: right;
    ${media.mobile`width: 85%; font-size: .7em;`};
    ${media.tablet`width: 90%; font-size: .8em;`};
  }
  .break {
    ${media.mobile`margin: 2.3em auto 2em 1.2em;`};
    ${media.tablet`margin: -.8em auto 1.7em 1em;`};
    text-align: center;
    color: #535994;
    ${media.mobile`font-size: 1em; letter-spacing: 16px;`};
    ${media.tablet`font-size: 1.3em; letter-spacing: 18px;`};
  }
  .description {
    width: 80%;
    height: auto;
    margin: 1.5em auto auto auto;
    padding-bottom: 4em;
    line-height: 1.7em;
    font-family: ${fonts.$titleFont};
    color: ${colors.$textColor};
    text-align: left;
    white-space: pre-wrap;
    // word-break: break-all;
    hyphens: auto;
    ${media.mobile`font-size: .9em;`};
    ${media.tablet`font-size: .95em;`};
  }
  .img-box {
    ${media.mobile`height: 150px; width: 150px;`};
    ${media.tablet`height: 200px; width: 200px`};
    margin: 1.4em auto 1.5em auto;
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
  .main-content {
    position: relative;
    margin-bottom: 2em;
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
  
  return (
    <Wrapper>
      <div className="app-frame">
        <h1 className="title"><span>the artist in you is</span></h1>
        <h2 className="artistName">{artist.artistName}</h2>
        <div
          className="img-box"
          style={{
            "backgroundImage": `url(/artist_in_you/images/${artist.image}.jpeg)`,
          }}
        ></div>
        <div className="quoteContainer">
          <p className="quote"><i>"{artist.quote}"</i></p>
          <p className="date">{artist.date}</p>
        </div>
        <p className="break">•••</p>
        <p className="description">{artist.description}</p>
        <h1 className="title"><span>Interesting Facts about the Artist</span></h1>
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
        <h1 className="title"><span>Famous Artworks by the Artist</span></h1>
          <div className="main-content">
          <OwlCarousel className="owl-theme" responsiveClass="true" {...options}>
            <div
              className="artwork-box item"
              style={{
                "backgroundImage": `url(/artist_in_you/images/artworks/${artist.image}00.jpeg)`,
              }}
            ></div>
            <div
              className="artwork-box item"
              style={{
                "backgroundImage": `url(/artist_in_you/images/artworks/${artist.image}01.jpeg)`,
              }}
            ></div>
            <div
              className="artwork-box item"
              style={{
                "backgroundImage": `url(/artist_in_you/images/artworks/${artist.image}02.jpeg)`,
              }}
            ></div>
            <div
              className="artwork-box item"
              style={{
                "backgroundImage": `url(/artist_in_you/images/artworks/${artist.image}03.jpeg)`,
              }}
            ></div>
            <div
              className="artwork-box item"
              style={{
                "backgroundImage": `url(/artist_in_you/images/artworks/${artist.image}04.jpeg)`,
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