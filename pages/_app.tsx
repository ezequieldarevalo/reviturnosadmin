import "../styles/globals.css";
import App from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import { useApollo, initializeApollo } from "../lib/apollo";
import spanishMessages from "../public/messages/es-AR.json";
import type { AppProps } from 'next/app';
import {
  NormalizedCacheObject,
} from '@apollo/client';
import {UserProvider} from '../contexts/UserContext'

interface IProps extends AppProps {
  initialLang: string;
  // initialMessages: IMessages;
  initialApolloState: NormalizedCacheObject;
}

function MyApp({
  Component,
  pageProps,
  initialLang,
  // initialMessages,
  initialApolloState,
}: IProps): JSX.Element {
  const apolloClient = useApollo(initialApolloState);

  return (
    <ApolloProvider client={apolloClient as any}>
      {/* <I18nProvider lang={initialLang} messages={initialMessages}> */}
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      {/* </I18nProvider> */}
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async (appContext:any) => {
  const appProps = await App.getInitialProps(appContext);
  const initialLang = "es-AR";
  const apolloClient = initializeApollo()
  return {
    initialLang,
    initialMessages: spanishMessages,
    initialApolloState: apolloClient.cache.extract(),
    ...appProps,
  };
};

export default MyApp;
