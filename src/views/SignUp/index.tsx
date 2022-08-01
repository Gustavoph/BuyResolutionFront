import {
  Container,
  Content,
  Input,
  SignOutButton,
  Inputs,
  Title,
  Division,
  Top,
} from './styles'

import { Link } from 'react-router-dom'

export function SignUp() {
  return (
    <Container>
      <Content>
        <Top>
          <Title>Formulário de Cadastro</Title>
          <Division />
        </Top>
        <Inputs>
          <Input placeholder="Nome" type={'text'} />
          <Input placeholder="Email" type={'email'} />
          <Input placeholder="Senha" type={'password'} />
          <Input placeholder="Confirmar Senha" type={'password'} />
        </Inputs>
        <Link title={'Cadastrar-se'} to={'/login'}>
          <SignOutButton>Cadastrar-se</SignOutButton>
        </Link>
      </Content>
    </Container>
  )
}
