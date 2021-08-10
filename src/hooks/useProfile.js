import { useEffect, useState } from "react"

const GITHUB_PROFILE_BASE_URI = "https://api.github.com/users/"
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_GH_ACCESS_TOKEN
const localCache = {}

export default function useProfile(uid) {
  const [userProfile, setUserProfile] = useState([])
  const [userRepos, setUserRepos] = useState([])
  const [status, setStatus] = useState("unloaded")

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
      setStatus("loading")
      localCache[uid] = {}

      await fetch(`${GITHUB_PROFILE_BASE_URI}${uid}`, {
        method: "GET",
        headers: {
          Authorization: `token ${ACCESS_TOKEN}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            setStatus("loaded")
          } else {
            setStatus("error")
          }

          return response.json()
        })
        .then((profile) => {
          localCache[uid]["profile"] = profile || []
          setUserProfile(localCache[uid]["profile"])

          return profile.repos_url
        })
        .then((repos_url) => {
          requestUserRepos(`${repos_url}?per_page=100`)
        })
        .catch((error) => {
          setStatus("error")
          console.log(error)
        })
    }

    async function requestUserRepos(url) {
      const repos = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `token ${ACCESS_TOKEN}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            setStatus("loaded")
          } else {
            setStatus("error")
          }
          return response.json()
        })
        .then((repos) => {
          localCache[uid]["repos"] = repos || []
          setUserRepos(localCache[uid]["repos"])
        })
        .catch((error) => {
          setStatus("error")
          console.log(error)
        })
    }
  }, [uid])

  return [userProfile, userRepos, status]
}
