import { Container, Content, Options, Option, Logo } from './styles'

import { Link } from 'react-router-dom'

import LogoBeResolution from '../../assets/BeResolution.svg'
import { Icons } from './components/Icons'

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
        <Icons />
      </Content>
    </Container>
  )
}
