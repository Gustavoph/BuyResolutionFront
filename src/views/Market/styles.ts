import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.secondary};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
`
