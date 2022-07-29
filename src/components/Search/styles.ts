import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 9.5rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 112rem;
  margin: 0 auto;
`;

export const InputSearch = styled.input`
  width: 74rem;
  height: 3rem;
  border: ${({theme}) => theme.border.type};
  border-radius: 0.8rem;
`;

export const Buttons = styled.div`
  padding: 1rem;
`;

export const Button = styled.button`
  width: 10rem;
  height: 3rem;
  margin-left: 1rem;
  border: ${({theme}) => theme.border.type};
  border-radius: 1.2rem;
`;