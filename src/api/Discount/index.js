import axios from '..'

const getDiscountById = (idDiscount) => axios.get(`/discounts/${idDiscount}`)

export default {
  getDiscountById,
}
