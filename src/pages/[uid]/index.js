import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import useProfile from "/src/hooks/useProfile"
import Bio from "/src/components/Bio"
import Repos from "/src/components/Repos"
import styled from "styled-components"
import { Section } from "/styles/styled-elements"

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(360px, 1fr) 3fr;
  max-width: 1080px;
  margin: 64px auto;
  column-gap: 32px;
`

const Page = () => {
  const router = useRouter()
  const { uid } = router.query
  const [userProfile, userRepos, status] = useProfile(uid)
  console.log(userProfile)
  console.log(userRepos)

  return (
    <>
      <GridLayout>
        <Bio data={userProfile} />
        <Section>
          <Repos data={userRepos} />
        </Section>
      </GridLayout>
    </>
  )
}

export default Page
