import { createContext, ReactNode } from 'react';

export interface IMessages {
  [key: string]: string;
}

export interface II18nContextValue {
  lang: string;
  messages: IMessages;
}

export interface IChildren {
  children: ReactNode
}

type I18nProviderType = II18nContextValue & IChildren;

const I18nContext = createContext<II18nContextValue>({
  lang: 'es-AR',
  messages: {},
});

export function I18nProvider({
  lang,
  messages,
  children,
}:I18nProviderType): JSX.Element {
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <I18nContext.Provider value={{ lang, messages }}>
      {children}
    </I18nContext.Provider>
  );
}

export default I18nContext;