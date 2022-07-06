import axios from '..'

export const loginApi = (data) => {
  return axios.post(`/api/login`, data)
}
