import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding-top: 1.3rem;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  background-color: #00281a;
  width: 100%;
  cursor: pointer;
  height: 3rem;
`
export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

export const Text = styled.span`
  font-size: 1rem;
  padding: 0rem 1rem;
  color: #fff;
  user-select: none;
  @media (max-width: 50rem) {
    font-size: 0.9rem;
    padding: 0rem 3rem;
  }
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  width: 6rem;
  height: 100%;
  border-radius: 0.5rem 0 0 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const Amount = styled.span`
  font-size: 1.4rem;
  color: #fff;
  user-select: none;
  @media (max-width: 50rem) {
    font-size: 1.3rem;
  }
`

export const Icon = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
  padding-top: 0.32rem;
  font-size: 1.4rem;
  color: #fff;
`
