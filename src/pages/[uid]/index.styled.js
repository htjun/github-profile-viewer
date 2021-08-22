import styled from "styled-components"
import { sectionStyle } from "/styles/styled-elements"
import * as style from "/styles/style"

export const PageWrapper = styled.div`
  background: ${style.hsl('navy', 96)};
  min-height: 100vh;
`

export const Layout = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 1140px;
  margin: 0 auto;
  padding: 48px 24px;

  @media ${style.deviceSize.tablet} {
    flex-direction: column;
    padding: 24px;
  }

  @media ${style.deviceSize.phablet} {
    padding: 0;
  }
`

export const RepoContainer = styled.section`
  ${sectionStyle};
  width: 100%;
  flex-grow: 1;
`
