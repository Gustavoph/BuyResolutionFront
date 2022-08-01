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

export function Inputs() {
  return (
    <Container>
      <Content>
        <LogIn>
          <Input placeholder="Email" type={'email'} />
          <Input placeholder="Senha" type={'password'} />
          <LogInButton>Entrar</LogInButton>
        </LogIn>
        <Division>Ou</Division>
        <SignUp>
          <SignUpButton onClick={() => console.log('Criar Conta')}>
            Criar Conta
          </SignUpButton>
        </SignUp>
      </Content>
    </Container>
  )
}
