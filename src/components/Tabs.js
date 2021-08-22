import styled, { css } from "styled-components"
import * as style from "/src/styles/style"

const TabsWrapper = styled.ul`
  display: flex;
  padding: 0 24px;
  border-bottom: 1px solid ${style.hsl("grey", 96)};
`

const Tab = styled.li`
  display: flex;
  padding: 24px 0;
  margin-right: 32px;
  align-items: baseline;
  cursor: pointer;

  h2 {
    font-size: ${style.fontSize.sm};
    font-weight: ${style.fontWeight.medium};
    color: ${style.hsl("neutral", 48)};
    margin-right: 8px;
    transition: color 0.12s linear;
  }

  figure {
    font-size: ${style.fontSize.xs};
    font-weight: ${style.fontWeight.medium};
    color: ${style.hsl("neutral", 32)};
    background-color: ${style.hsl("neutral", 96)};
    padding: 4px 12px;
    border-radius: 26px;
    transition: background-color 0.12s linear;
  }

  :hover {
    h2 {
      color: ${style.hsl("neutral", 16)};
    }

    figure {
      background-color: ${style.hsl("neutral", 92)};
    }
  }
`

const Tabs = (props) => {
  const { repoCount } = props

  return (
    <TabsWrapper>
      <Tab>
        <h2>Repositories</h2>
        <figure>{repoCount}</figure>
      </Tab>

    </TabsWrapper>
  )
}

export default Tabs
