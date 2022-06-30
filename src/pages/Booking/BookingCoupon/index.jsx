import { Form } from 'antd'
import React from 'react'
import { ButtonOfPage } from '../../../components'
import { useDispatch } from 'react-redux'
import { getDiscountCheck } from '../../../redux/slices/bookingFlightsSlice'
export default function BookingCoupon() {
  const dispatch = useDispatch()

  const onFinish = (value) => {
    // console.log(value)
    dispatch(getDiscountCheck(value))
  }
  return (
    <div className="booking-coupon">
      <div className="booking-page__container__item__title">
        <h3>Coupon code</h3>
      </div>
      <div className="booking-coupon__container">
        <Form onFinish={onFinish}>
          <Form.Item
            name="idDiscount"
            style={{
              display: 'inline-block',
              width: '100%',
              margin: '0px',
            }}
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <input
              name="idDiscount"
              className="form-control"
              placeholder="input your discount number"
            />
          </Form.Item>
          <Form.Item style={{ marginTop: '20px' }}>
            <ButtonOfPage title={'Apply voucher'} />
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
