import axios from '..'

const getList = () => axios.get(`/airports`)

const get = (id) => axios.get(`/airports/${id}`)

const create = (data) => axios.post(`/airports`, data)

const update = (id, data) => axios.put(`/airports/${id}`, data)

const destroy = (id) => axios.delete(`/airports/${id}`)

const airportApi = {
  getList,
  get,
  create,
  update,
  destroy,
}

export default airportApi
