import axios from '..'

const getList = () => axios.get(`/api/aiports`)

const get = (id) => axios.get(`/api/aiports/${id}`)

const create = (data) => axios.post(`/api/aiports`, data)

const update = (id, data) => axios.put(`/api/aiports/${id}`, data)

const destroy = (id) => axios.delete(`/api/aiports/${id}`)

const airportApi = {
  getList,
  get,
  create,
  update,
  destroy,
}

export default airportApi
