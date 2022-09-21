import React, { useState } from 'react'
import useUser from '../hooks/useUser'

const LogInSection = (): JSX.Element => {
  const { signIn } = useUser()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleChangeUsername = (e: any): void => {
    setUsername(e.target.value)
  }

  const handleChangePassword = (e: any): void => {
    setPassword(e.target.value)
  }

  return (
    <div>
      <input type="text" onChange={handleChangeUsername} />
      <input type="password" onChange={handleChangePassword} />
      <button onClick={() => signIn(username, password)} type="button">
        Log in
      </button>
    </div>
  )
}

export default LogInSection
