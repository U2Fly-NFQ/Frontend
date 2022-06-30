import axios from 'axios'

const endpoint = 'flights'

const getList = () => axios.get(`${endpoint}`)

const get = (id) => axios.get(`${endpoint}/${id}`)

const create = (data) => axios.post(`${endpoint}`, data)

const update = (id, data) => axios.put(`${endpoint}/${id}`, data)

const destroy = (id) => axios.delete(`${endpoint}/${id}`)

const FlightApi = {
  getList,
  get,
  create,
  update,
  destroy,
}

export default FlightApi
