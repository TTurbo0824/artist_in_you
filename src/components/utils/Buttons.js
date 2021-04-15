import styled from 'styled-components'
import { media } from './_media-queries'
import { fonts, colors } from './_var'

const StartBtn = styled.div`
  display: block;
  ${media.mobile`width: 6.5em; height: 3em; line-height: 3em; bottom: 12em;`};
  ${media.tablet`width: 7.5em; height: 3.5em; line-height: 3.5em; bottom: 8.5em;`};
  background: ${colors.$textColor};
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 5px;
  cursor: pointer;
  
  span {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    line-height: inherit;
    ${media.mobile`font-size: .9em;`};
    ${media.tablet`font-size: 1em;`};
    font-family: ${fonts.$titleFont};
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