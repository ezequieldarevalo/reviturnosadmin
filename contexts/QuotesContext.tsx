import React, { useMemo, useState, useCallback } from 'react'
// import {
//     getToken,
//     setToken,
//     setPlantId,
//     deleteToken,
//     deletePlantId,
import {
    getPlantId,
    getStringToken
} from '../helpers/ls-auth'
import getQuotes from '../lib/queries/getQuotes'
import { useQuery } from '@apollo/react-hooks'
import type { GetQuotesResponse, quote } from '../lib/resolvers'
import { ApolloError } from '@apollo/client'
import { fieldsForSearch } from '../lib/constants'

const plantId = getPlantId()
const token = getStringToken()

const emptyQuoteList: quote[] = []

export const QuotesContext = React.createContext({
    quotes: emptyQuoteList,
    error: new ApolloError({}),
    loading: false,
    inputType: '',
    inputText: '',
    onInputTextChange: (text: string) => { },
    onInputTypeChange: (type: string) => { }
})

interface GQLGetQuotesResponse {
    Quotes: GetQuotesResponse
}

export interface QuotesContextValue {
    quotes: quote[]
    loading: boolean
    error: ApolloError
    inputType: string
    inputText: string
    onInputTextChange: (text: string) => void
    onInputTypeChange: (type: string) => void
}

interface IQuotesProviderProps {
    children: JSX.Element
}

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
export function QuotesProvider({
    children
}: IQuotesProviderProps): JSX.Element {
    const [inputType, setInputType] = useState<string>(fieldsForSearch[0].value)
    const [inputText, setInputText] = useState<string>('')
    const {
        loading: loadingGetQuotes,
        error: errorGetQuotes,
        data
    } = useQuery(getQuotes, { variables: { plantId, token, inputText }, fetchPolicy: 'no-cache' })

    const onInputTextChange = useCallback((text: string) => {
        setInputText(text)
    }, [])

    const onInputTypeChange = useCallback((type: string) => {
        setInputType(type)
    }, [])

    const error = errorGetQuotes ?? new ApolloError({})

    const loading = loadingGetQuotes

    const dataObtained: GQLGetQuotesResponse = data

    const quotesObtained: quote[] = dataObtained?.Quotes?.quotes

    const value = useMemo(() => {
        return {
            quotes: quotesObtained,
            error,
            loading,
            inputType,
            inputText,
            onInputTextChange,
            onInputTypeChange
        }
    }, [data, error, loading, inputType, inputText, onInputTextChange, onInputTypeChange])

    return (
        <QuotesContext.Provider value={value}>
            {children}
        </QuotesContext.Provider>
    )
}
