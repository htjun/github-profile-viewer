import { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import * as style from "/src/styles/style"
import IconArrowUp from "/src/assets/icons-general/icon_arrow-up.svg"

const UpButton = styled.button`
  display: grid;
  place-items: center;
  position: fixed;
  width: 40px;
  height: 40px;
  right: 48px;
  bottom: 48px;
  border-radius: 50%;
  background-color: ${style.hsl("neutral", 80)};
  transition: background-color 0.08s linear;

  @media ${style.deviceSize.tablet} {
    right: 24px;
    bottom: 24px;
  }

  @media ${style.deviceSize.phablet} {
    width: 32px;
    height: 32px;
    right: 16px;
    bottom: 16px;
  }

  &:hover {
    background-color: ${style.hsl("neutral", 64)};
  }

  svg {
    fill: #fff;
    width: 64%;
    height: 64%;
  }

  ${(props) => {
    if (props.showScroll) {
      return css`
        display: grid;
      `
    } else {
      return css`
        display: none;
      `
    }
  }}
`

const BackToTopBtn = () => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else {
      setShowScroll(false)
    }
  }

  const scrollTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop)
    return () => {
      window.removeEventListener("scroll", checkScrollTop)
    }
  }, [])

  return (
    <UpButton onClick={scrollTop} showScroll={showScroll}>
      <IconArrowUp />
    </UpButton>
  )
}

export default BackToTopBtn
