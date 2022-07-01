import { Form } from 'antd'
import React from 'react'
import { ButtonOfPage } from '../../../components'
import { useDispatch, useSelector } from 'react-redux'
import { getDiscountCheck } from '../../../redux/slices/bookingFlightsSlice'
import { getDiscountForBookingAirline } from '../../../redux/selectors'
import './index.scss'
export default function BookingCoupon() {
  const dispatch = useDispatch()
  const discount = useSelector(getDiscountForBookingAirline)
  const onFinish = (value) => {
    dispatch(getDiscountCheck(value))
  }
  return (
    <div className="booking-coupon">
      <div className="booking-page__container__item__title">
        <h3>Coupon code</h3>
      </div>
      <div className="booking-coupon__container">
        {discount.percent != 0 && <i className="fa-solid fa-circle-check"></i>}
        <Form onFinish={onFinish}>
          <Form.Item
            name="idDiscount"
            style={{
              display: 'inline-block',
              width: '100%',
              margin: '0px',
            }}
            className="form-item-coupon"
            validateStatus="success"
            rules={[{ required: true, message: 'Please input your coupon!' }]}
          >
            <input
              name="idDiscount"
              className="form-control"
              placeholder="input your discount number"
            />
          </Form.Item>
          <Form.Item style={{ marginTop: '20px' }}>
            <ButtonOfPage
              title={'Apply voucher'}
              warning={discount.percent != 0 ? true : false}
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
