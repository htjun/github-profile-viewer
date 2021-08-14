import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import useProfile from "/src/hooks/useProfile"
import Bio from "/src/components/Bio"
import FilterBar from "/src/components/FilterBar"
import Repos from "/src/components/Repos"
import styled from "styled-components"
import { Section } from "/styles/styled-elements"

const Layout = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 1120px;
  margin: 64px auto;

  .section-bio {
    min-width: 320px;
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
  const [forkedDisplay, setForkedDisplay] = useState(true)
  const [archivedDisplay, setArchivedDisplay] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <>
      <Layout>
        <Bio data={userProfile} />
        <Section className="section-list">
          <FilterBar
            data={userRepos}
            forkedDisplay={forkedDisplay}
            setForkedDisplay={setForkedDisplay}
            archivedDisplay={archivedDisplay}
            setArchivedDisplay={setArchivedDisplay}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <Repos
            data={userRepos}
            forkedDisplay={forkedDisplay}
            archivedDisplay={archivedDisplay}
            searchTerm={searchTerm}
          />
        </Section>
      </Layout>
    </>
  )
}

export default Page
