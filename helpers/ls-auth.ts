export const getToken = (): string | boolean => {
    const token = localStorage.getItem('token')
    if (token) return token
    return false
}

export const setToken = (token: string): void => {
    console.log('daaaa')
    localStorage.setItem('token', token)
}

export const deleteToken = (): void => {
    localStorage.removeItem('token')
}
