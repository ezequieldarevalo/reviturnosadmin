import type { NextPage } from 'next'
import Head from 'next/head'
import useUser from '../../hooks/useUser'
import React from 'react'
import Login from '../../components/Login'
// import Home from '../components/Home'
import { getToken, getPlantId } from '../../helpers/ls-auth'
import { useRouter } from 'next/router'

const Quote: NextPage = () => {
    const { user } = useUser()
    const {
        query: { id }
    } = useRouter()

    if (getToken() && getPlantId()) return <div>{id}</div>
    return (
        <>
            <Head>
                <title>Reviturnos admin</title>
                <meta name="description" content="Reviturnos admin" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {user ? <div>{id}</div> : <Login />}
        </>
    )
}

export default Quote
