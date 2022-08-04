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
import { HamburguerComponent } from './components/Hamburguer/index'

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
            <Link to={'/profile'}>
              <FiUser />
            </Link>
          </Icon>
          <Icon>
            <Link to={'/market'}>
              <FiShoppingBag />
            </Link>
          </Icon>
        </Icons>
        <MenuContainer>
          <HamburguerComponent />
        </MenuContainer>
      </Content>
    </Container>
  )
}
