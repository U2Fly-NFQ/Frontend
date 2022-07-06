import axios from '..'

export const register = (data) => axios.post(`/users/register`, data)
