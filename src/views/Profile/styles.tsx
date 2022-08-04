import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 112rem;
  width: 100%;
  height: 100%;
`
export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 100%;
  width: 30rem;
  border-bottom: 0.1rem solid gray;
  padding-left: 1rem;
`

export const Identifier = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  padding-left: 2rem;
`

export const ProfileImage = styled.img`
  width: 10rem;
  height: 10rem;
`

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
`
export const Name = styled.span`
  font-size: 2rem;
  color: #fff;
`
export const Company = styled.span`
  font-size: 1.3rem;
  color: #fff;
  padding-left: 1rem;
`

export const Informations = styled.ul`
  padding: 0;
  width: 100%;
`

export const Information = styled.li`
  display: flex;
  width: 100%;
  height: 3rem;
  color: white;
  font-size: 1.4rem;
  padding-left: 1rem;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #181818;
  }
`
