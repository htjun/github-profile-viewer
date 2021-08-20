import { useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import useProfile from "/src/hooks/useProfile"
import Bio from "./Bio"
import FilterBar from "./FilterBar"
import Repos from "./Repos"
import {Layout, RepoContainer} from "./index.styled"

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
      <Head>
        <title>{userProfile.name && `${userProfile.name} – `}GitHub Profile Viewer</title>
      </Head>
      <Layout>
        <Bio data={userProfile} isLoading={status.profileLoading} />
        <RepoContainer>
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
            isLoading={status.reposLoading}
          />
        </RepoContainer>
      </Layout>
    </>
  )
}

export default Page
