// import axios from '..'
import axios from 'axios'

const endpoint = 'https://62c3e6bf7d83a75e39ea0b93.mockapi.io/ticket'

export const getList = (params) => {
  return axios.get(`${endpoint}`, {
    params,
  })
}

export const get = (id) => axios.get(`${endpoint}/${id}`)

export const create = (data) => axios.post(`${endpoint}`, data)

export const update = (id, data) => axios.put(`${endpoint}/${id}`, data)

export const destroy = (id) => axios.delete(`${endpoint}/${id}`)
