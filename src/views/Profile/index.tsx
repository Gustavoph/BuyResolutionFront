import {
  Container,
  Content,
  ProfileImage,
  UserProfile,
  Informations,
  Identifier,
  Information,
  NameContainer,
  Name,
  Company,
} from './styles'

import { Header } from '../../components/Header'
import profileIcon from '../../assets/profileIcon.png'

export function Profile() {
  return (
    <Container>
      <Header />
      <Content>
        <UserProfile>
          <Identifier>
            <ProfileImage src={profileIcon} />
            <NameContainer>
              <Name>User name</Name>
              <Company>Company name</Company>
            </NameContainer>
          </Identifier>
          <Informations>
            <Information>Historico</Information>
            <Information>Metodos de pagamentos</Information>
            <Information>Sair</Information>
          </Informations>
        </UserProfile>
      </Content>
    </Container>
  )
}
