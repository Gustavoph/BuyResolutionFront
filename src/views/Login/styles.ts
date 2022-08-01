import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 112rem;
  margin: 0 auto;
  width: 100%;
`
