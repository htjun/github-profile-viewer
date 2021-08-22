import styled, { css } from "styled-components"
import * as style from "/styles/style"

export const inputStyle = css`
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

export const darkInputStyle = css`
  ${inputStyle};
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 1px solid transparent;
  box-shadow: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    border-color: transparent;
    box-shadow: 0 0 0 2px ${style.hsl("blue", 72)};
  }
`

export const sectionStyle = css`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 24px 32px -24px rgba(110, 130, 180, 0.2);

  @media ${style.deviceSize.phablet} {
    border-radius: 0;
  }
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
  width: 100%;
  border-radius: 4px;

  background:
    linear-gradient(0.25turn, transparent, #F5F5F6, transparent),
    linear-gradient(#e8eaed, #e8eaed),
    radial-gradient(38px circle at 19px 19px, #e8eaed 50%, transparent 51%),
    linear-gradient(#e8eaed, #e8eaed);
  background-repeat: no-repeat;
  background-size: 100% 250px, 100% 180px, 100px 100px, 225px 30px;
  background-position: -500px 0, 0 0, 0px 190px, 50px 195px;
  animation: loading 1.5s infinite;

  @keyframes loading {
    to {
      background-position: 315px 0, 0 0, 0 190px, 50px 195px;
    }
  }

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
