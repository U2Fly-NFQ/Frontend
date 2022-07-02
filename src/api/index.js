import axios from 'axios'

function getLocalToken() {
  const token = window.localStorage.getItem('token')
  return token
}

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_API,
  timeout: 300000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
})

axiosInstance.setToken = (token) => {
  axiosInstance.defaults.headers.Authorization = `Bearer ${token}`
  localStorage.setItem('token', token)
}

export default axiosInstance
