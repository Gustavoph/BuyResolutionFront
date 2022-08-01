import { Content, Title, SubTitle, Text, Logo } from './styles'

import LogoBeResolution from '../../../../assets/BeResolution.svg'

export function Wellcome() {
  return (
    <Content>
      <Logo src={LogoBeResolution} />
      <Text>
        <Title>Bem-vindo de volta</Title>
        <SubTitle>Faça login na plataforma</SubTitle>
      </Text>
    </Content>
  )
}
