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
`

export const InputSearch = styled.input`
  width: 74rem;
  height: 3rem;
  border: ${({ theme }) => theme.border.type};
  border-radius: 0.8rem;
  margin-left: 1rem;
`

export const Buttons = styled.div`
  padding: 0rem 1rem 0rem 3.5rem;
`

export const Button = styled.button`
  width: 13rem;
  height: 3rem;
  margin-left: 1rem;
  border: ${({ theme }) => theme.border.type};
  border-radius: 1.2rem;
`
