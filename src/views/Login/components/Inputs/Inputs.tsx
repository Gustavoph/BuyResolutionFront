import {
  Container,
  Content,
  SignIn,
  SignOut,
  Input,
  ButtonSignIn,
  ButtonSignOut,
  Division,
} from './styles'

export function Inputs() {
  return (
    <Container>
      <Content>
        <SignIn>
          <Input placeholder="Email" type={'email'} />
          <Input placeholder="Senha" type={'password'} />
          <ButtonSignIn>Entrar</ButtonSignIn>
        </SignIn>
        <Division>Ou</Division>
        <SignOut>
          <ButtonSignOut onClick={() => console.log('Criar Conta')}>
            Criar Conta
          </ButtonSignOut>
        </SignOut>
      </Content>
    </Container>
  )
}
