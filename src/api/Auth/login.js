import axiosInstance from '..'

export const loginApi = (data) => {
  return axiosInstance.post(`/login`, data)
}
