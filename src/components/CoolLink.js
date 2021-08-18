import styled, { css } from "styled-components"
import { Button } from "/styles/styled-elements"
import * as style from "/styles/style"
import IconArrowRightUp from "/src/assets/icons-general/icon_arrow-right-up.svg"

const LinkWrapper = styled.div`
  display: inline-block;
`

const LinkAnchor = styled.a`
  padding: 2px 8px;
  margin-left: -8px;
  margin-top: -2px;
  border-radius: 4px;
  background-color: transparent;
  transition: all 0.16s linear 0s;
  display: flex;
  align-items: center;

  svg.arrow {
    opacity: 0;
    width: 14px;
    height: 14px;
    position: relative;
    margin-left: 4px;
    fill: ${style.hsl("neutral", 48)};
    transition: opacity 0.12s linear 0s;
  }

  &:hover {
    background-color: ${style.hsl("neutral", 96)};

    svg {
      opacity: 1;
    }
  }
`

const CoolLink = (props) => {
  return (
    <LinkWrapper>
      <LinkAnchor {...props}>
        {props.children}
        <IconArrowRightUp className="arrow" />
      </LinkAnchor>
    </LinkWrapper>
  )
}

export default CoolLink
