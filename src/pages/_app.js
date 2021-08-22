import { createGlobalStyle } from "styled-components";
import * as style from '/styles/style'

export const GlobalStyle = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ::selection {
      background: ${style.hsl('blue', 64)};
      color: #fff;
    }
    ::-moz-selection {
      background: ${style.hsl('blue', 64)};
      color: #fff;
    }
  }

  html {
    font-family: ${style.fontSet.sans};
    font-size: ${style.fontSize.base};
    line-height: ${style.textLineHeight.normal};
    letter-spacing: ${style.textLetterSpacing.normal};
    color: ${style.hsl('grey', 8)};
  }

  body {
    background-color: ${style.hsl("navy", 16)};
    min-width: ${style.deviceSize.tiny};
  }

  mark {
    background-color: ${style.hsl('cyan', 92)};
  }
`

function MyApp({ Component, pageProps }) {
  return (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>)
}

export default MyApp
