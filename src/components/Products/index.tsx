import { Container, Content } from './styles'

import { Product } from './components/Product'

import Cerveja from '../../assets/Cerveja.png'
import Comida from '../../assets/Comida.png'

interface TypeOfProducts {
  food: boolean
  drink: boolean
}

function returnImagePath({ food, drink }: TypeOfProducts): string {
  if (food && !drink) return Comida
  else return Cerveja
}

export function Products({ food, drink }: TypeOfProducts) {
  const imagePath = returnImagePath({ food, drink })

  return (
    <Container>
      <Content>
        <Product image={imagePath} />
        <Product image={imagePath} />
        <Product image={imagePath} />
        <Product image={imagePath} />
        <Product image={imagePath} />
        <Product image={imagePath} />
        <Product image={imagePath} />
        <Product image={imagePath} />
        <Product image={imagePath} />
        <Product image={imagePath} />
        <Product image={imagePath} />
        <Product image={imagePath} />
      </Content>
    </Container>
  )
}
