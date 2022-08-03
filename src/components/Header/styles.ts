import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 5rem;
  display: flex;
  align-self: flex-start;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 112rem;
  margin: 0 auto;
  width: 100%;
  @media (max-width: 75rem) {
    max-width: 80rem;
  }
  @media (max-width: 60rem) {
    max-width: 70rem;
  }
  @media (max-width: 50rem) {
    max-width: 60rem;
  }
  @media (max-width: 40rem) {
    max-width: 50rem;
  }
  @media (max-width: 35rem) {
    max-width: 40rem;
  }
`

export const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18rem;
  a {
    text-decoration: none;
  }
  @media (max-width: 50rem) {
    display: none;
  }
`

export const Option = styled.p`
  font-size: 1.5rem;
  padding: 1rem;
  color: #fff;
  cursor: pointer;
  :hover {
    filter: brightness(0.7);
  }
`

export const Logo = styled.img`
  width: 18rem;
  margin: 0;
  padding-left: 1rem;
`

export const Icons = styled.div`
  display: flex;
  width: 18rem;
  font-size: 2rem;
  color: white;
  @media (max-width: 50rem) {
    display: none;
  }
`

export const Icon = styled.div`
  padding: 1rem;
  cursor: pointer;
  :hover {
    color: gray;
  }
`

export const MenuContainer = styled.div`
  color: #fff;
  padding: 0rem 1rem;
  @media (min-width: 50rem) {
    display: none;
  }
`
