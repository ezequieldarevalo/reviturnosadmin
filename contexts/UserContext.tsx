import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { getToken, setToken, deleteToken } from '../helpers/ls-auth'
import doSignIn from '../lib/queries/doSignIn'
import getWhoAmI from '../lib/queries/getWhoAmI'
import { useLazyQuery, useMutation } from '@apollo/react-hooks'
import type { SignInResponse, WhoAmIResponse } from '../lib/resolvers'

export const UserContext = React.createContext({
  user: '',
  role: '',
  error: {},
  loading: false,
  signIn: (username: string, password: string) => ({}),
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
  role: string
  loading: boolean
  error: {}
  signIn: (username: string, password: string) => void
  signOut: () => void
}

export function UserProvider (props: any): JSX.Element {
  const [user, setUser] = useState<any>(null)
  const [role, setRole] = useState<any>(null)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    async function loadUser () {
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
        setToken(user.token)
        setUser(user.username)
        setRole(user.role)
      },
      fetchPolicy: 'no-cache'
    })
  const [getWho, { error: errorWhoAmI, loading: loadingWhoAmI }] =
    useLazyQuery<GQLWhoAmIResponse>(getWhoAmI, {
      onError: () => {
        setUser(null)
        deleteToken()
      },
      onCompleted: (data: GQLWhoAmIResponse) => {
        const { WhoAmI: user } = data
        setUser(user.username)
        setRole(user.role)
      },
      fetchPolicy: 'no-cache'
    })

  const signIn = useCallback(async (username: string, password: string) => {
    const variables = {
      username,
      password
    }
    return await doSign({
      variables
    })
  }, [])

  const signOut = useCallback(() => {
    setUser(null)
    deleteToken()
  }, [])

  const error = errorSignIn != null || errorWhoAmI

  const loading = loadingSignIn || loadingWhoAmI

  const value = useMemo(() => {
    return {
      user,
      role,
      error,
      loading,
      signIn,
      signOut
    }
  }, [user, role, error, loading, signIn, signOut])

  return <UserContext.Provider value={value} {...props} />
}
