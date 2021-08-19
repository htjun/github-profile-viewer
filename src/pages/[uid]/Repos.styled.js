import reactStringReplace from "react-string-replace"
import styled from "styled-components"
import * as style from "/styles/style"
import CoolLink from "/src/components/CoolLink"

export const ReposWrapper = styled.ul``

export const Repo = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid ${style.hsl("grey", 96)};

  &:last-of-type {
    border-bottom: none;
  }
`

export const RepoInfo = styled.div`
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
`

export const RepoStatsContent = styled.li`
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
