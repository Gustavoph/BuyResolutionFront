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
  align-items: center;
  margin: 0 auto;
  max-width: 112rem;
  width: 100%;
  @media (max-width: 75rem) {
    max-width: 80rem;
  }
  @media (max-width: 60rem) {
    max-width: 70rem;
  }
  @media (max-width: 50rem) {
    max-width: 60rem;
  }
  @media (max-width: 40rem) {
    max-width: 50rem;
    flex-direction: column;
  }
  @media (max-width: 35rem) {
    max-width: 40rem;
  }
`
