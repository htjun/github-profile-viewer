import { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { Button } from "/styles/styled-elements"
import * as style from "/styles/style"

import IconChevronDown from "/src/assets/icons-general/icon_chevron-down.svg"

const DropdownWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media ${style.deviceSize.phablet} {
    justify-content: flex-start;
  }
`

const DropdownButton = styled(Button)`
  font-weight: ${style.fontWeight.regular};
  color: ${style.hsl("neutral", 32)};

  &:hover {
    color: ${style.hsl("neutral", 12)};
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
  min-width: 180px;
  border: 1px solid ${style.hsl("neutral", 88)};
  border-radius: 6px;
  box-shadow: 0 10px 15px -3px rgba(110, 130, 180, 0.2),
    0 4px 6px -2px rgba(110, 130, 180, 0.1);
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
  const node = useRef()

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return
    }
    // outside click
    setMenuOpen(false)
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick)

    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [])

  const handleDropdownItemClick = (e) => {
    e.preventDefault()
    setSortBy(e.target.dataset.slug)
    setMenuOpen(false)
  }

  const getSortStatus = () => {
    const item = menuItems.find((item) => item.slug === sortBy)
    return item.label
  }

  return (
    <DropdownWrapper ref={node}>
      <DropdownButton onClick={() => setMenuOpen(!menuOpen)}>
        <span>Sort by:</span>
        <strong>{getSortStatus()}</strong>
        <IconChevronDown />
      </DropdownButton>
      {menuOpen && (
        <DropdownMenu>
          {menuItems.map((item, index) => {
            return (
              <DropdownMenuItem key={item.slug}>
                <a
                  href="#"
                  data-slug={item.slug}
                  onClick={handleDropdownItemClick}
                >
                  {item.label}
                </a>
              </DropdownMenuItem>
            )
          })}
        </DropdownMenu>
      )}
    </DropdownWrapper>
  )
}

export default Dropdown
