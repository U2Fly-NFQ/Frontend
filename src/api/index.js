import axios from 'axios'

// Set config defaults when creating the instance
export const axiosService = axios.create({
  baseURL: process.env.REACT_APP_SERVER_API,
})

export const setTokenApi = (token) =>
  (axios.defaults.headers.common = { Authorization: `Bearer ${token}` })
