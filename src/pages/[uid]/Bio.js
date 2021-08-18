import styled, { css } from "styled-components"
import * as style from "/styles/style"
import { Section } from "/styles/styled-elements"
import CoolLink from "/src/components/CoolLink"
import IconGitHub from "/src/assets/icons-general/icon_github.svg"

const BioListWrapper = styled.ul``

const BioList = styled.li`
  padding: 20px 24px;
  border-bottom: 1px solid ${style.hsl("grey", 96)};
  font-size: ${style.fontSize.sm};
  color: ${style.hsl("neutral", 16)};
  word-wrap: anywhere;

  &:last-of-type {
    border-bottom: none;
  }

  ${(props) =>
    !props.type &&
    css`
      display: flex;

      h3 {
        width: 100px;
        flex-shrink: 0;
        flex-grow: 0;
        font-weight: ${style.fontWeight.semibold};
        color: ${style.hsl("neutral", 64)};
      }

      p {
        flex-grow: 1;
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
      padding: 24px;

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
          line-height: ${style.textLineHeight.tight};
          color: ${style.hsl("neutral", 12)};
          margin: 4px 0;
        }

        p {
          font-size: ${style.fontSize.sm};
          line-height: ${style.textLineHeight.tight};
          color: ${style.hsl("neutral", 48)};
          display: flex;
          align-items: center;

          svg.github {
            width: 14px;
            height: 14px;
            fill: ${style.hsl("neutral", 64)};
            margin-right: 6px;
          }
        }
      }
    `}

    ${(props) =>
    props.type === "footer" &&
    css`
      display: block;
      padding: 24px;
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

  function numberFormatter(number) {
    const formattedNumber = number ? number.toLocaleString("en-US") : number
    return formattedNumber
  }

  return (
    <Section className="section-bio">
      <BioListWrapper>
        <BioList type="header">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={data.avatar_url} alt="Profile picture" className="avatar" />
          <div className="name-and-id">
            <h1>{data.name}</h1>
            <p>
              <CoolLink href={data.html_url} target="_blank">
                <IconGitHub className="github" />
                {data.login}
              </CoolLink>
            </p>
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
          <CoolLink href={data.blog} target="_blank">
            {data.blog}
          </CoolLink>
        </BioListContent>
        <BioListContent item={data.email}>
          <h3>Email</h3>
          <p>{data.email}</p>
        </BioListContent>
        <BioListContent item={data.twitter_username}>
          <h3>Twitter</h3>
          <CoolLink
            href={`https://twitter.com/${data.twitter_username}`}
            target="_blank"
          >
            @{data.twitter_username}
          </CoolLink>
        </BioListContent>
        <BioListContent item={data.following}>
          <h3>Following</h3>
          <p>{numberFormatter(data.following)}</p>
        </BioListContent>
        <BioListContent item={data.followers}>
          <h3>Followers</h3>
          <p>{numberFormatter(data.followers)}</p>
        </BioListContent>
        <BioListContent item={data.public_repos}>
          <h3>Repos</h3>
          <p>{numberFormatter(data.public_repos)}</p>
        </BioListContent>
        <BioListContent item={data.public_gists}>
          <h3>Gists</h3>
          <p>{numberFormatter(data.public_gists)}</p>
        </BioListContent>
        <BioListContent type="footer" item={data.created_at}>
          <p>GitHub member since {getCreatedYear(data.created_at)}</p>
        </BioListContent>
      </BioListWrapper>
    </Section>
  )
}

export default Bio
