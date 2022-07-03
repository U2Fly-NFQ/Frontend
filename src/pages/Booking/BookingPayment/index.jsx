import { Form, Radio, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { ButtonOfPage, InputOFPage } from '../../../components'
import './index.scss'
export default function BookingPayment() {
  const [value, setValue] = useState(1)
  const [dataBooking, setDataBooking] = useState()
  useEffect(() => {
    setDataBooking(dataPayment[value])
  }, [value])
  const onChange = (e) => {
    setValue(e.target.value)
  }
  let dataPayment = [
    {
      paymentMethod: 'Paypal',
      render: (
        <Form.Item
          style={{ marginTop: '20px' }}
          onClick={() => {
            window.location.replace(
              'https://www.sandbox.paypal.com/signin?returnUrl=http://localhost:3000/booking-success'
            )
          }}
        >
          <ButtonOfPage title={'Pay Now'} />
        </Form.Item>
      ),
    },
    {
      paymentMethod: 'Payoneer',
      render: (
        <div>
          <Form.Item
            name="username"
            style={{
              display: 'inline-block',
              width: '50%',
              margin: '0px',
            }}
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <InputOFPage placeholder="Email Address" />
          </Form.Item>
          <Form.Item style={{ marginTop: '20px' }}>
            <ButtonOfPage title={'Pay Now'} />
          </Form.Item>
        </div>
      ),
    },
  ]

  return (
    <div className="">
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          {dataPayment &&
            dataPayment.map((item, index) => {
              return (
                <Radio value={index} key={index}>
                  {item.paymentMethod}
                </Radio>
              )
            })}
        </Space>
      </Radio.Group>
      <div className="BookingPayment-content">
        {dataBooking && dataBooking.render}
      </div>
    </div>
  )
}
