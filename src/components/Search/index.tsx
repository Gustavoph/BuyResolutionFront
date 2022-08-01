import { Button, Buttons, Container, Content, InputSearch } from './styles'

export function Search() {
  return (
    <Container>
      <Content>
        <InputSearch placeholder="Pesquisar" />
        <Buttons>
          <Button>Ordenar</Button>
          <Button>Filtros</Button>
        </Buttons>
      </Content>
    </Container>
  )
}
