import reactStringReplace from "react-string-replace"
import styled from "styled-components"
import * as style from "/src/styles/style"
import CoolLink from "/src/components/CoolLink"
import { SkeletonBlock } from "/src/styles/styled-elements"

export const ReposWrapper = styled.ul`
  width: 100%;
`

export const Repo = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid ${style.hsl("grey", 96)};

  &:last-of-type {
    border-bottom: none;
  }

  @media ${style.deviceSize.landscape} {
    flex-direction: column;;
  }

  @media ${style.deviceSize.phablet} {
    padding: 18px;
  }
`

export const RepoInfo = styled.div`
  width: 100%;
  margin-right: 24px;

  @media ${style.deviceSize.phablet} {
    margin-right: 0;
  }

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

export const RepoName = styled(RepoNameComp)`
  font-size: ${style.fontSize.xl};
  font-weight: ${style.fontWeight.semibold};
  letter-spacing: ${style.textLetterSpacing.tight};
  color: ${style.hsl("neutral", 16)};
  margin-bottom: 4px;
`
export const RepoDetails = styled.ul`
  display: flex;
  font-size: ${style.fontSize.xs};
  font-weight: ${style.fontWeight.semibold};
  color: ${style.hsl("neutral", 48)};
  margin-top: 24px;

  li {
    display: flex;
    align-items: center;
    margin-right: 24px;
    font-weight: ${style.fontWeight.medium};

    &.repo-status {
      border: 1px solid ${style.hsl("neutral", 84)};
      padding: 4px 12px;
      border-radius: 16px;
      margin-top: -4px;
      margin-bottom: -6px;
    }

    &.language {
      svg {
        width: 16px;
        height: 16px;
        margin-right: 4px;
      }
    }
  }
`

const FlexTag = styled.div``

export const ConditionalDisplay = (props) => {
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

export const RepoStats = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 140px;
  padding: 2px 0 2px 16px;
  border-left: 1px solid ${style.hsl("neutral", 92)};

  @media ${style.deviceSize.landscape} {
    border: none;
    flex-direction: row;
    justify-content: flex-start;
    padding: 0;
    margin-top: 16px;
  }
`

export const RepoStatsContent = styled.li`
  display: flex;
  align-items: center;
  font-size: ${style.fontSize.xs};
  color: ${style.hsl("neutral", 48)};

  @media ${style.deviceSize.landscape} {
    margin-right: 24px;
  }

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

const RepoSkeleton = () => {
  return (
    <Repo>
      <RepoInfo>
        <SkeletonBlock width="50" height="30" bottom="6"/>
        <SkeletonBlock height="21" bottom="24"/>
        <RepoDetails>
          <SkeletonBlock height="18" right="20"/>
          <SkeletonBlock height="18" right="200"/>
        </RepoDetails>
      </RepoInfo>
      <RepoStats>
        <SkeletonBlock height="18"/>
        <SkeletonBlock height="18"/>
        <SkeletonBlock height="18"/>
      </RepoStats>
    </Repo>
  )
}

export const ReposSkeleton = () => {
  const skeletons = []

  for (let i = 0; i < 10; i++) {
    skeletons.push(<RepoSkeleton key={i} />)
  }

  return (
    <ReposWrapper>
      {skeletons}
    </ReposWrapper>
  )
}
