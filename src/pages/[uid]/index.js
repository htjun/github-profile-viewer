import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import useProfile from "/src/hooks/useProfile"
import Head from "next/head"
import Image from "next/image"
import styled, { css } from "styled-components"

// const fetcher = (...args) => fetch(...args).then((res) => res.json())

// const getProfile = (uid) => {
//   const { data, error } = useSWR(GITHUB_PROFILE_BASE_URI + uid, fetcher)

//   return {
//     user: data,
//     isLoading: !error && !data,
//     isError: error
//   }
// }

const Page = () => {
  const router = useRouter()
  const { uid } = router.query
  const [userProfile, status] = useProfile(uid)
  console.log(userProfile)

  // const Profile = () => {
  //   const { data, error } = useSWR(GITHUB_PROFILE_BASE_URI + uid, fetcher)

  //   if (error) return <div>failed to load</div>
  //   if (!data) return <div>loading...</div>

  //   console.log(data)

  //   // render data
  //   return (
  //     <div>
  //       hello {data.name} from {data.location}!
  //     </div>
  //   )
  // }

  return (
    <>
      <section>
        <h1>{userProfile.name}</h1>
        <p>{status}</p>
      </section>
    </>
  )
}

export default Page
