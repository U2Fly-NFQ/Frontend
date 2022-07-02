import { axiosService } from '../index'

const endpoint = 'airports'

const getList = () => axiosService.get(`${endpoint}`)

const get = (id) => axiosService.get(`${endpoint}/${id}`)

const create = (data) => axiosService.post(`${endpoint}`, data)

const update = (id, data) => axiosService.put(`${endpoint}/${id}`, data)

const destroy = (id) => axiosService().delete(`${endpoint}/${id}`)

const airportApi = {
  getList,
  get,
  create,
  update,
  destroy,
}

export default airportApi
