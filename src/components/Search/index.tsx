import {
  Button,
  Buttons,
  Container,
  Content,
  InputSearch,
  ButtonTitle,
} from './styles'

import { FiChevronDown, FiFilter } from 'react-icons/fi'

export function Search() {
  return (
    <Container>
      <Content>
        <InputSearch placeholder="Pesquisar" />
        <Buttons>
          <Button>
            <ButtonTitle>Ordenar</ButtonTitle>
            <FiChevronDown />
          </Button>
          <Button>
            <ButtonTitle>Filtros</ButtonTitle>
            <FiFilter />
          </Button>
        </Buttons>
      </Content>
    </Container>
  )
}
