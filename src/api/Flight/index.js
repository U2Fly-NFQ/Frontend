import axiosInstance from '..'

const getList = (params) => {
  return axiosInstance.get(`/flights`, {
    params,
  })
}

const get = (id) => axiosInstance.get(`/flights/${id}`)

const getUserData = (id) => {
  return axiosInstance.get(`/passengers/${id}`)
}

const getInfoTickerById = (idTicket) =>
  axiosInstance.get(`/tickets/${idTicket}`)

const createATicket = (data) => axiosInstance.post(`/stripe`, data)

export default {
  getList,
  get,
  getInfoTickerById,
  createATicket,
  getUserData,
}
