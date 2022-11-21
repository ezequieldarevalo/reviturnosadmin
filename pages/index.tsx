import type { NextPage } from 'next'
import Head from 'next/head'
import useUser from '../hooks/useUser'
import React from 'react'
import Login from '../components/Login'
import Home from '../components/Home'
import { getToken, getPlantId } from '../helpers/ls-auth'

const Start: NextPage = () => {
  const { user } = useUser()

  if (getToken() && getPlantId()) return <Home />
  return (
    <>
      <Head>
        <title>Reviturnos admin</title>
        <meta name="description" content="Reviturnos admin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {user ? <Home /> : <Login />}
    </>
  )
}

export default Start
