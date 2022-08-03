import styled from 'styled-components'

export const Container = styled.div`
  padding: 0rem 1rem;
  margin: 3.5rem 0rem 4.5rem 0rem;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 112rem;
  margin: 0 auto;
  width: 100%;
  @media (max-width: 70rem) {
    justify-content: center;
    flex-direction: column;
  }
`

export const InputSearch = styled.input`
  width: 74rem;
  height: 3rem;
  border: ${({ theme }) => theme.border.type};
  border-radius: 0.8rem;
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
  }
  @media (max-width: 35rem) {
    width: 40rem;
  }
`

export const Buttons = styled.div`
  padding: 0rem 0rem 0rem 3.5rem;
  @media (max-width: 70rem) {
    display: flex;
    justify-content: center;
    padding: 0;
    margin-top: 2rem;
  }
`

export const Button = styled.button`
  width: 13rem;
  height: 3rem;
  margin-left: 1rem;
  border: ${({ theme }) => theme.border.type};
  border-radius: 1.2rem;
`
