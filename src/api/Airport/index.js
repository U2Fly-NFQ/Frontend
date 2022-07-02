import axios from '..'

const getList = () => axios.get(`/api/airports`)

const get = (id) => axios.get(`/api/airports/${id}`)

const create = (data) => axios.post(`/api/airports`, data)

const update = (id, data) => axios.put(`/api/airports/${id}`, data)

const destroy = (id) => axios.delete(`/api/airports/${id}`)

export default {
  getList,
  get,
  create,
  update,
  destroy,
}
