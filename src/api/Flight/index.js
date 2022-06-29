import axios from 'axios'

const getList = () => axios.get(`/flights`)

const get = (id) => axios.get(`/flights/${id}`)

const create = (data) => axios.post(`/flights`, data)

const update = (id, data) => axios.put(`/flights/${id}`, data)

const destroy = (id) => axios.delete(`/flights/${id}`)

export default {
  getList,
  get,
  create,
  update,
  destroy,
}
