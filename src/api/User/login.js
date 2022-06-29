import axios from 'axios'

export const loginApi = (data) => axios.post(`/api/login`, data)
