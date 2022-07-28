import { Content, Title, SubTitle, Text, Image} from './styles';
import LogoBeResolution from '../../../../assets/BeResolution.svg'

export function Wellcome() {
  return(
      <Content>
        <Image src={LogoBeResolution}/>
        <Text>
          <Title>Bem-vindo de volta</Title>
          <SubTitle>Faça login na plataforma</SubTitle>
        </Text>
      </Content>
  )
}