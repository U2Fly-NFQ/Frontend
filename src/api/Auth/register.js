import axiosInstance from '..'

export const registerApi = (data) => axiosInstance.post(`/register`, data)
