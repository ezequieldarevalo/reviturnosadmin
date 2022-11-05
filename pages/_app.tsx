import React, { useState } from 'react'
import '../styles/globals.css'
import App from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import { useApollo, initializeApollo } from '../lib/apollo'
import spanishMessages from '../public/messages/es-AR.json'
import type { AppProps } from 'next/app'
import { NormalizedCacheObject } from '@apollo/client'
import { UserProvider } from '../contexts/UserContext'
import { I18nProvider, IMessages } from 'contexts/I18n'
import initialMessages from '../public/messages/es-AR.json'

interface II18nStateProps {
  initialLang: string
  initialMessages: IMessages
  children: any
}

function I18nState ({
  initialLang,
  initialMessages,
  children
}: II18nStateProps): JSX.Element {
  const [lang] = useState(initialLang)
  const [messages] = useState(initialMessages)

  return (
    <I18nProvider lang={lang} messages={messages}>
      {children}
    </I18nProvider>
  )
}

interface IProps extends AppProps {
  initialLang: string
  initialMessages: IMessages
}

interface IProps extends AppProps {
  initialLang: string
  // initialMessages: IMessages;
  initialApolloState: NormalizedCacheObject
}

function MyApp ({
  Component,
  pageProps,
  initialLang,
  // initialMessages,
  initialApolloState
}: IProps): JSX.Element {
  const apolloClient = useApollo(initialApolloState)

  return (
    <ApolloProvider client={apolloClient as any}>
      <I18nState initialLang={initialLang} initialMessages={initialMessages}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
      </I18nState>
    </ApolloProvider>
  )
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext)
  const initialLang = 'es-AR'
  const apolloClient = initializeApollo()
  return {
    initialLang,
    initialMessages: spanishMessages,
    initialApolloState: apolloClient.cache.extract(),
    ...appProps
  }
}

export default MyApp
