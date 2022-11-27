import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import type { UserContextValue } from '../contexts/UserContext'

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
function useUser(): UserContextValue {
  return useContext(UserContext)
}

export default useUser
