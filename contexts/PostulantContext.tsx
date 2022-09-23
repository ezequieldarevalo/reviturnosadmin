import React, { useState, useMemo } from 'react'
// import { getToken, setToken, deleteToken } from '../helpers/ls-auth'
// import doSignIn from '../lib/queries/doSignIn'
// import getWhoAmI from '../lib/queries/getWhoAmI'
// import { useLazyQuery, useMutation } from '@apollo/react-hooks'
// import type { SignInResponse, WhoAmIResponse } from '../lib/resolvers'
import { useQuery } from '@apollo/client'
import getPostulantState from '../lib/queries/getPostulantState'
import LoaderOverlay from '../components/LoaderOverlay'
import styled from 'styled-components'
import { getToken } from '../helpers/ls-auth'
import { ApolloError } from 'apollo-server-micro'

export interface IError {
  saleChannel?: string
  reason: string
  date?: string
  shift?: string
  canRetry?: boolean
}

export const emptyError: IError = {
  reason: 'default'
}

const LoadingContainer = styled.div`
  min-height: 290px;
`

export const PostulantContext = React.createContext({
state: ''
})

export interface PostulantContextValue {
  state: string
  error: ApolloError
}

interface IPostulantProvider {
    id: string
    children: JSX.Element
}

export function PostulantProvider ({ id, children }: IPostulantProvider): JSX.Element {
  const [state] = useState<string>('')

  const {
    loading: loadingQuery,
    error,
    data
  } = useQuery(getPostulantState, { variables: { id, token: getToken() } })

  const value = useMemo(() => {
    return {
        state: data?.PostulantState?.state,
        error,
        loadingQuery
    }
  }, [state, error, loadingQuery])

  if (loadingQuery) {
    return (
        <LoaderOverlay loading noBackground>
          <LoadingContainer />
        </LoaderOverlay>
      )
    }

  return <PostulantContext.Provider value={value}>
    {children}
  </PostulantContext.Provider>
}
