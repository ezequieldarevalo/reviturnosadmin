import React from 'react'
import useUser from '../hooks/useUser'
import styled from 'styled-components'

const LogOutSectionContainer = styled.div`
  display:flex;
  align-items: center;
  height: 100%;
`

const StyledButton = styled.button`
  cursor: pointer;
  border: 1px solid grey;
  background: #e6e8eb;
  padding:8px;
  margin-left: 7px;
  border-radius: 5px;
`

const LogOutSection = (): JSX.Element => {
  const { user, signOut } = useUser()
  return (
    <LogOutSectionContainer>
      {user}
      <StyledButton onClick={() => signOut()} type="button">
        Salir
      </StyledButton>
    </LogOutSectionContainer>
  )
}

export default LogOutSection
