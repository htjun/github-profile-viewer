import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import useProfile from "/src/hooks/useProfile"
import styled, { css } from "styled-components"
import * as style from "/styles/style"
import { Section, BioListWrapper, BioList } from "/styles/styled-elements"

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(360px, 1fr) 3fr;
  max-width: 1080px;
  margin: 64px auto;
  column-gap: 32px;
`

const BioListContent = (props) => {
  if (props.item) {
    return <BioList type={props.type}>{props.children}</BioList>
  } else {
    return null
  }
}

const Page = () => {
  const router = useRouter()
  const { uid } = router.query
  const [userProfile, userRepos, status] = useProfile(uid)
  console.log(userProfile)
  console.log(userRepos)

  return (
    <>
      <GridLayout>
        <Section>
          <BioListWrapper>
            <BioList type="header">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={userProfile.avatar_url}
                alt="Profile picture"
                className="avatar"
              />
              <div className="name-and-id">
                <h1>{userProfile.name}</h1>
                <p>@{userProfile.login}</p>
              </div>
            </BioList>
            <BioListContent type="single-col" item={userProfile.bio}>
              <p>{userProfile.bio}</p>
            </BioListContent>
            <BioListContent item={userProfile.location}>
              <h3>Location</h3>
              <p>{userProfile.location}</p>
            </BioListContent>
            <BioListContent item={userProfile.company}>
              <h3>Company</h3>
              <p>{userProfile.company}</p>
            </BioListContent>
            <BioListContent item={userProfile.twitter_username}>
              <h3>Twitter</h3>
              <p>{userProfile.twitter_username}</p>
            </BioListContent>
            <BioListContent item={userProfile.email}>
              <h3>Email</h3>
              <p>{userProfile.email}</p>
            </BioListContent>
            <BioListContent item={userProfile.following}>
              <h3>Following</h3>
              <p>{userProfile.following}</p>
            </BioListContent>
            <BioListContent item={userProfile.followers}>
              <h3>Followers</h3>
              <p>{userProfile.followers}</p>
            </BioListContent>
          </BioListWrapper>
        </Section>

        <Section>
          <ul>
            {userRepos.map((repo) => {
              return <li key={repo.id}>{repo.name}</li>
            })}
          </ul>
        </Section>
      </GridLayout>
    </>
  )
}

export default Page
