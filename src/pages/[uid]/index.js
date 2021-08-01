import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import useProfile from "/src/hooks/useProfile"
import Head from "next/head"
import Image from "next/image"
import styled, { css } from "styled-components"

const Page = () => {
  const router = useRouter()
  const { uid } = router.query
  const [userProfile, status] = useProfile(uid)
  console.log(userProfile)
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
