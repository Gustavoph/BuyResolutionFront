import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.border.radius};
  background-color: ${({ theme }) => theme.colors.secondary};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 5rem 5rem;
`

export const LogIn = styled.div`
  display: flex;
  flex-direction: column;
`

export const SignUp = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  width: ${({ theme }) => theme.inputSize.md.width};
  height: ${({ theme }) => theme.inputSize.md.height};
  margin-bottom: 2rem;
  padding: 0.4rem 1.2rem;
  border: ${({ theme }) => theme.border.type};
  border-radius: ${({ theme }) => theme.border.radius};
  outline: none;
`

export const LogInButton = styled.button`
  width: 100%;
  height: ${({ theme }) => theme.inputSize.md.height};
  border: ${({ theme }) => theme.border.type};
  border-radius: ${({ theme }) => theme.border.radius};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.tertiary};
  cursor: pointer;
  :hover {
    filter: brightness(0.7);
  }
`

export const SignUpButton = styled.button`
  width: 100%;
  height: ${({ theme }) => theme.inputSize.md.height};
  border: ${({ theme }) => theme.border.type};
  border-radius: ${({ theme }) => theme.border.radius};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  :hover {
    filter: brightness(0.7);
  }
`

export const Division = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #fff;
  ::before {
    content: '';
    width: 100%;
    border-top: 1px solid #fff;
    margin-right: 0.5rem;
  }
  ::after {
    content: '';
    width: 100%;
    border-top: 1px solid #fff;
    margin-left: 0.5rem;
  }
`
