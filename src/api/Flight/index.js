import axios from 'axios'

const getList = () => axios.get(`/api/flights`)

const get = (id) => axios.get(`/api/flights/${id}`)

const create = (data) => axios.post(`/api/flights`, data)

const update = (id, data) => axios.put(`/api/flights/${id}`, data)

const destroy = (id) => axios.delete(`/api/flights/${id}`)

export default {
  getList,
  get,
  create,
  update,
  destroy,
}
