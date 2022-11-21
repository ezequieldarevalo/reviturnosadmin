import React from 'react'
import styled from 'styled-components'
import useUser from '../hooks/useUser'
import LogOutSection from '../components/LogOutSection'

const IndexHeader = styled.header`
  height: 60px;
  border-bottom: 1px solid black;
`

const IndexMain = styled.main`
  height: 600px;
`
const UserState = styled.div`
  position: relative;
  float: right;
  height: 100%;
  line-height: 50px;
`

const Home = (): JSX.Element => {
    const { user } = useUser()
    return (
        <>
            <IndexHeader>
                <UserState>
                    {user ? <LogOutSection /> : 'User'}
                </UserState>
            </IndexHeader>
            <IndexMain>

            </IndexMain>
        </>
    )
}

export default Home
