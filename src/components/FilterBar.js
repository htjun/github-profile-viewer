import styled, { css } from "styled-components"
import * as style from "/styles/style"

const FilterBarWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  border-bottom: 1px solid ${style.hsl("grey", 96)};
`

const Title = styled.li`
  display: flex;
  padding: 24px 0;
  margin-right: 32px;
  align-items: baseline;

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
`

const SearchInput = styled.input`
  width: 240px;
  height: 36px;
  padding: 4px 12px;
  font-size: ${style.fontSize.sm};
  border: 1px solid ${style.hsl("neutral", 84)};
  border-radius: 4px;
  box-shadow: 0 1px 3px -1px ${style.hsl("neutral", 92)};
  transition: all 0.08s linear;

  &:hover {
    border-color: ${style.hsl("neutral", 72)};
  }

  &:focus {
    border-color: ${style.hsl("blue", 64)};
    box-shadow: 0 0 0 1px ${style.hsl("blue", 64)};
  }
`

const FilterBar = (props) => {
  const { repoCount } = props

  return (
    <FilterBarWrapper>
      <Title>
        <h2>Public Repositories</h2>
        <figure>{repoCount}</figure>
      </Title>
      <SearchInput type="text" placeholder="Search.." />
    </FilterBarWrapper>
  )
}

export default FilterBar
