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
  box-shadow: 0 0 1em black;
  border-radius: ${({ theme }) => theme.border.radius};
  background-color: ${({ theme }) => theme.colors.secondary};
`
export const Top = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: ${({ theme }) => theme.inputSize.md.width};
  height:  ${({ theme }) => theme.inputSize.md.height};
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
`

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
  padding-left: 2rem;
`
export const Icon = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  :hover {
    color: gray;
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ theme }) => theme.inputSize.md.width};
`

export const Input = styled.input`
  width: ${({ theme }) => theme.inputSize.md.width};
  height: ${({ theme }) => theme.inputSize.md.height};
  border: ${({ theme }) => theme.border.type};
  border-radius: ${({ theme }) => theme.border.radius};
  outline: none;
  margin-bottom: 2.4rem;
  padding: 0%;
  :last-child{
    margin-bottom: 0;
  }
  ::placeholder{
    padding-left: 1rem;
  }
`

export const SignOutButton = styled.button`
  width: ${({ theme }) => theme.inputSize.md.width};
  height: ${({ theme }) => theme.inputSize.md.height};
  border: ${({ theme }) => theme.border.type};
  border-radius: ${({ theme }) => theme.border.radius};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.tertiary};
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
  padding: 0;
  cursor: pointer;
  :hover {
    filter: brightness(0.7);
  }
`
