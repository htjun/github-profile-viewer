import styled, { css } from "styled-components"
import * as style from "/styles/style"

const ReposWrapper = styled.ul`

`

const Repo = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid ${style.hsl("grey", 96)};
`

const RepoInfo = styled.div`
  margin-right: 24px;

  h4 {
    font-size: ${style.fontSize.xl};
    font-weight: ${style.fontWeight.semibold};
    letter-spacing: ${style.textLetterSpacing.tight};
    color: ${style.hsl("neutral", 16)};
    margin-bottom: 4px;
  }

  p {
    font-size: ${style.fontSize.sm};
    color: ${style.hsl("neutral", 32)};
  }
`

const RepoDetails = styled.ul`
  display: flex;
  font-size: ${style.fontSize.xs};
  font-weight: ${style.fontWeight.semibold};
  color: ${style.hsl("neutral", 48)};
  margin-top: 24px;

  li {
    margin-right: 24px;
    font-weight: ${style.fontWeight.medium};
  }
`

const RepoDetailsContent = (props) => {
  if (props.item) {
    return <li>{props.children}</li>
  } else {
    return null
  }
}

const Repos = (props) => {
  const { data } = props

  const sortedData = data.sort(function(a, b){
    return new Date(b.updated_at) - new Date(a.updated_at);
  });

  return (
    <ReposWrapper>
      {sortedData.map((repo) => {
        return (
          <Repo key={repo.id}>
            <RepoInfo>
              <h4>{repo.name}</h4>
              <p>{repo.description}</p>

              <RepoDetails>
                <RepoDetailsContent item={repo.language}>
                  <strong>{repo.language}</strong>
                </RepoDetailsContent>
                <RepoDetailsContent item={repo.stargazers_count}>
                  <strong>{repo.stargazers_count}</strong> Stars
                </RepoDetailsContent>
                <RepoDetailsContent item={repo.forks_count}>
                  <strong>{repo.forks_count}</strong> Forks
                </RepoDetailsContent>
                <RepoDetailsContent item={repo.watchers_count}>
                  <strong>{repo.watchers_count}</strong> Watchers
                </RepoDetailsContent>
                <RepoDetailsContent item={repo.fork}>
                  Fork: <strong>{repo.fork}</strong>
                </RepoDetailsContent>
                <RepoDetailsContent item={repo.updated_at}>
                  {repo.updated_at}
                </RepoDetailsContent>
              </RepoDetails>
            </RepoInfo>
            <div className="repo-contributors">
            </div>
          </Repo>
        )
      })}
    </ReposWrapper>
  )
}

export default Repos
