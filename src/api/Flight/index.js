import axios from '..'

const getList = (params) => {
  return axios.get(`/flights`, {
    params,
  })
}

const get = (id) => axios.get(`/flights/${id}`)

const create = (data) => axios.post(`/flights`, data)

const update = (id, data) => axios.put(`/flights/${id}`, data)

const destroy = (id) => axios.delete(`/flights/${id}`)

const getUserData = (id) => {
  return axios.get(`/passengers/${id}`)
}

const getInfoTickerById = (idTicket) => axios.get(`/api/tickets/${idTicket}`)

const createATicket = (data) => axios.post(`/payment/stripe`, data)

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
