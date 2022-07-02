import { axiosService } from '../index'

export const register = (data) => axiosService.post(`/users/register`, data)
