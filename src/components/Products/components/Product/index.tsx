import {
  Container,
  Content,
  ProductImage,
  ImageContainer,
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
        <ImageContainer>
          <ProductImage src={image} alt={''} />
        </ImageContainer>
        <Informations>
          <Name>Cerveja Heineken - Long Neck 330ml</Name>
          <Price>R$ 7,00</Price>
          <Cart />
        </Informations>
      </Content>
    </Container>
  )
}
