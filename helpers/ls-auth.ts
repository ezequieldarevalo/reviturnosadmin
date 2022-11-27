import plants from '../lib/config/plants'
import Cookies from 'js-cookie'

export const getToken = (): string | boolean => {
    const token = Cookies.get('token')
    if (token) return token
    return false
}

export const getStringToken = (): string => {
    return Cookies.get('token') ?? ''
}

export const getPlantId = (): string => {
    const plantId = Cookies.get('plantId')
    if (plantId) return plantId
    return ''
}

export const getPlantName = (): string => {
    const plantId = getPlantId()
    if (plantId) return plants.find(({ id }) => id === plantId)?.name ?? ''
    return ''
}

export const setToken = (token: string): void => {
    Cookies.set('token', token)
}

export const setPlantId = (plantId: string): void => {
    Cookies.set('plantId', plantId)
}

export const deleteToken = (): void => {
    Cookies.remove('token')
}

export const deletePlantId = (): void => {
    Cookies.remove('plantId')
}

export const getBackendUrlFromPlantId = (plantId: string): string => {
    if (plantId) return plants.find(({ id }) => id === plantId)?.backendUrl ?? ''
    return ''
}
