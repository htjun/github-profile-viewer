import dateFormatter from "/src/helpers/dateFormatter"
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
} from "../styles/Repos.styled"
import NoRepos from "./NoRepos"
import CoolLink from "/src/components/CoolLink"
import LangIcon from "/src/components/LangIcon"

// SVGs
import IconStar from "/src/assets/icons-general/icon_star.svg"
import IconFork from "/src/assets/icons-general/icon_fork.svg"
import IconIssue from "/src/assets/icons-general/icon_issue.svg"

const Repos = (props) => {
  const {
    data,
    sortBy,
    forkedDisplay,
    archivedDisplay,
    searchTerm,
    isLoading,
  } = props

  let status = "loading"

  if (isLoading) {
    status = "loading"
  } else {
    if (data.length > 0) {
      status = "loaded"
    } else {
      status = "no repo"
    }
  }

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
      case "open_issues":
        result = b.open_issues - a.open_issues
        break
      default:
        break
    }
    return result
  })

  return (
    <>
      {
        {
          loading: <ReposSkeleton />,
          loaded: (
            <ReposWrapper>
              {sortedData
                .filter((r) => {
                  return forkedDisplay ? true : !r.fork
                })
                .filter((r) => {
                  return archivedDisplay ? true : !r.archived
                })
                .filter((r) => {
                  return (
                    r.name.toLowerCase().search(searchTerm.toLowerCase()) != -1
                  )
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
                          <ConditionalDisplay
                            tag="li"
                            item={repo.language}
                            className="language"
                          >
                            <LangIcon name={repo.language} />
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
                          <strong>
                            {repo.forks_count.toLocaleString("en-US")}
                          </strong>
                          <span>Forks</span>
                        </RepoStatsContent>
                        <RepoStatsContent>
                          <IconIssue />
                          <strong>
                            {repo.open_issues.toLocaleString("en-US")}
                          </strong>
                          <span>Issues</span>
                        </RepoStatsContent>
                      </RepoStats>
                    </Repo>
                  )
                })}
            </ReposWrapper>
          ),
          "no repo": <NoRepos />,
        }[status]
      }
    </>
  )
}

export default Repos
