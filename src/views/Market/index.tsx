import { Container, Content } from './styles'

import { Header } from '../../components/Header/Header'
import { Products } from '../../components/Products'
import { Search } from '../../components/Search';

interface TypeOfProducts{
  food: boolean,
  drink: boolean
}

export function Market({food, drink}: TypeOfProducts){
  return (
    <Container>
      <Content>
        <Header/>
        <Search/>
        <Products food={food} drink={drink}/>
      </Content>
    </Container>
  )
}