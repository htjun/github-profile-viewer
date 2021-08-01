import React, { useState } from "react"
import { useRouter } from "next/router"
import Head from 'next/head'
import Image from 'next/image'
import styled, { css } from 'styled-components'

const TextInput = styled.input`
  border: 1px solid #ccc;
`

export default function Home() {
  const router = useRouter()
  const [userId, setUserId] = useState('')

  const viewClickHandler = (e) => {
    e.preventDefault()
    router.push(`/${userId}`)
  }
  return (
    <>
      <section>
        Enter Github username:
        <TextInput type="text" value={userId} onChange={e => setUserId(e.target.value)}  />
        <button onClick={viewClickHandler}>View</button>
      </section>
    </>
  )
}
