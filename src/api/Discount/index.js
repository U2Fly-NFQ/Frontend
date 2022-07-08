import axios from '..'

export const getDiscountById = (idDiscount) =>
  axios.get(`/discounts/${idDiscount}`)

export const getDiscounts = () => axios.get(`/discounts`)

export const deleteDiscount = (idDiscount) =>
  axios.delete(`/discounts/${idDiscount}`)

export const createDiscount = (discountData) =>
  axios.post(`/discounts`, discountData)

export const discountApi = {
  getDiscountById,
  getDiscounts,
  deleteDiscount,
  createDiscount,
}

export default discountApi
