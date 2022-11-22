import React from 'react'
import styled from 'styled-components'
import LogOutSection from '../components/LogOutSection'
import AdminPage from './AdminPage'
import Brand from './Brand'
import AppName from './AppName'
import AdminPanel from './AdminPanel'
import { NavigationProvider } from '../contexts/NavigationContext'
import useNavigation from '../hooks/useNavigation'
import ParamPage from './ParamPage'

const HomeContainer = styled.div`
//font-family
`

const Top = styled.div`
  height: 70px;
  border-bottom: 1px solid #e6e8eb;
  padding-left: 30px;
  padding-right: 30px;
`

const IndexHeader = styled.header`
  border: 1px solid #e6e8eb;

`

const IndexMain = styled.main`
float: left;
  height: 600px;
`
const UserState = styled.div`
  position: relative;
  float: right;
  height: 100%;
  line-height: 50px;
`

const HomeWithoutNavProvider = (): JSX.Element => {
  const { activeSection } = useNavigation()
  return (
    <HomeContainer>
      <IndexHeader>
        <Top>
          <Brand />
          <AppName />
          <UserState>
            <LogOutSection />
          </UserState>
        </Top>
        <AdminPanel />
      </IndexHeader>
      <IndexMain>
        {activeSection === 'turnos' && <AdminPage />}
        {activeSection === 'parametros' && <ParamPage />}
      </IndexMain>
    </HomeContainer>
  )
}

const Home = (): JSX.Element => (<NavigationProvider>
  <HomeWithoutNavProvider />
</NavigationProvider>)

export default Home
