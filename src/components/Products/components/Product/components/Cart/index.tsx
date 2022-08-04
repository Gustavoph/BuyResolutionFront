import {
  Container,
  Content,
  Text,
  Counter,
  Amount,
  Icon,
  TextContainer,
} from './styles'

import { FiShoppingCart } from 'react-icons/fi'
import { useState } from 'react'

export function Cart() {
  const [counter, setCounter] = useState(0)

  return (
    <Container>
      <Content onClick={() => setCounter(counter + 1)}>
        <Counter>
          <Icon>
            <FiShoppingCart />
          </Icon>
          <Amount>{counter}</Amount>
        </Counter>
        <TextContainer>
          <Text>ADICIONAR AO CARRINHO</Text>
        </TextContainer>
      </Content>
    </Container>
  )
}
