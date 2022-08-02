import { Container, Content } from './styles'

import { DropDown } from './components/DropDown'

export function Icons() {
  return (
    <Container>
      <Content>
        <DropDown icon="user" />
        <DropDown icon="market" />
        <DropDown icon="search" />
      </Content>
    </Container>
  )
}
