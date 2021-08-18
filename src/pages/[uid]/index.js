import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import useProfile from "/src/hooks/useProfile"
import Bio from "./Bio"
import FilterBar from "./FilterBar"
import Repos from "./Repos"
import styled from "styled-components"
import { Section } from "/styles/styled-elements"

const Layout = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 1140px;
  margin: 0 auto;
  padding: 48px 24px;

  .section-bio {
    width: 340px;
    flex-shrink: 0;
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
  const [sortBy, setSortBy] = useState("updated_at")
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
            sortBy={sortBy}
            setSortBy={setSortBy}
            forkedDisplay={forkedDisplay}
            setForkedDisplay={setForkedDisplay}
            archivedDisplay={archivedDisplay}
            setArchivedDisplay={setArchivedDisplay}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <Repos
            data={userRepos}
            sortBy={sortBy}
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
