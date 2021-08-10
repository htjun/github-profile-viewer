import styled, { css } from "styled-components"
import * as style from "/styles/style"

const TabsWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0 24px;
  border-bottom: 1px solid ${style.hsl("grey", 96)};
`

const Tab = styled.li`
  display: flex;
  padding: 24px 0;
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
  const { data } = props

  return (
    <TabsWrapper>
      <Tab>
        <h2>Repositories</h2>
        <figure>00</figure>
      </Tab>
      <Tab>
        <h2>Subscriptions</h2>
        <figure>48</figure>
      </Tab>
      <Tab>
        <h2>Recieved events</h2>
        <figure>00</figure>
      </Tab>
    </TabsWrapper>
  )
}

export default Tabs
