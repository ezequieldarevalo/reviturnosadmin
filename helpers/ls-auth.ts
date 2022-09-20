export const getToken = () => {
    const token = localStorage.getItem('token');
    return token || false;
}

export const setToken = (token: string): void => {
    localStorage.setItem('token', token);
}

export const deleteToken = () => {
    localStorage.removeItem('token');
}