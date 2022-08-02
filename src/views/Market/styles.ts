import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 112rem;
  width: 100%;
`
