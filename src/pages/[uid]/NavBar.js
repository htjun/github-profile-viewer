import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import styled from "styled-components"
import * as style from "/styles/style"
import { darkInputStyle } from "/styles/styled-elements"

import IconGitHub from "/src/assets/icons-general/icon_github.svg"

const NavBarWrapper = styled.nav`
  width: 100%;
  height: 52px;
  background-color: ${style.hsl("navy", 16)};
  display: grid;
  place-items: center;
`

const NavBarContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
`

const NavBarTitle = styled.a`
  display: flex;
  align-items: center;
  padding: 4px 0;
  flex-grow: 0;
  color: ${style.hsl("neutral", 88)};
  font-size: ${style.fontSize.sm};
  font-weight: ${style.fontWeight.semibold};
  letter-spacing: ${style.textLetterSpacing.tight};
  transition: color 0.15s linear;

  &:hover {
    color: #fff;
  }

  & svg {
    width: 18px;
    height: 18px;
    margin-right: 10px;
    fill: currentColor;
  }

  h1 {
    @media ${style.deviceSize.mobile} {
      display: none;
    }
  }
`

const NavSearchForm = styled.form`
  width: 100%;
  max-width: 240px;
  @media ${style.deviceSize.mobile} {
    max-width: 100%;
    margin-left: 24px;
  }
`

const NavSearchInput = styled.input`
  ${darkInputStyle};
  width: 100%;
`

const NavBar = (props) => {
  const router = useRouter()
  const [searchUsername, setSearchUsername] = useState("")
  const { noUsername } = props

  const submitHandler = (e) => {
    e.preventDefault()
    router.push(`/${searchUsername}`)
  }

  return (
    <NavBarWrapper>
      <NavBarContainer>
        <Link href="/" passHref>
          <NavBarTitle>
            <IconGitHub />
            <h1>GitHub Profile Viewer</h1>
          </NavBarTitle>
        </Link>
        {!noUsername && (
          <NavSearchForm onSubmit={submitHandler}>
            <NavSearchInput
              type="text"
              placeholder="Enter GitHub username.."
              name="search"
              onChange={(e) => {
                setSearchUsername(e.target.value)
              }}
            />
          </NavSearchForm>
        )}
      </NavBarContainer>
    </NavBarWrapper>
  )
}

export default NavBar
