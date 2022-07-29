import styled from 'styled-components';

export const Container = styled.div`
  width: 23rem;
  height: 23.7rem;
  padding: 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 2em black;
`;

export const ProductImage = styled.img``;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  height: 13.7rem;
  border-radius: 0.5rem 0.5rem 0 0;
  background-color: #fff;
`;

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 10rem;
  padding-left: 1.5rem;
  border-radius: 0 0 0.5rem 0.5rem;
  background-color: ${({theme})=>theme.colors.tertiary};
`;

export const Name = styled.span`
  font-size: 1rem;
  color: #fff;
`;

export const Price = styled.span`
  font-size: 1.2rem;
  color: #fff;
`;

