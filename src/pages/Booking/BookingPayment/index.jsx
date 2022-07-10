import { Form, Radio, Checkbox } from 'antd'
import React, { useEffect, useState } from 'react'
import { useLoadingContext } from 'react-router-loading'
import { ButtonOfPage } from '../../../components'
import './index.scss'
export default function BookingPayment() {
  const [value, setValue] = useState(1)
  const [dataBooking, setDataBooking] = useState()
  const loadingContext = useLoadingContext()
  useEffect(() => {
    setDataBooking(dataPayment[value])
    loading()
  }, [value])
  const onChange = (e) => {
    setValue(e.target.value)
  }

  const loading = async () => {
    loadingContext.done()
  }

  let dataPayment = [
    {
      paymentMethod: 'Paypal',
      render: (
        <>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            style={{ marginTop: '10px' }}
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error('Should accept agreement')),
              },
            ]}
          >
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item style={{ marginTop: '20px' }}>
            <ButtonOfPage title={'Pay Now'} />
          </Form.Item>
        </>
      ),
    },
  ]

  return (
    <>
      <div className="booking-page__container__item__title">
        <h2>Payemnt methods</h2>
      </div>
      <div className="payment-booking">
        <Radio.Group onChange={onChange} value={value}>
          {dataPayment &&
            dataPayment.map((item, index) => {
              return (
                <Radio value={index} key={index}>
                  {item.paymentMethod}
                </Radio>
              )
            })}
        </Radio.Group>
        <div className="BookingPayment-content">
          {dataBooking && dataBooking.render}
        </div>
      </div>
    </>
  )
}
