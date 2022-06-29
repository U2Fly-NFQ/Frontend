import axios from 'axios'

export const loggin = (data) => axios.post(`/users/login`, data)