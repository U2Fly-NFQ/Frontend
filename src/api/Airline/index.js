import axios from '..'

const getList = () => axios.get(`/api/airlines`)

const get = (id) => axios.get(`/api/airlines/${id}`)

const create = (data) => axios.post(`/api/airlines`, data)

const update = (id, data) => axios.put(`/api/airlines/${id}`, data)

const destroy = (id) => axios.delete(`/api/airlines/${id}`)

const AirlineApi = {
  getList,
  get,
  create,
  update,
  destroy,
}

export default AirlineApi
