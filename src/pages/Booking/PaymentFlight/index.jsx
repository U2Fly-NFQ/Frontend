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
  getRoundTripBookingFlight,
  getUserInformation,
} from '../../../redux/selectors'
import { createBookingFlight } from '../../../redux/slices/bookingFlightsSlice'
import { useTranslation } from 'react-i18next'
export default function PaymentFlight() {
  const [value, setValue] = useState(1)
  const [dataBooking, setDataBooking] = useState()
  const priceDiscount = useSelector(getInfoPriceAfterDiscount)
  const getDiscountInfo = useSelector(getDiscountForBookingAirline)
  const getPrice = useSelector(getInfoFlightInBookingSeat)
  const getFlightData = useSelector(getInfoFlightInBookingFight)
  const getSeatData = useSelector(getInfoFlightInBookingSeat)
  const userInformation = useSelector(getUserInformation)
  const getRoundTrip = useSelector(getRoundTripBookingFlight)
  const flightLocal = JSON.parse(localStorage.getItem('flight'))
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const onChange = (e) => {
    setValue(e.target.value)
  }
  useEffect(() => {
    setDataBooking(dataPayment[value])
  }, [value])
  const onFinish = () => {
    let priceTotal =
      getRoundTrip.seat !== undefined
        ? getPrice.price * 110 + getRoundTrip.seat.price * 110
        : getPrice.price * 110
    let discount =
      (getRoundTrip.seat !== undefined
        ? getPrice.price + getRoundTrip.seat.price
        : getPrice.price) * getDiscountInfo.percent
    let fetchDataValue = {
      passengerId: userInformation.id,
      flightId: getRoundTrip.id
        ? `${getFlightData.id},${getRoundTrip.id}`
        : `${getFlightData.id}`,
      seatTypeId: getSeatData.id,
      totalPrice: Math.floor(
        (priceTotal - discount * 100) * flightLocal.seatAvailable
      ),
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
            <ButtonOfPage title={t('flight-booking-page.Pay Now')} />
          </Form.Item>
        </>
      ),
    },
  ]

  return (
    <>
      <div className="booking-page__container__item__title">
        <h2>Payment Method</h2>
      </div>
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
    </>
  )
}
