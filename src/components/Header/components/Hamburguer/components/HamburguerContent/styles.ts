import styled from 'styled-components'

export const Container = styled.div`
  border-top: 0.2rem solid gray;
  padding: 0;
  position: absolute;
  width: 20rem;
  right: 0;
  min-height: 50vh;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const Content = styled.div`
  margin-top: 2rem;
`

export const Topics = styled.div`
  a {
    text-decoration: none;
  }
`

export const Topic = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    filter: brightness(0.8);
  }
`

export const TopicTitle = styled.span`
  font-size: 2rem;
  padding: 1rem;
  color: #fff;
`

export const Icon = styled.div`
  font-size: 2rem;
  cursor: pointer;
  :hover {
    color: gray;
  }
`
