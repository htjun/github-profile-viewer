import { useState } from "react"
import styled, { css } from "styled-components"
import * as style from "/styles/style"
import { InputText } from "/styles/styled-elements"
import Dropdown from "/src/components/Dropdown"
import Checkbox from "/src/components/Checkbox"

const FilterBarWrapper = styled.div``

const FilterTopWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;

  @media ${style.deviceSize.phablet} {
    padding: 18px;
    padding-bottom: 0;
    flex-direction: column;
    align-items: flex-start;
  }
`

const FilterBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;

  @media ${style.deviceSize.phablet} {
    padding: 16px 18px;
  }

  @media ${style.deviceSize.phablet} {
    flex-direction: column;
    align-items: flex-start;
  }

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

  @media ${style.deviceSize.phablet} {
    padding: 0;
    margin: 0;
    margin-bottom: 24px;
  }

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
  width: auto;
  flex-grow: 1;
  margin-right: 32px;

  @media ${style.deviceSize.phablet} {
    width: 100%;
    margin: 0;
    margin-bottom: 16px;
  }
`

const FilterDivider = styled.hr`
  border-color: ${style.hsl("grey", 92)};
`

const FilterBar = (props) => {
  const {
    data,
    sortBy,
    setSortBy,
    forkedDisplay,
    setForkedDisplay,
    archivedDisplay,
    setArchivedDisplay,
    searchTerm,
    setSearchTerm,
  } = props

  const dropdownMenus = [
    { slug: "updated_at", label: "Update" },
    { slug: "created_at", label: "Create" },
    { slug: "stargazers_count", label: "Stars" },
    { slug: "forks_count", label: "Forks" },
    { slug: "open_issues", label: "Issues" },
  ]

  const repoCount = data
    .filter((r) => {
      return forkedDisplay ? true : !r.fork
    })
    .filter((r) => {
      return archivedDisplay ? true : !r.archived
    })
    .filter((r) => {
      return r.name.search(searchTerm) != -1
    }).length

  return (
    <FilterBarWrapper>
      <FilterTopWrapper>
        <Title>
          <h2>Public Repositories</h2>
          <figure>{repoCount}</figure>
        </Title>
        <Dropdown
          menuItems={dropdownMenus}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </FilterTopWrapper>
      <FilterBottomWrapper>
        <SearchInput
          type="text"
          placeholder="Search.."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
        />
        <div>
          <h5>Include:</h5>
          <Checkbox
            value={forkedDisplay}
            onChange={() => setForkedDisplay(!forkedDisplay)}
            checked={forkedDisplay}
          >
            Forked
          </Checkbox>
          <Checkbox
            value={archivedDisplay}
            onChange={() => setArchivedDisplay(!archivedDisplay)}
            checked={archivedDisplay}
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
