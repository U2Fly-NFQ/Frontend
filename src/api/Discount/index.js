import axios from 'axios'

const getDiscountById = (idDiscount) =>
  axios.get(`/api/discounts/${idDiscount}`)

export default {
  getDiscountById,
}
