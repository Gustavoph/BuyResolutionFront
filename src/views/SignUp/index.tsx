import {
  Container,
  Content,
  Input,
  SignOutButton,
  InputsContainer,
  Title,
  Icon,
  Top,
} from './styles'

import { Link } from 'react-router-dom'

import { FiArrowLeft } from 'react-icons/fi'

export function SignUp() {
  return (
    <Container>
      <Content>
        <Top>
          <Link to={'/login'} title={'Voltar'}>
            <Icon>
              <FiArrowLeft />
            </Icon>
          </Link>
          <Title>Formulário de Cadastro</Title>
        </Top>
        <InputsContainer>
          <Input placeholder="Nome" type={'text'} />
          <Input placeholder="Email" type={'email'} />
          <Input placeholder="Senha" type={'password'} />
          <Input placeholder="Confirmar Senha" type={'password'} />
        </InputsContainer>
        <Link title={'Cadastrar-se'} to={'/login'}>
          <SignOutButton>Cadastrar-se</SignOutButton>
        </Link>
      </Content>
    </Container>
  )
}
