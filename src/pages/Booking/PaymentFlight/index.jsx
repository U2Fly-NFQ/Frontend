import React, { useEffect, useState } from 'react'
import './index.scss'
import { Form, Radio } from 'antd'
import { ButtonOfPage } from '../../../components'
import logoStripe from '../../../../src/assets/images/system/stripe-icon.jpg'
import { useDispatch, useSelector } from 'react-redux'
import {
  getDiscountForBookingAirline,
  getInfoFlightInBookingFight,
  getInfoFlightInBookingSeat,
  getInfoPriceAfterDiscount,
  getUserInformation,
} from '../../../redux/selectors'
import { createBookingFlight } from '../../../redux/slices/bookingFlightsSlice'
export default function PaymentFlight() {
  const [value, setValue] = useState(1)
  const [dataBooking, setDataBooking] = useState()
  const priceDiscount = useSelector(getInfoPriceAfterDiscount)
  const getDiscountInfo = useSelector(getDiscountForBookingAirline)
  const getPrice = useSelector(getInfoFlightInBookingSeat)
  const getFlightData = useSelector(getInfoFlightInBookingFight)
  const getSeatData = useSelector(getInfoFlightInBookingSeat)
  const userInformation = useSelector(getUserInformation)
  const dispatch = useDispatch()
  const onChange = (e) => {
    setValue(e.target.value)
  }
  useEffect(() => {
    setDataBooking(dataPayment[value])
  }, [value])
  const onFinish = () => {
    let fetchDataValue = {
      passengerId: userInformation.accountId,
      flightId: getFlightData.id,
      seatTypeId: getSeatData.id,
      totalPrice:
        priceDiscount === 0 ? getPrice.price * 1000 : priceDiscount * 1000,
      discountId: getDiscountInfo.id || 1,
      ticketOwner: userInformation.firstName,
    }
    dispatch(createBookingFlight(fetchDataValue))
  }
  let dataPayment = [
    {
      paymentMethod: 'Stripe',
      logo: logoStripe,
      render: (
        <>
          <Form.Item style={{ marginTop: '20px' }}>
            <ButtonOfPage title={'Pay Now'} />
          </Form.Item>
        </>
      ),
    },
    // {
    //   paymentMethod: 'Paypal',
    //   render: (
    //     <div style={{ marginTop: '20px' }}>
    //       <Form.Item
    //         name="username"
    //         style={{
    //           display: 'inline-block',
    //           width: '50%',
    //           margin: '0px',
    //         }}
    //         rules={[{ required: true, message: 'Please input your username!' }]}
    //       >
    //         <InputOFPage placeholder="Email Address" />
    //       </Form.Item>
    //       <Form.Item
    //         name="agreement"
    //         valuePropName="checked"
    //         rules={[
    //           {
    //             validator: (_, value) =>
    //               value
    //                 ? Promise.resolve()
    //                 : Promise.reject(new Error('Should accept agreement')),
    //           },
    //         ]}
    //       ></Form.Item>
    //       <Form.Item>
    //         <ButtonOfPage title={'Pay Now'} />
    //       </Form.Item>
    //     </div>
    //   ),
    // },
  ]

  return (
    <div style={{ width: '100%' }}>
      <Radio.Group
        onChange={onChange}
        value={value}
        style={{ width: '100%' }}
        className="paymnet-button__radio"
      >
        {dataPayment &&
          dataPayment.map((item, index) => {
            return (
              <div className="paymnet-button__radio form-control">
                <Radio
                  value={index}
                  key={index}
                  className="paymnet-button__radio__btn"
                >
                  {item.paymentMethod}
                  <div className="paymnet-button__radio__logo ">
                    <img src={item.logo} alt="stripe-logo" />
                  </div>
                </Radio>
              </div>
            )
          })}
      </Radio.Group>
      <div className="BookingPayment-content">
        <Form onFinish={onFinish}>{dataBooking && dataBooking.render}</Form>
      </div>
    </div>
  )
}
