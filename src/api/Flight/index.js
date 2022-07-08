import axios from '..'

const getList = (params) => {
  return axios.get(`/flights`, {
    params,
  })
}

const get = (id) => axios.get(`/flights/${id}`)

const getUserData = (id) => {
  return axios.get(`/passengers/${id}`)
}

const getInfoTickerById = (idTicket) => axios.get(`/tickets/${idTicket}`)

const createATicket = (data) => axios.post(`/stripe`, data)

export default {
  getList,
  get,
  getInfoTickerById,
  createATicket,
  getUserData,
}
