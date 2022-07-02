import { axiosService } from '../index'

export const loginApi = (data) => axiosService.post(`login`, data)
