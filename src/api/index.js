import axios from 'axios'

let config = {
  baseURL: 'https://62c45182abea8c085a729073.mockapi.io',
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
