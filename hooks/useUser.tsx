import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import type { UserContextValue } from '../contexts/UserContext'

function useUser (): UserContextValue {
  return useContext(UserContext)
}

export default useUser
