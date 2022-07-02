import { axiosService } from '../index'

const endpoint = 'flights'

const getList = (params) =>
  axiosService.get(`${endpoint}`, {
    params,
  })

const get = (id) => axiosService.get(`${endpoint}/${id}`)

const create = (data) => axiosService.post(`${endpoint}`, data)

const update = (id, data) => axiosService.put(`${endpoint}/${id}`, data)

const destroy = (id) => axiosService.delete(`${endpoint}/${id}`)

export default {
  getList,
  get,
  create,
  update,
  destroy,
}
