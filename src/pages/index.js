import React, { useState } from "react"
import { useRouter } from "next/router"
import styled from "styled-components"
import * as style from "/styles/style"

import IconGitHub from "/src/images/icon_github.svg"

const IntroOuter = styled.div`
  background-color: ${style.hsl("blue", 12)};
  min-height: 100vh;
`

const IntroContainer = styled.main`
  width: 100vw;
  min-height: 100vh;
  padding: 20vh 10vw 10vh 10vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${style.deviceSize.tablet} {
    padding: 32px 16px;
  }
`

const IntroTitle = styled.h1`
  display: flex;
  align-items: center;
  color: ${style.hsl("neutral", 96)};
  font-weight: ${style.fontWeight.semibold};

  svg {
    margin-right: 8px;
    fill: ${style.hsl("neutral", 96)};
  }
`

const IntroCopy = styled.h2`
  max-width: 600px;
  margin-top: 10vh;
  margin-bottom: 5vh;
  color: #fff;
  font-size: ${style.fontSize.xl6};
  font-weight: ${style.fontWeight.bold};
  letter-spacing: ${style.textLetterSpacing.tight};
  line-height: ${style.textLineHeight.tight};

  @media ${style.deviceSize.tablet} {
    font-size: clamp(32px, 12vw, 52px);
  }
`

const IntroForms = styled.form`
  max-width: 480px;
  margin-bottom: 96px;

  &.error {
    .username {
      box-shadow: 0 0 0 2px red;
    }
  }
`

const IntroFormGroup = styled.fieldset`
  display: flex;

  @media ${style.deviceSize.mobile} {
    flex-direction: column;
    max-width: 100%;
  }
`

const IntroTextInput = styled.input`
  flex-grow: 1;
  width: 100%;
  height: 50px;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid transparent;
  border-radius: 8px;
  margin-right: 12px;
  transition: all 0.08s linear;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.12);
    border-color: ${style.hsl("navy", 32)};
  }

  &:focus {
    background-color: #fff;

    &::placeholder {
      color: rgba(0, 0, 0, 0.6);
    }
  }

  &.active {
    background-color: #fff;

    &:hover {
      background-color: #fff;
      border-color: transparent;
    }
  }

  @media ${style.deviceSize.mobile} {
    margin-bottom: 24px;
  }
`

const IntroButton = styled.input`
  color: rgba(255, 255, 255, 0.4);
  font-weight: ${style.fontWeight.semibold};
  text-align: center;
  width: 120px;
  height: 50px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.12s linear;

  &.active {
    color: ${style.hsl("navy", 4)};
    border-color: transparent;
    background-color: ${style.hsl("cyan", 48)};

    &:hover {
      background-color: ${style.hsl("cyan", 72)};
    }
  }

  &.disabled {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: not-allowed;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  @media ${style.deviceSize.mobile} {
    width: 100%;
  }
`

const IntroErrorMessage = styled.p`
  color: red;
  margin-top: 8px;
  font-weight: ${style.fontWeight.medium};
`

const Credit = styled.cite`
  font-size: ${style.fontSize.sm};
  font-style: normal;
  color: ${style.hsl("neutral", 48)};
`

export default function Home() {
  const router = useRouter()
  const [userId, setUserId] = useState("")
  const [formError, setFormError] = useState(false)

  const GITHUB_PROFILE_BASE_URI = "https://api.github.com/users/"
  const ACCESS_TOKEN = process.env.NEXT_PUBLIC_GH_ACCESS_TOKEN

  async function getProfile() {
    await fetch(`${GITHUB_PROFILE_BASE_URI}${userId}`, {
      method: "GET",
      headers: {
        Authorization: `token ${ACCESS_TOKEN}`,
      },
    }).then((response) => {
      if (response.ok) {
        setFormError(false)
        router.push(`/${userId}`)
      } else {
        setFormError(true)
      }
    })
  }

  const textInputHandler = (e) => {
    setUserId(e.target.value)
    formError && setFormError(false)
  }

  const viewClickHandler = (e) => {
    e.preventDefault()
    getProfile()
  }

  return (
    <>
      <IntroOuter>
        <IntroContainer>
          <div>
            <IntroTitle>
              <IconGitHub />
              GitHub Profile Viewer
            </IntroTitle>
            <IntroCopy>
              A simpler way to display your GitHub profile and repositories.
            </IntroCopy>
            <IntroForms
              onSubmit={viewClickHandler}
              className={formError ? "error" : null}
            >
              <IntroFormGroup>
                <IntroTextInput
                  type="text"
                  value={userId}
                  placeholder="Enter a GitHub username.."
                  onChange={textInputHandler}
                  className={`username ${userId ? "active" : null}`}
                  required
                />
                <IntroButton
                  type="submit"
                  value="View"
                  className={`view ${userId ? "active" : null} ${
                    formError ? "disabled" : null
                  }`}
                  disabled={formError}
                />
              </IntroFormGroup>
              {formError && (
                <IntroErrorMessage>
                  Username doesn&apos;t exist
                </IntroErrorMessage>
              )}
            </IntroForms>
          </div>
          <Credit>Created by Jason Jun</Credit>
        </IntroContainer>
      </IntroOuter>
    </>
  )
}
