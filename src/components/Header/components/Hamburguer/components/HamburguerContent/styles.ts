import styled from 'styled-components'

export const Container = styled.div`
  border-top: 0.2rem solid gray;
  padding: 0;
  position: absolute;
  width: 20rem;
  right: 0;
  min-height: 100vh;
  background-color: ${({theme})=> theme.colors.primary};
`

export const Content = styled.div`
  margin-top: 2rem;
`

export const Topics = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`

export const Topic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover{
    filter: brightness(0.8);
  }
`

export const TopicTitle = styled.span`
  font-size: 2rem;
  padding: 1rem;
`

export const Icon = styled.div`
  font-size: 2rem;  
  padding: 1rem;
  cursor: pointer;
  :hover {
    color: gray;
  }
`