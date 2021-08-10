import styled from "styled-components"
import { Section, BioListWrapper, BioList } from "/styles/styled-elements"

const BioListContent = (props) => {
  if (props.item) {
    return <BioList type={props.type}>{props.children}</BioList>
  } else {
    return null
  }
}

const Bio = (props) => {
  const { data } = props

  return (
    <Section>
      <BioListWrapper>
        <BioList type="header">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={data.avatar_url} alt="Profile picture" className="avatar" />
          <div className="name-and-id">
            <h1>{data.name}</h1>
            <p>@{data.login}</p>
          </div>
        </BioList>
        <BioListContent type="single-col" item={data.bio}>
          <p>{data.bio}</p>
        </BioListContent>
        <BioListContent item={data.location}>
          <h3>Location</h3>
          <p>{data.location}</p>
        </BioListContent>
        <BioListContent item={data.company}>
          <h3>Company</h3>
          <p>{data.company}</p>
        </BioListContent>
        <BioListContent item={data.twitter_username}>
          <h3>Twitter</h3>
          <p>{data.twitter_username}</p>
        </BioListContent>
        <BioListContent item={data.email}>
          <h3>Email</h3>
          <p>{data.email}</p>
        </BioListContent>
        <BioListContent item={data.following}>
          <h3>Following</h3>
          <p>{data.following}</p>
        </BioListContent>
        <BioListContent item={data.followers}>
          <h3>Followers</h3>
          <p>{data.followers}</p>
        </BioListContent>
      </BioListWrapper>
    </Section>
  )
}

export default Bio
