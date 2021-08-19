import styled, { css } from "styled-components"
import * as style from "/styles/style"

const inputStyle = css`
  height: 36px;
  padding: 4px 12px;
  font-size: ${style.fontSize.sm};
  border: 1px solid ${style.hsl("neutral", 84)};
  border-radius: 6px;
  box-shadow: 0 1px 3px -1px ${style.hsl("neutral", 92)};
  background-color: #fff;
  transition: all 0.08s linear;

  &:hover {
    border-color: ${style.hsl("neutral", 68)};
  }

  &:focus {
    border-color: ${style.hsl("blue", 64)};
    box-shadow: 0 0 0 1px ${style.hsl("blue", 64)};
  }
`

export const sectionStyle = css`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 24px 32px -24px rgba(110, 130, 180, 0.2);
`

export const InputText = styled.input`
  ${inputStyle};
`

export const Button = styled.button`
  ${inputStyle};
  font-weight: ${style.fontWeight.semibold};
  display: flex;
  align-items: center;

  svg {
    fill: ${style.hsl('neutral', 48)};
    width: 14px;
    margin-left: 8px;
  }
`
export const SkeletonBlock = styled.div`
  background-color: ${style.hsl("neutral", 96)};
  width: 100%;
  border-radius: 1px;

  ${(props) =>
    props.width &&
    css`
      width: ${props.width}%;
    `}
  ${(props) =>
    props.height &&
    css`
      height: ${props.height}px;
    `}
  ${(props) =>
    props.right &&
    css`
      margin-right: ${props.right}px;
    `}
  ${(props) =>
    props.bottom &&
    css`
      margin-bottom: ${props.bottom}px;
    `}
`
