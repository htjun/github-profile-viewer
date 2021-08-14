import styled, { css } from "styled-components"
import * as style from "/styles/style"

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
`

const CheckboxInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  flex-shrink: 0;
  height: 20px;
  width: 20px;
  color: ${style.hsl('blue', 52)};
  background-color: #fff;
  border-color: #d1d5db;
  border-width: 1px;
  border-radius: 0.25rem;

  &:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
    border-color: transparent;
    background-color: currentColor;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
  }

  &:checked:hover {
    border-color: transparent;
    background-color: currentColor;
  }
`

const CheckboxLabel = styled.span`
  margin-left: 8px;
  font-size: ${style.fontSize.sm};
`

const Checkbox = (props) => {

  return (
    <CheckboxWrapper>
      <CheckboxInput type="checkbox" value={props.value} onChange={props.onChange} checked={props.checked} />
      <CheckboxLabel>{props.children}</CheckboxLabel>
    </CheckboxWrapper>
  )
}

export default Checkbox
