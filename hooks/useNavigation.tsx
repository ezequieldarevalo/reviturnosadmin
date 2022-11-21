import { useContext } from 'react'
import { NavigationContext } from '../contexts/NavigationContext'
import type { NavigationContextValue } from '../contexts/NavigationContext'

const useNavigation = (): NavigationContextValue => {
  return useContext(NavigationContext)
}

export default useNavigation
