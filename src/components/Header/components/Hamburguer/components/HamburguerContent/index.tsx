import { Container, Content, Topics, Topic, TopicTitle, Icon } from './styles'
import { FiSearch, FiUser, FiShoppingBag } from 'react-icons/fi'

import { Link } from 'react-router-dom'

export function HamburguerContent() {
  return (
    <Container>
      <Content>
        <Topics>
          <Topic>
            <Link to={'/market'}>
              <TopicTitle>Geral</TopicTitle>
            </Link>
          </Topic>
          <Topic>
            <Link to={'/market/foods'}>
              <TopicTitle>Comida</TopicTitle>
            </Link>
          </Topic>
          <Topic>
            <Link to={'/market/drinks'}>
              <TopicTitle>Bebida</TopicTitle>
            </Link>
          </Topic>
          <Topic>
            <Icon>
              <FiSearch />
            </Icon>
          </Topic>
          <Topic>
            <Icon>
              <FiUser />
            </Icon>
          </Topic>
          <Topic>
            <Icon>
              <FiShoppingBag />
            </Icon>
          </Topic>
        </Topics>
      </Content>
    </Container>
  )
}
