import { Form } from 'antd'
import React from 'react'
import { ButtonOfPage, InputOFPage } from '../../../components'

export default function BookingCoupon() {
  return (
    <div className="booking-coupon">
      <div className="booking-page__container__item__title">
        <h3>Coupon code</h3>
      </div>
      <div className="booking-coupon__container">
        <Form>
          <Form.Item
            name="username"
            style={{
              display: 'inline-block',
              width: '100%',
              margin: '0px',
            }}
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <InputOFPage placeholder="Enter coupon code*" />
          </Form.Item>
          <Form.Item>
            <ButtonOfPage title={'Apply voucher'} />
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
