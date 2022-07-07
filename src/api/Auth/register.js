import axios from '..'

export const registerApi = (data) => axios.post(`/register`, data)
