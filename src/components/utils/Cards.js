import styled from 'styled-components'
import { fonts, colors } from './_var'
import { media } from './_media-queries'

export const IntroCard = styled.div.attrs({
  className: 'card'
})`
  position: absolute;
  height: 80%;
  width: 80%;
  top: 10%;
  left: 0;
  right: 0;
  margin: auto;
  background: ${colors.$colorCardBg};
  background-size: 3px 3px;
  }
`

export const QuestionCard = styled.div.attrs({
  className: 'card'
})`
  position: relative;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
  background: ${colors.$colorCardBg};
  background-size: 3px 3px;
  color: #fff;
  }
`