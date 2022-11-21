import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { getToken, setToken, deleteToken } from '../helpers/ls-auth'
import doSignIn from '../lib/queries/doSignIn'
import getWhoAmI from '../lib/queries/getWhoAmI'
import { useLazyQuery, useMutation } from '@apollo/react-hooks'
import type { SignInResponse, WhoAmIResponse } from '../lib/resolvers'

export const UserContext = React.createContext({
  user: '',
  error: {},
  loading: false,
  signIn: (email: string, password: string, plant: string) => ({}),
  signOut: () => ({})
})

interface GQLSignInResponse {
  SignIn: SignInResponse
}

interface GQLWhoAmIResponse {
  WhoAmI: WhoAmIResponse
}

export interface UserContextValue {
  user: string
  loading: boolean
  error: {}
  signIn: (email: string, password: string, plant: string) => void
  signOut: () => void
}

export function UserProvider(props: any): JSX.Element {
  const [user, setUser] = useState<string>('')

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    async function loadUser() {
      if (!getToken()) {
        return
      }

      try {
        const variables = { token: getToken() }
        return await getWho({
          variables
        })
      } catch (error) {
        console.log(error)
      }
    }
    void loadUser()
  }, [])

  const [doSign, { error: errorSignIn, loading: loadingSignIn }] =
    useMutation<GQLSignInResponse>(doSignIn, {
      onError: () => {
        console.log('error')
      },
      onCompleted: (data: GQLSignInResponse) => {
        const { SignIn: user } = data
        setToken(user.access_token)
        setUser(user.name)
      },
      fetchPolicy: 'no-cache'
    })
  const [getWho, { error: errorWhoAmI, loading: loadingWhoAmI }] =
    useLazyQuery<GQLWhoAmIResponse>(getWhoAmI, {
      onError: () => {
        setUser('')
        deleteToken()
      },
      onCompleted: (data: GQLWhoAmIResponse) => {
        const { WhoAmI: user } = data
        setUser(user.name)
      },
      fetchPolicy: 'no-cache'
    })

  const signIn = useCallback(async (email: string, password: string, plant: string) => {
    const variables = {
      email,
      password,
      plant
    }
    return await doSign({
      variables
    })
  }, [])

  const signOut = useCallback(() => {
    setUser('')
    deleteToken()
  }, [])

  const error = errorSignIn != null || errorWhoAmI

  const loading = loadingSignIn || loadingWhoAmI

  const value = useMemo(() => {
    return {
      user,
      error,
      loading,
      signIn,
      signOut
    }
  }, [user, error, loading, signIn, signOut])

  return <UserContext.Provider value={value} {...props} />
}
