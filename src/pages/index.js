import React, { useState } from "react"
import { useRouter } from "next/router"
import {
  IntroOuter,
  IntroContainer,
  IntroTitle,
  IntroCopy,
  IntroForms,
  IntroFormGroup,
  IntroTextInput,
  IntroButton,
  IntroErrorMessage,
  IntroFooter,
  Credit,
  ApiRate,
} from "./index.styled"

import IconGitHub from "/src/assets/icons-general/icon_github.svg"

const GITHUB_PROFILE_BASE_URI = "https://api.github.com/users/"
const GITHUB_API_RATES_URI = "https://api.github.com/rate_limit"
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_GH_ACCESS_TOKEN

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
