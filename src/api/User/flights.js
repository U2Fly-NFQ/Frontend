import axios from 'axios'

export const getFlights = () => axios.get(`/flights`)

export const getFlight = (id) => axios.get(`/flights/${id}`)

export const createFlight = (data) => axios.post(`/flights`, data)

export const updateFlight = (id, data) => axios.put(`/flights/${id}`, data)

export const destroyFlight = (id) => axios.delete(`/flights/${id}`)
