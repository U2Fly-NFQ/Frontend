import axios from 'axios'

export const register = (data) => axios.post(`/users/register`, data)
