import React, { useState } from "react"
import { useRouter } from "next/router"
import styled from 'styled-components'

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
        <form onSubmit={viewClickHandler}>
          <TextInput type="text" value={userId} onChange={e => setUserId(e.target.value)}  />
          <input type="submit" value="Submit" />
        </form>
      </section>
    </>
  )
}
