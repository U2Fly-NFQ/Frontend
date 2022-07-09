import axiosInstance from '..'

const endpoint = '/tickets'

export const getList = (params) => {
  return axiosInstance.get(`${endpoint}`, {
    params,
  })
}

export const get = (id) => axiosInstance.get(`${endpoint}/${id}`)

export const create = (data) => axiosInstance.post(`${endpoint}`, data)

export const update = (id, data) => axiosInstance.put(`${endpoint}/${id}`, data)

export const destroy = (id) => axiosInstance.delete(`${endpoint}/${id}`)

export const cancelBooking = (data) =>
  axiosInstance.post('/stripe/refund', data)

export const bookingRating = (data) => axiosInstance.post('/rate', data)
