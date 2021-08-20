import styled from "styled-components"
import * as style from "/styles/style"

export const IntroOuter = styled.div`
  /* background-color: ${style.hsl("blue", 12)}; */
  background: rgb(11,19,50);
  background: linear-gradient(125deg, rgba(11,19,50,1) 0%, rgba(17,28,74,1) 54%, rgba(8,17,45,1) 100%);

  min-height: 100vh;
`

export const IntroContainer = styled.main`
  width: 100vw;
  min-height: 100vh;
  padding: 20vh 10vw 10vh 10vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${style.deviceSize.tablet} {
    padding: 32px 16px;
  }
`

export const IntroTitle = styled.h1`
  display: flex;
  align-items: center;
  color: ${style.hsl("neutral", 96)};
  font-weight: ${style.fontWeight.semibold};

  svg {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    fill: ${style.hsl("neutral", 96)};
  }
`

export const IntroCopy = styled.h2`
  max-width: 600px;
  margin-top: 10vh;
  margin-bottom: 5vh;
  color: #fff;
  font-size: ${style.fontSize.xl6};
  font-weight: ${style.fontWeight.bold};
  letter-spacing: ${style.textLetterSpacing.tight};
  line-height: ${style.textLineHeight.tight};

  @media ${style.deviceSize.tablet} {
    font-size: clamp(28px, 11vw, 52px);
  }
`

export const IntroForms = styled.form`
  max-width: 480px;
  margin-bottom: 96px;

  &.error {
    .username {
      box-shadow: 0 0 0 2px red;
    }
  }
`

export const IntroFormGroup = styled.fieldset`
  display: flex;

  @media ${style.deviceSize.mobile} {
    flex-direction: column;
    max-width: 100%;
  }
`

export const IntroTextInput = styled.input`
  flex-grow: 1;
  width: 100%;
  height: 50px;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid transparent;
  border-radius: 8px;
  margin-right: 12px;
  transition: all 0.08s linear;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.12);
    border-color: ${style.hsl("navy", 32)};
  }

  &:focus {
    background-color: #fff;

    &::placeholder {
      color: rgba(0, 0, 0, 0.6);
    }
  }

  &.active {
    background-color: #fff;

    &:hover {
      background-color: #fff;
      border-color: transparent;
    }
  }

  @media ${style.deviceSize.mobile} {
    margin-bottom: 24px;
  }
`

export const IntroButton = styled.input`
  color: rgba(255, 255, 255, 0.4);
  font-weight: ${style.fontWeight.semibold};
  text-align: center;
  width: 120px;
  height: 50px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.12s linear;

  &.active {
    color: ${style.hsl("navy", 4)};
    border-color: transparent;
    background-color: ${style.hsl("cyan", 48)};

    &:hover {
      background-color: ${style.hsl("cyan", 72)};
    }
  }

  &.disabled {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: not-allowed;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  @media ${style.deviceSize.mobile} {
    width: 100%;
  }
`

export const IntroErrorMessage = styled.p`
  color: red;
  margin-top: 8px;
  font-weight: ${style.fontWeight.medium};
`

export const IntroFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${style.deviceSize.tablet} {
    flex-direction: column;
  }
`

export const Credit = styled.cite`
  font-size: ${style.fontSize.xs};
  font-weight: ${style.fontWeight.semibold};
  font-style: normal;
  color: ${style.hsl("navy", 32)};

  @media ${style.deviceSize.tablet} {
    margin-bottom: 16px;
  }
`

export const ApiRate = styled.div`
  font-size: ${style.fontSize.xs};
  color: ${style.hsl("navy", 32)};
`

export const BgBall = styled.div`
  width: 82vh;
  height: 82vh;
  background-color: transparent;
  position: absolute;
  right: 4vw;
  top: 9vh;
  border-radius: 50%;

  animation: ambient 8s infinite, away 60s infinite;
  animation-timing-function: ease;

  @keyframes ambient {
    0% {
      box-shadow: 0 0 50px rgba(255,255,255,0.02);
      filter: blur(12px);
    }
    50% {
      box-shadow: 0 0 1000px rgba(255,255,255,0.08);
      filter: blur(2px);
    }

    100% {
      box-shadow: 0 0 50px rgba(255,255,255,0.02);
      filter: blur(12px);
    }
  }

  @keyframes away {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.7);
    }
    100% {
      transform: scale(1);
    }
  }

  @media ${style.deviceSize.phablet} {
    display: none;
  }
`
