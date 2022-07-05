import axios from '..'

const getList = (params) => {
  return axios.get(`/api/flights`, {
    params,
  })
}

const get = (id) => axios.get(`/api/flights/${id}`)

const create = (data) => axios.post(`/api/flights`, data)

const update = (id, data) => axios.put(`/api/flights/${id}`, data)

const destroy = (id) => axios.delete(`/api/flights/${id}`)

const getUserData = (id) => {
  return axios.get(`/api/passengers/${id}`)
}

const getInfoTickerById = (idTicket) => axios.get(`/api/tickets/${idTicket}`)

const createATicket = (data) => axios.post(`/api/payment/stripe`, data)

export default {
  getList,
  get,
  create,
  getInfoTickerById,
  update,
  createATicket,
  destroy,
  getUserData,
}
