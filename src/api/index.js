import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://u2fly.tolehoai.me/api/',
  headers: {
    'content-type': 'application/json',
  },
})
