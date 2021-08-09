import styled, { css } from "styled-components"
import * as style from "/styles/style"

export const Section = styled.section`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 24px 32px -24px ${style.hsl('navy', 88)};
`
export const BioListWrapper = styled.ul``

export const BioList = styled.li`
  padding: 24px 32px;
  border-bottom: 1px solid ${style.hsl("grey", 96)};
  font-size: ${style.fontSize.sm};
  color: ${style.hsl("neutral", 16)};

  ${(props) =>
    !props.type &&
    css`
      display: grid;
      grid-template-columns: minmax(120px, 1fr) 2fr;

      h3 {
        font-weight: ${style.fontWeight.semibold};
        color: ${style.hsl('neutral', 64)};
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
      padding: 32px;

      img.avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 16px;
      }

      .name-and-id {
        h1 {
          font-size: ${style.fontSize.xl};
          font-weight: ${style.fontWeight.semibold};
          letter-spacing: ${style.textLetterSpacing.tight};
          line-height: ${style.textLineHeight.normal};
          color: ${style.hsl("neutral", 12)};
        }

        p {
          font-size: ${style.fontSize.sm};
          line-height: ${style.textLineHeight.tight};
          color: ${style.hsl("neutral", 48)};
        }
      }
    `}
`
