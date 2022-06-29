import { Form, Radio, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { InputOFPage } from '../../../components'
import './index.scss'
export default function BookingPayment() {
  const [value, setValue] = useState(1)
  const [dataBooking, setDataBooking] = useState()
  useEffect(() => {
    console.log(dataPayment[value])
    setDataBooking(dataPayment[value])
  }, [value])
  const onChange = (e) => {
    setValue(e.target.value)
  }
  let dataPayment = [
    {
      paymentMethod: 'Paypal',
      render: (
        <div>
          <Form
            name="basic"
            wrapperCol={{
              span: 22,
            }}
            initialValues={{
              remember: true,
            }}
          >
            <Form.Item
              name="username"
              style={{
                display: 'inline-block',
                width: '50%',
                margin: '0px',
              }}
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <InputOFPage placeholder="Card number" />
            </Form.Item>
            <Form.Item
              name="username"
              style={{
                display: 'inline-block',
                width: '50%',
                marginBottom: '20px',
              }}
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <InputOFPage placeholder="Cardholder name" />
            </Form.Item>
            <Form.Item
              name="username"
              style={{
                display: 'inline-block',
                width: '50%',
                margin: '0px',
              }}
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <InputOFPage placeholder="Date of expiry" />
            </Form.Item>
            <Form.Item
              name="username"
              style={{
                display: 'inline-block',
                width: '50%',
                margin: '0px',
              }}
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <InputOFPage placeholder="Security code" />
            </Form.Item>
          </Form>
        </div>
      ),
    },
    {
      paymentMethod: 'Payoneer',
      render: (
        <div>
          <Form
            name="basic"
            wrapperCol={{
              span: 22,
            }}
            initialValues={{
              remember: true,
            }}
          >
            {' '}
            <Form.Item
              name="username"
              style={{
                display: 'inline-block',
                width: '50%',
                margin: '0px',
              }}
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <InputOFPage placeholder="Email Address" />
            </Form.Item>
          </Form>
        </div>
      ),
    },
    {
      paymentMethod: 'Cash on delivery',
      render: <div></div>,
    },
  ]

  return (
    <div className="">
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          {dataPayment &&
            dataPayment.map((item, index) => {
              return <Radio value={index}>{item.paymentMethod}</Radio>
            })}
        </Space>
      </Radio.Group>
      <div className="BookingPayment-content">
        {dataBooking && dataBooking.render}
      </div>
    </div>
  )
}
