import axios from '..'

export const getDiscountById = (idDiscount) =>
  axios.get(`/api/discounts/${idDiscount}`)

export const getDiscounts = () => axios.get(`/api/discounts`)

export const deleteDiscount = (idDiscount) =>
  axios.delete(`/api/discounts/${idDiscount}`)

export const createDiscount = (discountData) =>
  axios.post(`/api/discounts`, discountData)

export const discountApi = {
  getDiscountById,
  getDiscounts,
  deleteDiscount,
  createDiscount,
}

export default discountApi
