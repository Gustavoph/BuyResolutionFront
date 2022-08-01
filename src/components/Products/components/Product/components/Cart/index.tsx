import { Container, Content, Text, Counter, Amount, Icon } from './styles'

import { FiShoppingCart } from 'react-icons/fi'
import { useState } from 'react'

export function Cart() {
  const [counter, setCounter] = useState(0)

  return (
    <Container>
      <Content>
        <Counter onClick={() => setCounter(counter + 1)}>
          <Icon>
            <FiShoppingCart />
          </Icon>
          <Amount>{counter}</Amount>
        </Counter>
        <Text>ADICIONAR AO CARRINHO</Text>
      </Content>
    </Container>
  )
}
