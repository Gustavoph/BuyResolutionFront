import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-self: flex-start;
  width: 100%;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 112rem;
  margin: 0 auto;
  width: 100%;
`;

export const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18rem;
`;

export const Option = styled.p`
  font-size: 1.5rem;
  padding: 1rem;
  color: #fff;
  cursor: pointer;
  :hover{
    filter: brightness(0.7);
  }
`;

export const Logo = styled.img`
  width: 18rem;
  margin: 0;
  padding: 0;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  width: 18rem;
  font-size: 2rem;
  color: white;
`;

export const Icon = styled.div`
  padding: 1rem;
  cursor: pointer;
  :hover{
    color: gray
  }
`;