import React from 'react'
import {
  getDiscountForBookingAirline,
  getInfoFlightInBookingSeat,
} from '../../../redux/selectors'
import { useSelector } from 'react-redux'
import moment from 'moment'
export default function BookingSuccessDetail() {
  const getPrice = useSelector(getInfoFlightInBookingSeat)
  const getDiscount = useSelector(getDiscountForBookingAirline)
  console.log(getDiscount)
  return (
    <div
      className="Booking-success__container__content"
      style={{ display: 'block' }}
    >
      <div className="Booking-success__container__content__title">
        <h3>Booking details</h3>
      </div>
      <div className="Booking-success__container__content__info">
        <ul>
          <li>
            <span>Booking ID:</span>
            <span>#RB5783GH</span>
          </li>
          <li>
            <span>Booking date:</span>
            <span>{moment().format('LL')}</span>
          </li>
          <li>
            <span>Payment method:</span>
            <span>Bank transfer</span>
          </li>
          <li>
            <span>Booking status:</span>
            <span>Success</span>
          </li>
        </ul>
      </div>
      <div className="Booking-success__container__content__info">
        <ul>
          <li>
            <span>Adult Price x 1:</span>
            <span>${getPrice.price}</span>
          </li>
          <li className="change-color">
            <span>Discount</span>
            <span>{getDiscount.percent * 100} %</span>
          </li>
          <li>
            <span>Tax</span>
            <span>5%</span>
          </li>
        </ul>
      </div>
      <div className="Booking-success__container__content__info">
        <div className="section-remove-coupon">
          <span>remove</span>
        </div>
        <ul>
          <li className="change-color">
            <span>Subtotal</span>
            <span>${getPrice.price}</span>
          </li>
          <li>
            <span>Coupon code (OFF 5000)</span>
            <span>{getDiscount.percent * 100} %</span>
          </li>
        </ul>
      </div>
      <div className="Booking-success__container__content__info">
        <ul style={{ border: 'none' }}>
          <li className="change-color">
            <span>Total Amount</span>
            <span>
              ${getPrice.price - getPrice.price * getDiscount.percent}
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
