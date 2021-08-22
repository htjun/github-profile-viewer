import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import styled from "styled-components"
import * as style from "/src/styles/style"
import { sectionStyle, InputText } from "/src/styles/styled-elements"

const CenterOuter = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
`
const CenterContainer = styled.section`
  ${sectionStyle};
  width: 100%;
  max-width: 480px;
  padding: 48px;
  margin-top: 12vh;
  font-size: ${style.fontSize.xl};

  span {
    display: block;
    font-size: ${style.fontSize.xl3};
    margin-bottom: 16px;
  }

  h1 {
    font-weight: ${style.fontWeight.bold};
    letter-spacing: ${style.textLetterSpacing.tight};
    line-height: ${style.textLineHeight.tight};
    margin-bottom: 4px;
  }

  .username {
    margin-bottom: 48px;
  }
`

const SearchForm = styled.form`
  label {
    font-size: ${style.fontSize.sm};
    color: ${style.hsl("neutral", 64)};
    margin-bottom: 8px;
  }
`

const SearchInput = styled(InputText)`
  width: 100%;
  height: 48px;
  font-size: ${style.fontSize.base};
`

const NoUsername = () => {
  const router = useRouter()
  const { uid } = router.query
  const [searchUsername, setSearchUsername] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    router.push(`/${searchUsername}`)
  }

  return (
    <>
      <CenterOuter>
        <CenterContainer>
          <span>🕵🏻‍♂️</span>
          <h1>Can&apos;t find the username:</h1>
          <div className="username">{uid}</div>
          <SearchForm onSubmit={submitHandler}>
            <label htmlFor="search">Try another username</label>
            <SearchInput
              name="search"
              onChange={(e) => {
                setSearchUsername(e.target.value)
              }}
            />
          </SearchForm>
        </CenterContainer>
      </CenterOuter>
    </>
  )
}

export default NoUsername
