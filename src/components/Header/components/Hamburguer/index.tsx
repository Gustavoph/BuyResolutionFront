import Hamburger from 'hamburger-react'
import { useState } from 'react'

import { Container, Content } from './styles'

import { HamburguerContent } from './components/HamburguerContent'

export function HamburguerComponent() {
  const [isOpen, setOpen] = useState(false)
  return (
    <Container>
      <Content>
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {isOpen ? <HamburguerContent /> : null}
      </Content>
    </Container>
  )
}
