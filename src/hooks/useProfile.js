import { useEffect, useState } from "react"

const GITHUB_PROFILE_BASE_URI = "https://api.github.com/users/"
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_GH_ACCESS_TOKEN
const localCache = {}

export default function useProfile(uid) {
  const [userProfile, setUserProfile] = useState([])
  const [userRepos, setUserRepos] = useState([])
  const [status, setStatus] = useState({
    profileLoading: false,
    reposLoading: false,
    error: false
  })

  useEffect(() => {
    if (!uid) {
      setUserProfile([])
    } else if (localCache[uid]) {
      setUserProfile(localCache[uid]["profile"])
      setUserRepos(localCache[uid]["repos"])
    } else {
      requestUserProfile()
    }

    async function requestUserProfile() {
      setUserProfile([])
      localCache[uid] = {}

      setStatus(prevState => ({
          ...prevState,
          profileLoading: true,
          reposLoading: true
      }))

      await fetch(`${GITHUB_PROFILE_BASE_URI}${uid}`, {
        method: "GET",
        headers: {
          Authorization: `token ${ACCESS_TOKEN}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            setStatus(prevState => ({
                ...prevState,
                profileLoading: false,
                error: false
            }))
          } else {
            setStatus(prevState => ({
                ...prevState,
                error: true
            }))
          }

          return response.json()
        })
        .then((profile) => {
          localCache[uid]["profile"] = profile || []
          setUserProfile(localCache[uid]["profile"])

          return profile
        })
        .then((profile) => {
          const repoPages = Math.ceil(profile.public_repos / 100)
          requestUserRepos(profile.repos_url, repoPages)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    async function requestUserRepos(url, count) {
      const fetchResponses = []

      setStatus(prevState => ({
          ...prevState,
          reposLoading: true,
      }))

      for (let i = 0; i < count; i++) {
        fetchResponses[i] = await fetch(`${url}?per_page=100&page=${i + 1}`, {
          method: "GET",
          headers: {
            Authorization: `token ${ACCESS_TOKEN}`,
          },
        }).then((response) => {
          return response.json()
        })
      }

      Promise.all(fetchResponses.flat())
        .then((response) => {
          setStatus(prevState => ({
                ...prevState,
                reposLoading: false,
            }))
          return response
        })
        .then((repos) => {
          localCache[uid]["repos"] = repos || []
          setUserRepos(localCache[uid]["repos"])
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [uid])

  return [userProfile, userRepos, status]
}
