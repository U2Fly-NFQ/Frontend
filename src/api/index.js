import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_API,
})

axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

const setLocalToken = (token) => {
  axiosInstance.interceptors.request.use((config) => {
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  })
}

export { setLocalToken }
export default axiosInstance
