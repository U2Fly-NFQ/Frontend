import axios from 'axios'

let config = {
  baseURL: process.env.REACT_APP_SERVER_API,
  timeout: 300000,
}

if (localStorage.getItem('token'))
  config.headers = {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  }

const axiosInstance = axios.create(config)

axiosInstance.setToken = (token) => {
  axiosInstance.defaults.headers.Authorization = `Bearer ${token}`
  localStorage.setItem('token', token)
}

export default axiosInstance
