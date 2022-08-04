import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 112rem;
  margin: 0 auto;
  @media (max-width: 45rem) {
    flex-direction: column;
  }
`
