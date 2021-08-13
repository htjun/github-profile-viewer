import styled, { css } from "styled-components"
import * as style from "/styles/style"

const InputStyle = css`
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

export const Section = styled.section`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 24px 32px -24px rgba(110, 130, 180, 0.2);
`

export const InputText = styled.input`
  ${InputStyle};
`

export const Button = styled.button`
  ${InputStyle};
  font-weight: ${style.fontWeight.semibold};
  display: flex;
  align-items: center;

  svg {
    fill: ${style.hsl('neutral', 48)};
    width: 14px;
    margin-left: 8px;
  }
`
