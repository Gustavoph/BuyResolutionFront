import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: 3.5rem 0rem 4.5rem 0rem;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: 112rem;
  margin: 0 auto;
  width: 100%;
  padding: 0rem 1rem;
  @media (max-width: 75rem) {
    width: 80rem;
    justify-content: center;
    flex-direction: column;
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

export const InputSearch = styled.input`
  width: 74rem;
  height: 3rem;
  border: ${({ theme }) => theme.border.type};
  border-radius: 0.8rem;
  padding: 0.4rem 1rem;
  @media (max-width: 75rem) {
    width: 76rem;
    justify-content: center;
    flex-direction: column;
  }
  @media (max-width: 60rem) {
    width: 66rem;
  }
  @media (max-width: 50rem) {
    width: 56rem;
  }
  @media (max-width: 40rem) {
    width: 46rem;
  }
  @media (max-width: 35rem) {
    width: 36rem;
  }
`

export const Buttons = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  @media (min-width: 75rem) {
    padding-left: 4rem;
  }
  @media (max-width: 75rem) {
    width: 100%;
    margin-top: 1rem;
    justify-content: space-between;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14rem;
  height: 3.7rem;
  padding: 0.4rem 1.2rem;
  border: ${({ theme }) => theme.border.type};
  border-radius: 0.8rem;
  margin-left: 1rem;
  cursor: pointer;
  @media (max-width: 75rem) {
    margin-left: 1rem;
    margin-right: 1rem;
    width: 100%;
    justify-content: center;
    flex-direction: column;
  }
`
export const ButtonTitle = styled.span`
  margin-right: 1rem;
`
