import styled from "styled-components"
import * as style from "/src/styles/style"
import { sectionStyle } from "/src/styles/styled-elements"
import { ReposWrapper } from "../styles/Repos.styled"

const NoRepoWrapper = styled(ReposWrapper)`
  display: grid;
  place-items: center;
  min-height: 400px;
`

const NoRepoContainer = styled.div`
  text-align: center;

  span {
    display: block;
    font-size: ${style.fontSize.xl3};
    margin-bottom: 16px;
  }

  h1 {
    font-size: ${style.fontSize.xl};
    font-weight: ${style.fontWeight.bold};
    letter-spacing: ${style.textLetterSpacing.tight};
    line-height: ${style.textLineHeight.tight};
  }
`

const NoRepos = () => {
  return (
    <NoRepoWrapper>
      <NoRepoContainer>
        <span>🐨</span>
        <h1>No public repositories yet.</h1>
      </NoRepoContainer>
    </NoRepoWrapper>
  )
}

export default NoRepos
