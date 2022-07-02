import { axiosService } from '../index'

const getDiscountById = (idDiscount) =>
  axiosService.get(`discounts/${idDiscount}`)

export default {
  getDiscountById,
}
