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
  flex-direction: column;
  align-items: center;
  max-width: 112rem;
  margin: 0 auto;
  width: 41.5rem;
  height: 40.7rem;
  border-radius: ${({ theme }) => theme.border.radius};
  background-color: ${({ theme }) => theme.colors.secondary};
`
export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Title = styled.h1`
  justify-self: center;
  padding: 0;
  color: ${({ theme }) => theme.colors.white};
`

export const Division = styled.div`
  width: 95%;
  border-top: 1px solid #a9a9a9;
  padding: 0;
`

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 1rem 1rem 1rem;
`

export const Input = styled.input`
  width: 100%;
  height: ${({ theme }) => theme.inputSize.md.height};
  margin-bottom: 2.4rem;
  border: ${({ theme }) => theme.border.type};
  border-radius: ${({ theme }) => theme.border.radius};
  outline: none;
`

export const SignOutButton = styled.button`
  width: ${({ theme }) => theme.inputSize.md.width};
  height: ${({ theme }) => theme.inputSize.md.height};
  border: ${({ theme }) => theme.border.type};
  border-radius: ${({ theme }) => theme.border.radius};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.tertiary};
  margin-bottom: 3.3rem;
  :hover {
    filter: brightness(0.7);
  }
`
