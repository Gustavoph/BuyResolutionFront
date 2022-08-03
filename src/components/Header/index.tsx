import {
  Container,
  Content,
  Options,
  Option,
  Logo,
  Icons,
  Icon,
  MenuContainer,
} from './styles'

import { Link } from 'react-router-dom'

import LogoBeResolution from '../../assets/BeResolution.svg'

import { FiSearch, FiUser, FiShoppingBag } from 'react-icons/fi'
import Hamburger from 'hamburger-react'

interface OptionProps {
  router: string
  name: string
}

export function Header() {
  const options: OptionProps[] = [
    { router: '/market', name: 'Geral' },
    { router: '/market/foods', name: 'Comidas' },
    { router: '/market/drinks', name: 'Bebidas' },
  ]

  const List = options.map((option) => (
    <Link title={option.name} key={option.name} to={option.router}>
      <Option>{option.name}</Option>
    </Link>
  ))

  return (
    <Container>
      <Content>
        <Logo src={LogoBeResolution} />
        <Options>{List}</Options>
        <Icons>
          <Icon>
            <FiSearch />
          </Icon>
          <Icon>
            <FiUser />
          </Icon>
          <Icon>
            <FiShoppingBag />
          </Icon>
        </Icons>
        <MenuContainer>
          <Hamburger />
        </MenuContainer>
      </Content>
    </Container>
  )
}
