import { useEffect, useState } from "react"

const GITHUB_PROFILE_BASE_URI = "https://api.github.com/users/"
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
    } else {
      requestUserProfile()
    }
    async function requestUserProfile() {
      setUserProfile([])
      setStatus("loading")
      localCache[uid] = {}

      await fetch(`${GITHUB_PROFILE_BASE_URI}${uid}`)
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
          requestUserRepos(repos_url)
        })
        .catch((error) => {
          setStatus("error")
          console.log(error)
        })
    }

    async function requestUserRepos(url) {
      const repos = await fetch(url)
        .then((response) => {
          if (response.ok) {
            setStatus("loaded")
          } else {
            setStatus("error")
          }
          return response.json()
        })
        .then((repos) => {
          setUserRepos(repos)
        })
        .catch((error) => {
          setStatus("error")
          console.log(error)
        })
    }
  }, [uid])

  return [userProfile, userRepos, status]
}
