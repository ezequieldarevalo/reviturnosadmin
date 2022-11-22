import React from 'react'
import useUser from '../hooks/useUser'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import GoOut from './common/icons/GoOut'

const LogOutSectionContainer = styled.div`
  display:flex;
  align-items: center;
  height: 100%;
`

const LogOutSection = (): JSX.Element => {
  const { user, signOut, loading } = useUser()
  return (
    <LogOutSectionContainer>
      {user}
      <Button
        disabled={loading}
        style={{ marginLeft: '15px', fontSize: '13px', padding: '8px' }}
        variant={'danger'} onClick={() => signOut()}>
        SALIR
        &nbsp;
        <GoOut />
      </Button>
    </LogOutSectionContainer>
  )
}

export default LogOutSection
