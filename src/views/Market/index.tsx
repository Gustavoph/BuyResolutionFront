import { Container, Content } from './styles'

import { Header } from '../../components/Header'
import { Products } from '../../components/Products'
import { Search } from '../../components/Search'

interface TypeOfProducts {
  food: boolean
  drink: boolean
}

export function Market({ food, drink }: TypeOfProducts) {
  return (
    <Container>
      <Header />
      <Content>
        <Search />
        <Products food={food} drink={drink} />
      </Content>
    </Container>
  )
}
