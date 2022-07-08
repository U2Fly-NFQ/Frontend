import axios from '..'

const endpoint = '/tickets'

export const getList = (params) => {
  return axiosInstance.get(`${endpoint}`, {
    params,
  })
}

export const get = (id) => axios.get(`${endpoint}/${id}`)

export const create = (data) => axios.post(`${endpoint}`, data)

export const update = (id, data) => axios.put(`${endpoint}/${id}`, data)

export const destroy = (id) => axios.delete(`${endpoint}/${id}`)

export const cancelBooking = (data) => axios.post('/stripe/refund', data)

export const bookingRating = (data) => axios.post('/rate', data)
