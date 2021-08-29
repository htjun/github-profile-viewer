import { useState, useEffect } from "react"
import styled from "styled-components"
import * as style from "/src/styles/style"

const UsernameSuggestionsWrapper = styled.div`
  width: 100%;
  animation-name: fadein;
  animation-duration: 0.8s;
  animation-delay: 1.8s;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const UsernamesLabel = styled.h4`
  display: flex;
  align-items: center;
  color: ${style.hsl("navy", 40)};
  font-size: ${style.fontSize.sm};
  font-weight: ${style.fontWeight.semibold};
  margin-bottom: 16px;
`

const Usernames = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    color: rgba(255, 255, 255, 0.4);
    font-size: ${style.fontSize.sm};
    font-weight: ${style.fontWeight.medium};
    cursor: pointer;
    padding: 4px 8px;
    background-color: rgba(255, 255, 255, 0.03);
    border-radius: 4px;
    margin-right: 8px;
    margin-bottom: 8px;
    transition: all 0.08s linear;

    &:hover {
      color: rgba(255, 255, 255, 0.8);
      background-color: rgba(255, 255, 255, 0.06);
    }
  }
`

const usernames = [
  "rsms",
  "cassidoo",
  "jensimmons",
  "sdras",
  "stolinski",
  "wesbos",
  "markdalgleish",
  "geelen",
  "hakimel",
  "chriscoyier",
  "rachelandrew",
  "brianlovin",
  "btholt",
  "una",
]

const UsernameSuggestions = (props) => {
  const { setUserId } = props
  const [suffledUsernames, setSuffledUsernames] = useState([])

  const suffleTheList = () => {
    setSuffledUsernames(usernames.sort(() => 0.5 - Math.random()))
  }

  useEffect(() => {
    suffleTheList()
  }, [])

  const handleUsernameClick = (e) => {
    e.preventDefault()
    setUserId(e.target.innerHTML)
  }

  return (
    <UsernameSuggestionsWrapper>
      <UsernamesLabel>Amazing developers</UsernamesLabel>
      <Usernames>
        {suffledUsernames.slice(0, 5).map((item, index) => {
          return (
            <li key={index} onClick={handleUsernameClick}>
              {item}
            </li>
          )
        })}
      </Usernames>
    </UsernameSuggestionsWrapper>
  )
}

export default UsernameSuggestions
