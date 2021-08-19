import styled from "styled-components"
import { sectionStyle } from "/styles/styled-elements"
import * as style from "/styles/style"

export const Layout = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 1140px;
  margin: 0 auto;
  padding: 48px 24px;

  @media ${style.deviceSize.landscape} {
    flex-direction: column;
  }
`

export const RepoContainer = styled.section`
  ${sectionStyle};
  flex-grow: 1;
`
