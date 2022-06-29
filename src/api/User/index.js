import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_SERVER_API

export const setTokenApi = (token) =>
  (axios.defaults.headers.common = { Authorization: `Bearer ${token}` })

export * from './flights'
export * from './login'
export * from './register'
