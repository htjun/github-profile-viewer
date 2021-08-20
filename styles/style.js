import styled, { css, createGlobalStyle } from 'styled-components'
import deStyle from 'destyle.css'

// Design Tokens

export const hsl = (color, lightness) => {
  let hs

  switch (color) {
    case "neutral":
      hs = "220, 12%"
      break;
    case "navy":
      hs = "220, 24%"
      break;
    case "grey":
      hs = "220, 8%"
      break;
    case "blue":
      hs = "228, 64%"
      break;
    case "cyan":
      hs = "192, 100%"
      break;
    default:
      hs = "220, 8%"
      break;
  }
  return `hsl(${hs}, ${lightness}%)`
}

export const colorSet = {
  darkest: `#242424`
}

export const fontSet = {
  sans: `'Inter', sans-serif`,
  serif: `'Noto Serif KR', 'Inter', sans-serif`,
  code: `'Source Code Pro', monospace`,
}

export const fontSize = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  xl2: '1.5rem',
  xl3: '2rem',
  xl4: '2.5rem',
  xl5: '3rem',
  xl6: '3.25rem',
}

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  black: 900,
}

export const textLineHeight = {
  tight: 1.25,
  normal: 1.5,
  loose: 1.65,
}

export const textLetterSpacing = {
  tighter: '-0.04em',
  tight: '-0.025em',
  normal: 0,
  loose: '0.025em',
}

export const deviceSize = {
  tiny: `(max-width: 340px)`,
  mobile: `(max-width: 480px)`,
  phablet: `(max-width: 640px)`,
  tablet: `(max-width: 850px)`,
  landscape: `(max-width: 1080px)`,
  laptop: `(max-width: 1140px)`,
}
