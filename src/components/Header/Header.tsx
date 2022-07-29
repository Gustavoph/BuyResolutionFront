import { Container, Content, Options, Option, Logo, Icons, Icon } from './styles'

import LogoBeResolution from '../../assets/BeResolution.svg'

import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";

export function Header() {
  const options = ["Geral", "Comidas", "Bebidas"];
  
  const List = options.map(option => (
    <Option>{option}</Option>
  ));

  return(
    <Container>
      <Content>
        <Logo src={LogoBeResolution}/>
        <Options>
          {List}
        </Options>
        <Icons>
          <Icon><FiSearch/></Icon>
          <Icon><FiUser/></Icon>
          <Icon><FiShoppingBag/></Icon>
        </Icons>
      </Content>
    </Container>
  )
}