import { Container, Content } from './styles';

import { Wellcome } from './components/Wellcome/Wellcome';
import { Inputs } from './components/Inputs/Inputs';

export function Login() {
  return (
    <Container>
      <Content>
        <Wellcome/>
        <Inputs/>
      </Content>
    </Container>
  )
}