import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import styled from "styled-components"
import * as style from "/styles/style"

// SVGs
import IconStar from '/src/images/icon_star.svg'
import IconFork from '/src/images/icon_fork.svg'
import IconWatch from '/src/images/icon_watch.svg'

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

const ReposWrapper = styled.ul`

`

const Repo = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid ${style.hsl("grey", 96)};

  &:last-of-type {
    border-bottom: none;
  }
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


const RepoStats = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 140px;
  padding: 2px 0 2px 16px;
  border-left: 1px solid ${style.hsl('neutral', 92)};
`

const RepoStatsContent = styled.li`
  display: flex;
  align-items: center;
  font-size: ${style.fontSize.xs};
  color: ${style.hsl("neutral", 48)};

  svg {
    margin-right: 4px;
  }

  strong {
    margin-right: 4px;
  }
`

const Repos = (props) => {
  const { data } = props

  const sortedData = data.sort(function(a, b){
    return new Date(b.updated_at) - new Date(a.updated_at);
  });

  function dateFormatter(date) {
    return timeAgo.format(new Date(date))
  }

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
                <RepoDetailsContent item={repo.fork}>
                  Fork: <strong>{repo.fork}</strong>
                </RepoDetailsContent>
                <RepoDetailsContent item={repo.updated_at}>
                  Updated {dateFormatter(repo.updated_at)}
                </RepoDetailsContent>
              </RepoDetails>
            </RepoInfo>
            <RepoStats>
              <RepoStatsContent>
                <IconStar />
                <strong>{repo.stargazers_count}</strong>
                <span>Stars</span>
              </RepoStatsContent>
              <RepoStatsContent>
                <IconFork />
                <strong>{repo.forks_count}</strong>
                <span>Forks</span>
              </RepoStatsContent>
              <RepoStatsContent>
                <IconWatch />
                <strong>{repo.watchers_count}</strong>
                <span>Watchers</span>
              </RepoStatsContent>
            </RepoStats>
          </Repo>
        )
      })}
    </ReposWrapper>
  )
}

export default Repos
