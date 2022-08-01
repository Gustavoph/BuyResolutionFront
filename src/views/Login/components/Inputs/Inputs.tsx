import {
  Container,
  Content,
  LogIn,
  SignUp,
  Input,
  LogInButton,
  SignUpButton,
  Division,
} from './styles'

import { Link } from 'react-router-dom'

export function Inputs() {
  return (
    <Container>
      <Content>
        <LogIn>
          <Input placeholder="Email" type={'email'} />
          <Input placeholder="Senha" type={'password'} />
          <Link title={'Entrar'} to={'/market'}>
            <LogInButton>Entrar</LogInButton>
          </Link>
        </LogIn>
        <Division>Ou</Division>
        <SignUp>
          <Link title={'Criar Conta'} to={'/signup'}>
            <SignUpButton>Criar Conta</SignUpButton>
          </Link>
        </SignUp>
      </Content>
    </Container>
  )
}
