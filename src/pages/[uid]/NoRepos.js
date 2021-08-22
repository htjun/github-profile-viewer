import styled from "styled-components"
import * as style from "/styles/style"
import {
  ReposWrapper,
  Repo,
  RepoInfo,
  RepoName,
  RepoDetails,
  ConditionalDisplay,
  RepoStats,
  RepoStatsContent,
  ReposSkeleton,
} from "./Repos.styled"

const NoRepos = () => {
  return (
    <ReposWrapper>
      No repository
    </ReposWrapper>
  )
}

export default NoRepos
