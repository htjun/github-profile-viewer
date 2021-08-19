import styled, { css } from "styled-components"
import * as style from "/styles/style"
import { sectionStyle } from "/styles/styled-elements"

export const BioListWrapper = styled.ul`
  ${sectionStyle};
  width: 320px;
  flex-shrink: 0;
  margin-right: 24px;
  position: sticky;
  top: 24px;

  ${(props) => {
    if (props.isWebsite || props.isEmail) {
      return css`
        width: 360px;
      `
    }
  }}
`

export const BioList = styled.li`
  padding: 20px 24px;
  border-bottom: 1px solid ${style.hsl("grey", 96)};
  font-size: ${style.fontSize.sm};
  color: ${style.hsl("neutral", 16)};
  word-wrap: anywhere;

  &:last-of-type {
    border-bottom: none;
  }

  ${(props) =>
    !props.type &&
    css`
      display: flex;

      h3 {
        width: 100px;
        flex-shrink: 0;
        flex-grow: 0;
        font-weight: ${style.fontWeight.semibold};
        color: ${style.hsl("neutral", 64)};
      }

      p {
        flex-grow: 1;
      }
    `}

  ${(props) =>
    props.type === "single-col" &&
    css`
      display: block;
    `}

  ${(props) =>
    props.type === "header" &&
    css`
      display: flex;
      align-items: center;
      padding: 24px;

      img.avatar {
        width: 100%;
        height: 100%;
      }

      .identifier {
        h1 {
          font-size: ${style.fontSize.xl};
          font-weight: ${style.fontWeight.semibold};
          letter-spacing: ${style.textLetterSpacing.tight};
          line-height: ${style.textLineHeight.tight};
          color: ${style.hsl("neutral", 12)};
          margin: 4px 0;
        }

        .username {
          font-size: ${style.fontSize.sm};
          line-height: ${style.textLineHeight.tight};
          color: ${style.hsl("neutral", 48)};
          display: flex;
          align-items: center;

          svg.github {
            width: 14px;
            height: 14px;
            fill: ${style.hsl("neutral", 64)};
            margin-right: 6px;
          }
        }
      }
    `}

    ${(props) =>
    props.type === "footer" &&
    css`
      display: block;
      padding: 24px;
      color: ${style.hsl("neutral", 48)};
    `}
`
export const BioAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 16px;
  background-color: ${style.hsl("neutral", 92)};
  overflow: hidden;
`
