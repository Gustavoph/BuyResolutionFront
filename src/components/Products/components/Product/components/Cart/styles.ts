import styled from 'styled-components';

export const Container = styled.div`
  width: 20rem;
  padding-top: 1.3rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  background-color: #00281A;
  height: 3rem;
`;

export const Text = styled.span`
  padding-left: 1rem;
  font-size: 1rem;
  color: #fff;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  width: 6rem;
  height: 100%;
  border-radius: 0.5rem 0 0 0.5rem;
  background-color: ${({theme})=> theme.colors.primary};
  cursor: pointer;
`;

export const Amount = styled.span`
  font-size: 1.4rem;
  color: #fff;
`;

export const Icon = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
  font-size: 1.5rem;
  color: #fff;
`;