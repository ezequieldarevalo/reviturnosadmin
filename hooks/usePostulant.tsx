import { useContext } from 'react'
import { PostulantContext } from '../contexts/PostulantContext'
import type { PostulantContextValue } from '../contexts/PostulantContext'

function usePostulant (): PostulantContextValue {
  return useContext(PostulantContext)
}

export default usePostulant
