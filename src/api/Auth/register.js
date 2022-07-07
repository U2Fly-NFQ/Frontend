import axios from '..'

export const registerApi = (data) => axios.post(`/api/register`, data)
