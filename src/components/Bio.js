import CoolLink from "/src/components/CoolLink"
import IconGitHub from "/src/assets/icons-general/icon_github.svg"
import { BioListWrapper, BioList, BioAvatar, BioSkeleton } from "../styles/Bio.styled"

const ConditionalBioList = (props) => {
  if (props.item) {
    return <BioList type={props.type}>{props.children}</BioList>
  } else {
    return null
  }
}

const Bio = (props) => {
  const { data, isLoading } = props

  function getCreatedYear(date) {
    const year = new Date(date).getFullYear()
    return year
  }

  function numberFormatter(number) {
    const formattedNumber = number ? number.toLocaleString("en-US") : number
    return formattedNumber
  }

  return (
    <>
      {
        {
          true: <BioSkeleton />,
          false: (
            <BioListWrapper
              isWebsite={data.blog ? true : false}
              isEmail={data.email ? true : false}
            >
              <BioList type="header">
                <BioAvatar item={data.avatar_url}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={data.avatar_url}
                    alt="Profile picture"
                    className="avatar"
                  />
                </BioAvatar>
                <div className="identifier">
                  <h1>{data.name}</h1>
                  <div className="username">
                    <CoolLink href={data.html_url} target="_blank">
                      <IconGitHub className="github" />
                      {data.login}
                    </CoolLink>
                  </div>
                </div>
              </BioList>
              <ConditionalBioList type="single-col" item={data.bio}>
                <p>{data.bio}</p>
              </ConditionalBioList>
              <ConditionalBioList item={data.location}>
                <h3>Location</h3>
                <p>{data.location}</p>
              </ConditionalBioList>
              <ConditionalBioList item={data.company}>
                <h3>Company</h3>
                <p>{data.company}</p>
              </ConditionalBioList>
              <ConditionalBioList item={data.blog}>
                <h3>Website</h3>
                <CoolLink href={data.blog} target="_blank">
                  {data.blog}
                </CoolLink>
              </ConditionalBioList>
              <ConditionalBioList item={data.email}>
                <h3>Email</h3>
                <p>{data.email}</p>
              </ConditionalBioList>
              <ConditionalBioList item={data.twitter_username}>
                <h3>Twitter</h3>
                <CoolLink
                  href={`https://twitter.com/${data.twitter_username}`}
                  target="_blank"
                >
                  @{data.twitter_username}
                </CoolLink>
              </ConditionalBioList>
              <BioList>
                <h3>Following</h3>
                <p>{numberFormatter(data.following)}</p>
              </BioList>
              <BioList>
                <h3>Followers</h3>
                <p>{numberFormatter(data.followers)}</p>
              </BioList>
              <BioList>
                <h3>Repos</h3>
                <p>{numberFormatter(data.public_repos)}</p>
              </BioList>
              <BioList>
                <h3>Gists</h3>
                <p>{numberFormatter(data.public_gists)}</p>
              </BioList>
              <BioList type="footer">
                <p>GitHub member since {getCreatedYear(data.created_at)}</p>
              </BioList>
            </BioListWrapper>
          ),
        }[isLoading]
      }
    </>
  )
}

export default Bio
