import React from 'react'
import styled from 'styled-components'
import LogOutSection from '../components/LogOutSection'
import Brand from './Brand'
import AppName from './AppName'
import AdminPanel from './AdminPanel'
import useNavigation from '../hooks/useNavigation'
import Parameters from './Parameters'
import { QuotesProvider } from '../contexts/QuotesContext'
import { NavigationProvider } from '../contexts/NavigationContext'
import TodayQuotes from './TodayQuotes'
import FindQuotes from './FindQuotes'
import NewQuote from './NewQuote'

const HomeContainer = styled.div`
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
  height: 600px;
`
const UserState = styled.div`
  position: relative;
  float: right;
  height: 100%;
  line-height: 50px;
`

const HomeContent = (): JSX.Element => {
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
      <QuotesProvider>
        <IndexMain>
          {activeSection === 'todayQuotes' && <TodayQuotes />}
          {activeSection === 'findQuotes' && <FindQuotes />}
          {activeSection === 'newQuote' && <NewQuote />}
          {activeSection === 'parameters' && <Parameters />}
        </IndexMain>
      </QuotesProvider>
    </HomeContainer>
  )
}

const Home = (): JSX.Element => {
  return (
    <NavigationProvider>
      <HomeContent />
    </NavigationProvider>
  )
}

export default Home
