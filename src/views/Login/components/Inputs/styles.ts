import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 41.5rem;
  height: 39.7rem;
  border-radius: ${({theme}) => theme.border.radius};
  background-color: ${({theme}) => theme.colors.secondary};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
  padding: 8.6rem 5rem;
`;

export const SignIn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignOut = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: ${({theme}) => theme.inputSize.md.width};
  height: ${({theme}) => theme.inputSize.md.height};
  margin-bottom: 2rem;
  border: ${({theme}) => theme.border.type};
  border-radius: ${({theme}) => theme.border.radius};
  outline: none;
`;

export const ButtonSignIn = styled.button`
  width: ${({theme}) => theme.inputSize.md.width};
  height: ${({theme}) => theme.inputSize.md.height};
  border: ${({theme}) => theme.border.type};
  border-radius: ${({theme}) => theme.border.radius};
  color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.colors.tertiary};
  :hover{
    filter: brightness(0.7);
  }
`;

export const ButtonSignOut = styled.button`
  width: ${({theme}) => theme.inputSize.md.width};
  height: ${({theme}) => theme.inputSize.md.height};
  border: ${({theme}) => theme.border.type};
  border-radius: ${({theme}) => theme.border.radius};
  color: ${({theme}) => theme.colors.black};
  background-color: ${({theme}) => theme.colors.white};
  :hover{
    filter: brightness(0.7);
  }
`;

export const Division = styled.div`
  display: flex;
  align-items: center;
  width: ${({theme}) => theme.inputSize.md.width};
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #fff;
  ::before{
    content: "";
    width: 100%;
    border-top: 1px solid #fff;
    margin-right: 0.5rem;
  }
  ::after{
    content: "";
    width: 100%;
    border-top: 1px solid #fff;
    margin-left: 0.5rem;
  }
`;
