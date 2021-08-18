import TimeAgo from "javascript-time-ago"
import en from "javascript-time-ago/locale/en"
import reactStringReplace from "react-string-replace"
import styled from "styled-components"
import * as style from "/styles/style"
import CoolLink from "/src/components/CoolLink"

// SVGs
import IconStar from "/src/images/icon_star.svg"
import IconFork from "/src/images/icon_fork.svg"
import IconIssue from "/src/images/icon_issue.svg"

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo("en-US")

const ReposWrapper = styled.ul``

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

  p {
    font-size: ${style.fontSize.sm};
    color: ${style.hsl("neutral", 32)};
  }
`

const RepoNameComp = (props) => {
  const { search_term } = props
  let content = props.children.props.children

  if (search_term) {
    content = reactStringReplace(content, search_term, (match, i) => {
      return <mark key={i}>{match}</mark>
    })
  }

  return (
    <h4 {...props}>
      <CoolLink href={props.children.props.href} target="_blank">
        {content}
      </CoolLink>
    </h4>
  )
}

const RepoName = styled(RepoNameComp)`
  font-size: ${style.fontSize.xl};
  font-weight: ${style.fontWeight.semibold};
  letter-spacing: ${style.textLetterSpacing.tight};
  color: ${style.hsl("neutral", 16)};
  margin-bottom: 4px;
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

    &.repo-status {
      border: 1px solid ${style.hsl("neutral", 84)};
      padding: 4px 12px;
      border-radius: 16px;
      margin-top: -4px;
      margin-bottom: -6px;
    }
  }
`

const FlexTag = styled.div``

const ConditionalDisplay = (props) => {
  const { tag, item, className } = props

  if (item) {
    return (
      <FlexTag as={tag} className={className}>
        {props.children}
      </FlexTag>
    )
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
  border-left: 1px solid ${style.hsl("neutral", 92)};
`

const RepoStatsContent = styled.li`
  display: flex;
  align-items: center;
  font-size: ${style.fontSize.xs};
  color: ${style.hsl("neutral", 48)};

  svg {
    width: 18px;
    height: 18px;
    margin-right: 4px;
    fill: ${style.hsl("neutral", 64)};
  }

  strong {
    margin-right: 4px;
  }
`

const Repos = (props) => {
  const { data, sortBy, forkedDisplay, archivedDisplay, searchTerm } = props

  const sortedData = data.sort(function (a, b) {
    let result = null

    switch (sortBy) {
      case "updated_at":
        result = new Date(b.updated_at) - new Date(a.updated_at)
        break
      case "created_at":
        result = new Date(b.created_at) - new Date(a.created_at)
        break
      case "stargazers_count":
        result = b.stargazers_count - a.stargazers_count
        break
      case "forks_count":
        result = b.forks_count - a.forks_count
        break
      case "watchers":
        result = b.watchers - a.watchers
        break
      default:
        break
    }
    return result
  })

  function dateFormatter(date) {
    return timeAgo.format(new Date(date))
  }

  return (
    <ReposWrapper>
      {sortedData
        .filter((r) => {
          return forkedDisplay ? true : !r.fork
        })
        .filter((r) => {
          return archivedDisplay ? true : !r.archived
        })
        .filter((r) => {
          return r.name.toLowerCase().search(searchTerm.toLowerCase()) != -1
        })
        .map((repo) => {
          return (
            <Repo key={repo.id}>
              <RepoInfo>
                <RepoName search_term={searchTerm}>
                  <CoolLink href={repo.html_url} target="_blank">
                    {repo.name}
                  </CoolLink>
                </RepoName>
                <ConditionalDisplay tag="p" item={repo.description}>
                  {repo.description}
                </ConditionalDisplay>

                <RepoDetails>
                  <ConditionalDisplay tag="li" item={repo.language}>
                    <strong>{repo.language}</strong>
                  </ConditionalDisplay>
                  <ConditionalDisplay
                    tag="li"
                    item={repo.fork}
                    className="repo-status"
                  >
                    Forked
                  </ConditionalDisplay>
                  <ConditionalDisplay
                    tag="li"
                    item={repo.archived}
                    className="repo-status"
                  >
                    Archived
                  </ConditionalDisplay>
                  <ConditionalDisplay tag="li" item={repo.updated_at}>
                    Updated {dateFormatter(repo.updated_at)}
                  </ConditionalDisplay>
                </RepoDetails>
              </RepoInfo>
              <RepoStats>
                <RepoStatsContent>
                  <IconStar />
                  <strong>
                    {repo.stargazers_count.toLocaleString("en-US")}
                  </strong>
                  <span>Stars</span>
                </RepoStatsContent>
                <RepoStatsContent>
                  <IconFork />
                  <strong>{repo.forks_count.toLocaleString("en-US")}</strong>
                  <span>Forks</span>
                </RepoStatsContent>
                <RepoStatsContent>
                  <IconIssue />
                  <strong>{repo.open_issues.toLocaleString("en-US")}</strong>
                  <span>Issues</span>
                </RepoStatsContent>
              </RepoStats>
            </Repo>
          )
        })}
    </ReposWrapper>
  )
}

export default Repos
