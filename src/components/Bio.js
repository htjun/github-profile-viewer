import styled, { css } from "styled-components"
import * as style from "/styles/style"
import { Section } from "/styles/styled-elements"

const BioListWrapper = styled.ul``

const BioList = styled.li`
  padding: 24px 32px;
  border-bottom: 1px solid ${style.hsl("grey", 96)};
  font-size: ${style.fontSize.sm};
  color: ${style.hsl("neutral", 16)};

  ${(props) =>
    !props.type &&
    css`
      display: grid;
      grid-template-columns: minmax(120px, 1fr) 2fr;

      h3 {
        font-weight: ${style.fontWeight.semibold};
        color: ${style.hsl("neutral", 64)};
      }
    `}

  ${(props) =>
    props.type === "single-col" &&
    css`
      display: block;
    `}

  ${(props) =>
    props.type === "header" &&
    css`
      display: flex;
      align-items: center;
      padding: 32px;

      img.avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 16px;
      }

      .name-and-id {
        h1 {
          font-size: ${style.fontSize.xl};
          font-weight: ${style.fontWeight.semibold};
          letter-spacing: ${style.textLetterSpacing.tight};
          line-height: ${style.textLineHeight.normal};
          color: ${style.hsl("neutral", 12)};
        }

        p {
          font-size: ${style.fontSize.sm};
          line-height: ${style.textLineHeight.tight};
          color: ${style.hsl("neutral", 48)};
        }
      }
    `}

    ${(props) =>
    props.type === "footer" &&
    css`
      display: block;
      padding: 32px;
      color: ${style.hsl("neutral", 48)};
    `}
`

const BioListContent = (props) => {
  if (props.item) {
    return <BioList type={props.type}>{props.children}</BioList>
  } else {
    return null
  }
}

const Bio = (props) => {
  const { data } = props

  function getCreatedYear(date) {
    const year = new Date(date).getFullYear()
    return year
  }

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
        <BioListContent item={data.blog}>
          <h3>Website</h3>
          <p>{data.blog}</p>
        </BioListContent>
        <BioListContent item={data.email}>
          <h3>Email</h3>
          <p>{data.email}</p>
        </BioListContent>
        <BioListContent item={data.twitter_username}>
          <h3>Twitter</h3>
          <p>{data.twitter_username}</p>
        </BioListContent>
        <BioListContent item={data.following}>
          <h3>Following</h3>
          <p>{data.following}</p>
        </BioListContent>
        <BioListContent item={data.followers}>
          <h3>Followers</h3>
          <p>{data.followers}</p>
        </BioListContent>
        <BioListContent type="footer" item={data.created_at}>
          <p>GitHub member since {getCreatedYear(data.created_at)}</p>
        </BioListContent>
      </BioListWrapper>
    </Section>
  )
}

export default Bio
