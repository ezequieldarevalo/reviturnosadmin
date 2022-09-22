import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { getToken, setToken, deleteToken } from '../helpers/ls-auth'
import doSignIn from '../lib/queries/doSignIn'
import getWhoAmI from '../lib/queries/getWhoAmI'
import { useLazyQuery, useMutation } from '@apollo/react-hooks'
import type { SignInResponse, WhoAmIResponse } from '../lib/resolvers'

export const PostulantContext = React.createContext({
state: true
})

export interface PostulantContextValue {
  user: string
  role: string
  postulantId: number
  loading: boolean
  error: {}
  signIn: (username: string, password: string) => void
  signOut: () => void
}

interface IPostulantProvider {
    id: string
}

export function PostulantProvider ({ id }: IPostulantProvider): JSX.Element {
  const [state] = useState<boolean>(true)

  const value = useMemo(() => {
    return {
        state
    }
  }, [state])

  return <PostulantContext.Provider value={value} />
}
