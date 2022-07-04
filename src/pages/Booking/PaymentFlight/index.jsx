import React, { useEffect, useState } from 'react'
import './index.scss'
import { Form, Radio, Space } from 'antd'
import { ButtonOfPage, InputOFPage } from '../../../components'
export default function PaymentFlight() {
  const [value, setValue] = useState(1)
  const [dataBooking, setDataBooking] = useState()

  const onChange = (e) => {
    setValue(e.target.value)
  }
  useEffect(() => {
    setDataBooking(dataPayment[value])
  }, [value])

  let dataPayment = [
    {
      paymentMethod: 'Payoneer',
      render: (
        <>
          <Form.Item style={{ marginTop: '20px' }}>
            <ButtonOfPage title={'Pay Now'} />
          </Form.Item>
        </>
      ),
    },
    {
      paymentMethod: 'Paypal',
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
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error('Should accept agreement')),
              },
            ]}
          ></Form.Item>
          <Form.Item>
            <ButtonOfPage title={'Pay Now'} />
          </Form.Item>
        </div>
      ),
    },
  ]

  return (
    <div className="" style={{ width: '100%' }}>
      <Radio.Group onChange={onChange} value={value} style={{ width: '100%' }}>
        <Space direction="vertical">
          {dataPayment &&
            dataPayment.map((item, index) => {
              return (
                <div className="radio-payment">
                  <Radio value={index} key={index}>
                    {item.paymentMethod}
                  </Radio>
                </div>
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
