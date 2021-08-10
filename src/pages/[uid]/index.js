import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import useProfile from "/src/hooks/useProfile"
import Bio from "/src/components/Bio"
import Tabs from "/src/components/Tabs"
import Repos from "/src/components/Repos"
import styled from "styled-components"
import { Section } from "/styles/styled-elements"

const Layout = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 1120px;
  margin: 64px auto;

  .section-bio {
    max-width: 400px;
    margin-right: 24px;
    position: sticky;
    top: 24px;
  }

  .section-list {
    flex-grow: 1;
  }
`

const Page = () => {
  const router = useRouter()
  const { uid } = router.query
  const [userProfile, userRepos, status] = useProfile(uid)
  const [activeTab, setActiveTab] = useState()
  console.log(userProfile)
  console.log(userRepos)

  return (
    <>
      <Layout>
        <Bio data={userProfile} />
        <Section className="section-list">
          <Tabs />
          <Repos data={userRepos} />
        </Section>
      </Layout>
    </>
  )
}

export default Page
