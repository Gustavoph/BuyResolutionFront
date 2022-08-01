import {
  Container,
  Content,
  ProductImage,
  Image,
  Informations,
  Name,
  Price,
} from './styles'

import { Cart } from './components/Cart'

interface ImagePath {
  image: string
}

export function Product({ image }: ImagePath) {
  return (
    <Container>
      <Content>
        <Image>
          <ProductImage src={image} />
        </Image>
        <Informations>
          <Name>Cerveja Heineken - Long Neck 330ml</Name>
          <Price>R$ 7,00</Price>
          <Cart />
        </Informations>
      </Content>
    </Container>
  )
}
