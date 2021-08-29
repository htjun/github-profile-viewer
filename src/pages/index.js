import { useState } from "react"
import Head from "next/head"
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
  BgBall
} from "/src/styles/index.styled"
import UsernameSuggestions from '/src/components/UsernameSuggestions'
import IconGitHub from "/src/assets/icons-general/icon_github.svg"

const GITHUB_PROFILE_BASE_URI = "https://api.github.com/users/"
const GITHUB_API_RATES_URI = "https://api.github.com/rate_limit"
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_GH_ACCESS_TOKEN

const Home = (props) => {
  const router = useRouter()
  const [userId, setUserId] = useState("")
  const [formError, setFormError] = useState(false)

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

  const handleCreditClick = (e) => {
    e.preventDefault()
    console.log("click")
    setUserId("htjun")
  }

  return (
    <>
      <Head>
        <title>GitHub Profile Viewer</title>
      </Head>
      <IntroOuter>
        <IntroContainer>
          <div>
            <IntroTitle>
              <IconGitHub />
              GitHub Profile Viewer
            </IntroTitle>
            <IntroCopy>
              A simpler way to show your GitHub profile and repositories.
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
            <UsernameSuggestions setUserId={setUserId} />
          </div>
          <IntroFooter>
            <Credit onClick={handleCreditClick}>Created by Jason Jun</Credit>
            <ApiRate>
              API rate: {props.apiLimit.rate.remaining} /{" "}
              {props.apiLimit.rate.limit}
            </ApiRate>
          </IntroFooter>
        </IntroContainer>
        <BgBall />
      </IntroOuter>
    </>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(GITHUB_API_RATES_URI, {
    method: "GET",
    headers: {
      Authorization: `token ${ACCESS_TOKEN}`,
    },
  })

  const apiLimit = await res.json()

  return {
    props: { apiLimit }, // will be passed to the page component as props
  }
}

export default Home
