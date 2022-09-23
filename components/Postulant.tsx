import React from 'react'
import usePostulant from '../hooks/usePostulant'
import PostulantInfoCreationWizard from './PostulantInfoCreationWizard'

const Postulant = (): JSX.Element => {
  const { state } = usePostulant()
  if (state === 'created') {
    return <PostulantInfoCreationWizard />
  }
  return <div>Postulant</div>
}

export default Postulant
