import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import useSWR from "swr"
import Head from "next/head"
import Image from "next/image"
import styled, { css } from "styled-components"

const GITHUB_PROFILE_BASE_URI = "https://api.github.com/users/"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Page = () => {
  const router = useRouter()
  const { uid } = router.query

  function Profile() {
    const { data, error } = useSWR(GITHUB_PROFILE_BASE_URI + uid, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    console.log(data)

    // render data
    return (
      <div>
        hello {data.name} from {data.location}!
      </div>
    )
  }

  return (
    <>
      <section>{Profile()}</section>
    </>
  )
}

export default Page
