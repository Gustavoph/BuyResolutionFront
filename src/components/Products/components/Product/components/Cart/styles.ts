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
  height: 3rem; 
`

export const Text = styled.span`
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #00281a;
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  width: 6rem;
  height: 100%;
  border-radius: 0.5rem 0 0 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`

export const Amount = styled.span`
  font-size: 1.4rem;
  color: #fff;
`

export const Icon = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
  font-size: 1.5rem;
  color: #fff;
`
