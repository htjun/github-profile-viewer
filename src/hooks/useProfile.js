import React, { useEffect, useState } from "react"

const GITHUB_PROFILE_BASE_URI = "https://api.github.com/users/"
const localCache = {}

export default function useProfile(uid) {
  const [userProfile, setUserProfile] = useState([])
  const [status, setStatus] = useState("unloaded")

  useEffect(() => {
    if (!uid) {
      setUserProfile([])
    } else if (localCache[uid]) {
      setUserProfile(localCache[uid])
    } else {
      requestUserProfile()
    }
    async function requestUserProfile() {
      setUserProfile([])
      setStatus("loading")

      const response = await fetch(`${GITHUB_PROFILE_BASE_URI}${uid}`)
        .then((response) => {
          if (response.ok) {
            setStatus("loaded")
          } else {
            setStatus("error")
          }
          return response
        })
        .catch((error) => {
          setStatus("error")
          console.log(error)
        })
      const json = await response.json()
      localCache[uid] = json || []
      setUserProfile(localCache[uid])
    }
  }, [uid])
  return [userProfile, status]
}
