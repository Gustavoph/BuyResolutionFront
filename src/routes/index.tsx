import { Routes, Route } from 'react-router-dom'

import { Login } from '../views/Login'
import { Market } from '../views/Market'
import { SignUp } from '../views/SignUp'
import { Container } from './styles'

export function AppRoutes() {
  return (
    <Container>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/market/foods"
          element={<Market food={true} drink={false} />}
        />
        <Route
          path="/market/drinks"
          element={<Market food={false} drink={true} />}
        />
        <Route path="/market" element={<Market food={false} drink={true} />} />
      </Routes>
    </Container>
  )
}
