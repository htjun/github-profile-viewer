import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import useProfile from "/src/hooks/useProfile"
import Head from "next/head"
import styled, { css } from "styled-components"
import * as style from '/styles/style'

const Section = styled.section`
  background-color: #fff;
`

const Page = () => {
  const router = useRouter()
  const { uid } = router.query
  const [userProfile, userRepos, status] = useProfile(uid)
  console.log(userProfile)
  console.log(userRepos)
  return (
    <>
      <Section>
        <h1>{userProfile.name}</h1>
        <p>{userProfile.bio}</p>
        <ul>
          <li>
            <h3>Location</h3>
            <p>{userProfile.location}</p>
          </li>
          <li>
            <h3>Company</h3>
            <p>{userProfile.company}</p>
          </li>
          <li>
            <h3>Twitter</h3>
            <p>{userProfile.twitter_username}</p>
          </li>
          <li>
            <h3>Email</h3>
            <p>{userProfile.email}</p>
          </li>
          <li>
            <h3>Following</h3>
            <p>{userProfile.following}</p>
          </li>
          <li>
            <h3>Followers</h3>
            <p>{userProfile.followers}</p>
          </li>
        </ul>
      </Section>

      <Section>
        <ul>
          {userRepos.map((repo)=>{
            return (
              <li key={repo.id}>
                {repo.name}
              </li>
            )
          })}
        </ul>
      </Section>
    </>
  )
}

export default Page
