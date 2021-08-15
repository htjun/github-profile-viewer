import { useState } from "react"
import styled, { css } from "styled-components"
import { Button } from "/styles/styled-elements"
import * as style from "/styles/style"

import IconChevronDown from "/src/images/icon_chevron-down.svg"

const DropdownWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
`

const DropdownButton = styled(Button)`
  font-weight: ${style.fontWeight.regular};
  color: ${style.hsl('neutral', 32)};

  &:hover {
    color: ${style.hsl('neutral', 12)};
  }

  span {
    margin-right: 4px;
  }
`

const DropdownMenu = styled.ul`
  background-color: #fff;
  position: absolute;
  top: 44px;
  padding: 8px 0;
  min-width: 200px;
  border: 1px solid ${style.hsl("neutral", 88)};
  border-radius: 6px;
  box-shadow: 0 10px 15px -3px rgba(110, 130, 180, 0.2), 0 4px 6px -2px rgba(110, 130, 180, 0.1);
`

const DropdownMenuItem = styled.li`
  font-size: ${style.fontSize.sm};
  font-weight: ${style.fontWeight.medium};
  color: ${style.hsl("neutral", 24)};

  a {
    display: block;
    padding: 8px 16px;

    &:hover {
      background-color: ${style.hsl("neutral", 96)};
    }
  }
`

const Dropdown = (props) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { menuItems, sortBy, setSortBy } = props

  const Capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <DropdownWrapper>
      <DropdownButton onClick={() => setMenuOpen(!menuOpen)}>
        {props.children}
        <IconChevronDown />
      </DropdownButton>
      {
        menuOpen &&
        <DropdownMenu>
          {menuItems.map((item, index) => {
            return (
              <DropdownMenuItem key={index}>
                <a href="#">{Capitalize(item)}</a>
              </DropdownMenuItem>
            )
          })}
        </DropdownMenu>
      }
    </DropdownWrapper>
  )
}

export default Dropdown
