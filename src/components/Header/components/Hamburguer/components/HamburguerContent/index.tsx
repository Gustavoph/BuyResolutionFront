import { Container, Content, Topics, Topic, TopicTitle, Icon } from './styles'
import { FiSearch, FiUser, FiShoppingBag } from 'react-icons/fi'

export function HamburguerContent() { 
  return (
    <Container>
      <Content>
        <Topics>
          <Topic>
            <TopicTitle>Geral</TopicTitle>
          </Topic>
          <Topic>
            <TopicTitle>Comida</TopicTitle>
          </Topic>
          <Topic>
            <TopicTitle>Bebida</TopicTitle>
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