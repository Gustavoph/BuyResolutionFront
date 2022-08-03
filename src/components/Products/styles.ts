import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 112rem;
  margin: 0 auto;
  width: 100%;
  @media (max-width: 70rem) {
    width: 80rem;
  }
  @media (max-width: 60rem) {
    width: 70rem;
  }
  @media (max-width: 50rem) {
    width: 60rem;
  }
  @media (max-width: 40rem) {
    width: 50rem;
    flex-direction: column;
  }
  @media (max-width: 35rem) {
    width: 40rem;
  }
`
