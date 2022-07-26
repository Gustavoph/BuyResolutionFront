import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'
import { AppRoutes } from './routes'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
      <GlobalStyle />
    </ThemeProvider>
  )
}

