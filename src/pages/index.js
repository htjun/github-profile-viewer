import Head from 'next/head'
import Image from 'next/image'
import styled, { css } from 'styled-components'

const TextInput = styled.input`
  border: 1px solid #ccc;
`

export default function Home() {
  return (
    <>
      <section>
        Enter Github username:
        <TextInput type="text"  />
      </section>
    </>
  )
}
