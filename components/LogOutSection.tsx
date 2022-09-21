import React from 'react'
import useUser from '../hooks/useUser'

const LogOutSection = (): JSX.Element => {
  const { user, signOut } = useUser()
  return (
    <div>
      {user}
      <button onClick={() => signOut()} type="button">
        Log Out
      </button>
    </div>
  )
}

export default LogOutSection
