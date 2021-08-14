import { useState } from "react"
import styled, { css } from "styled-components"
import * as style from "/styles/style"
import { InputText, Button } from "/styles/styled-elements"
import Checkbox from "/src/components/Checkbox"

import IconFilter from "/src/images/icon_filter.svg"

const FilterBarWrapper = styled.div``

const FilterTopWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`

const FilterBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;

  & > div {
    display: flex;
  }

  h5 {
    font-size: ${style.fontSize.sm};
    font-weight: ${style.fontWeight.medium};
    color: ${style.hsl("neutral", 48)};
  }

  label {
    margin-left: 24px;
  }
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

const SearchInput = styled(InputText)`
  width: 240px;
  margin-right: 32px;
`

const FilterDivider = styled.hr`
  border-color: ${style.hsl("grey", 92)};
`

const FilterBar = (props) => {
  const { repoCount } = props
  const [forkedChecked, setForkedChecked] = useState(true)
  const [archivedChecked, setArchivedChecked] = useState(true)

  return (
    <FilterBarWrapper>
      <FilterTopWrapper>
        <Title>
          <h2>Public Repositories</h2>
          <figure>{repoCount}</figure>
        </Title>
        <Button>
          Filters
          <IconFilter />
        </Button>
      </FilterTopWrapper>
      <FilterBottomWrapper>
        <SearchInput type="text" placeholder="Search.." />
        <div>
          <h5>Includes:</h5>
          <Checkbox
            value={forkedChecked}
            onChange={() => setForkedChecked(!forkedChecked)}
            checked={forkedChecked}
          >
            Forked
          </Checkbox>
          <Checkbox
            value={archivedChecked}
            onChange={() => setArchivedChecked(!archivedChecked)}
            checked={archivedChecked}
          >
            Archived
          </Checkbox>
        </div>
      </FilterBottomWrapper>
      <FilterDivider />
    </FilterBarWrapper>
  )
}

export default FilterBar
