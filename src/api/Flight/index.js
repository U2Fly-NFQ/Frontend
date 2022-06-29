import { axiosInstance } from '../../api'

const getAll = () => axiosInstance.get(`/flights`)

const get = (id) => axiosInstance.get(`/flights/${id}`)

const create = (data) => axiosInstance.post(`/flights`, data)

const update = (id, data) => axiosInstance.put(`/flights/${id}`, data)

const destroy = (id) => axiosInstance.delete(`/flights/${id}`)

const FlightApi = {
  getAll,
  get,
  create,
  update,
  destroy,
}

export default FlightApi
