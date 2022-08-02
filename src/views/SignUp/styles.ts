import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.border.radius};
  box-shadow: 0 0 0.5rem 0 #070707;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4.2rem;
`

export const Top = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
`

export const Icon = styled.div`
  position: absolute;
  left: 0rem;
  top: 0.25rem;
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
`

export const Input = styled.input`
  width: ${({ theme }) => theme.inputSize.md.width};
  height: ${({ theme }) => theme.inputSize.md.height};
  border: ${({ theme }) => theme.border.type};
  border-radius: ${({ theme }) => theme.border.radius};
  outline: none;
  padding: 0.4rem 1.2rem;
  margin-bottom: 2rem;
  :last-child {
    margin-bottom: 0;
  }
`

export const SignOutButton = styled.button`
  width: 100%;
  height: 4.2rem;
  border: ${({ theme }) => theme.border.type};
  border-radius: ${({ theme }) => theme.border.radius};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.tertiary};
  margin-top: 2rem;
  padding: 0.4rem 1.2rem;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  :hover {
    filter: brightness(0.7);
  }
`
