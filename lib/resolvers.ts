/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/space-before-function-paren */

import getConfig from 'next/config'
import { ApolloError } from 'apollo-server-errors'
import { getBackendUrlFromPlantId } from '../helpers/ls-auth'

const BAD_REQUEST = 'BAD_REQUEST'
const INTERNAL_ERROR_SERVER = 'INTERNAL_ERROR_SERVER'
const UNKNOWN_ERROR = 'UNKNOWN_ERROR'

interface DoSignInArgs {
    email: string
    password: string
    plantId: string
}

interface getWhoAmIArgs {
    token: string
    plantId: string
}

interface getPostulantStateArgs {
    id: string
    token: string
}

export interface SignInResponse {
    name: string
    access_token: string
    backendUrl: string
    plantId: string
}

export interface WhoAmIResponse {
    name: string
    backendUrl: string
}

export interface PostulantStateResponse {
    state: string
}

const Query = {
    async getWhoAmI(__parent: unknown, _args: getWhoAmIArgs): Promise<WhoAmIResponse> {
        const backendUrl: string = getBackendUrlFromPlantId(_args.plantId)
        const suffixUrl: string = '/api/auth/user'
        const destinationEndpoint = backendUrl + suffixUrl

        const headers = {
            Authorization: 'Bearer ' + _args.token
        }

        const requestOptions = {
            method: 'GET',
            headers
        }
        const response = await fetch(destinationEndpoint, requestOptions)
        if (!response.ok) {
            if (response.status === 400) {
                throw new ApolloError('', BAD_REQUEST, {
                    details: {
                        reason: BAD_REQUEST
                    }
                })
            }
            if (response.status === 500) {
                throw new ApolloError('', INTERNAL_ERROR_SERVER, {
                    details: {
                        reason: INTERNAL_ERROR_SERVER
                    }
                })
            }
            throw new ApolloError('', UNKNOWN_ERROR, {
                details: {
                    reason: UNKNOWN_ERROR
                }
            })
        } else {
            const data = await response.json()
            const result = {
                name: data.name,
                backendUrl
            }
            return result
        }
    },
    async getPostulantState(__parent: unknown, _args: getPostulantStateArgs): Promise<PostulantStateResponse> {
        const backendUrl: string = getConfig().serverRuntimeConfig.backendUrl
        const suffixUrl: string = '/postulant/' + _args.id + '/state'
        const destinationEndpoint = backendUrl + suffixUrl

        const headers = {
            Authorization: 'Bearer ' + _args.token
        }

        const requestOptions = {
            method: 'GET',
            headers
        }

        const response = await fetch(destinationEndpoint, requestOptions)
        if (!response.ok) {
            if (response.status === 400) {
                throw new ApolloError('', BAD_REQUEST, {
                    details: {
                        reason: BAD_REQUEST
                    }
                })
            }
            if (response.status === 500) {
                throw new ApolloError('', INTERNAL_ERROR_SERVER, {
                    details: {
                        reason: INTERNAL_ERROR_SERVER
                    }
                })
            }
            throw new ApolloError('', UNKNOWN_ERROR, {
                details: {
                    reason: UNKNOWN_ERROR
                }
            })
        } else {
            const data = await response.json()
            const result = { state: data.state }
            return result
        }
    }
}

const Mutation = {

    async doSignIn(
        __parent: unknown,
        _args: DoSignInArgs
    ): Promise<SignInResponse> {
        const plantId = _args.plantId
        const backendUrl: string = getBackendUrlFromPlantId(plantId)
        const suffixUrl: string = '/api/auth/login'
        const destinationEndpoint: string = backendUrl + suffixUrl

        const bodyData = {
            email: _args.email,
            password: _args.password
        }

        const headers = {
            'Content-Type': 'application/json'
        }

        const requestOptions = {
            method: 'POST',
            headers,
            body: JSON.stringify(bodyData)
        }
        const response = await fetch(destinationEndpoint, requestOptions)
        if (!response.ok) {
            if (response.status === 400) {
                throw new ApolloError('', BAD_REQUEST, {
                    details: {
                        reason: BAD_REQUEST
                    }
                })
            }
            if (response.status === 500) {
                throw new ApolloError('', INTERNAL_ERROR_SERVER, {
                    details: {
                        reason: INTERNAL_ERROR_SERVER
                    }
                })
            }
            throw new ApolloError('', UNKNOWN_ERROR, {
                details: {
                    reason: UNKNOWN_ERROR
                }
            })
        } else {
            const data = await response.json()
            const result = {
                name: data.name,
                access_token: data.access_token,
                backendUrl,
                plantId
            }
            return result
        }
    }
}

export default { Query, Mutation }
