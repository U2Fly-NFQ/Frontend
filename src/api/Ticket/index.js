// import axios from '..'
import axiosInstance from '../'

export const endpoint = 'https://62c3e6bf7d83a75e39ea0b93.mockapi.io/ticket'

export const getList = (params) => {
  return axiosInstance.get(`${endpoint}`, {
    params,
  })
}

export const get = (id) => axiosInstance.get(`${endpoint}/${id}`)
