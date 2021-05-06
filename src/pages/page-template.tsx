import React, { ReactElement } from 'react'

import SEO from '@/components/SEO'
import { Container } from '@/styles/pages/Home'

export default function Home(): ReactElement {
  return (
    <Container>
      <SEO title="Home" description={'Olá eu sou a description'} />
      <h1>Olá</h1>
    </Container>
  )
}
