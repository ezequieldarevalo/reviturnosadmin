import { useContext } from 'react'
import { QuotesContext } from '../contexts/QuotesContext'
import type { QuotesContextValue } from '../contexts/QuotesContext'

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
function useQuotes(): QuotesContextValue {
    return useContext(QuotesContext)
}

export default useQuotes
