import styled from 'styled-components';
import { media } from './_media-queries';
import { colors } from './_var';

const StartBtn = styled.div`
  display: block;
  ${media.mobile`width: 7.5em; height: 3em; line-height: 3em; margin: 1em auto;`};
  ${media.tablet`width: 9em; height: 3.5em; line-height: 3.5em; margin: 2.5em auto;`};
  background: ${colors.$textColor};
  position: absolute;
  left: 0;
  right: 0;
  border-radius: 5px;
  cursor: pointer;
  
  span {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: inherit;
    letter-spacing: 0.75px;
    ${media.mobile`font-size: .9em;`};
    ${media.tablet`font-size: 1em;`};
    font-family: Ubuntu;
    font-weight: 400;
    color: #fff;
  }
  &:hover {
    background: ${colors.$pinkColor};
    span {
      color: #fff;
    }
  }
`

export { StartBtn }