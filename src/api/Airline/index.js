import axios from '..'

const getList = () => axios.get(`/airlines`)

const get = (id) => axios.get(`/airlines/${id}`)

const create = (data) => axios.post(`/airlines`, data)

const update = (id, data) => axios.put(`/airlines/${id}`, data)

const destroy = (id) => axios.delete(`/airlines/${id}`)

const AirlineApi = {
  getList,
  get,
  create,
  update,
  destroy,
}

export default AirlineApi
