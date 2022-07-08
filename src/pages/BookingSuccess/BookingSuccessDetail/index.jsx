import React from 'react'

import { useSelector } from 'react-redux'

import { getFlightInformationSuccess } from '../../../redux/selectors/bookingSuccessSelector'

export default function BookingSuccessDetail() {
  const getInforFlight = useSelector(getFlightInformationSuccess)
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
            <span>#{getInforFlight.id}</span>
          </li>
          <li>
            <span>Booking date:</span>
            <span>{getInforFlight.createdAt}</span>
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
            <span> thang Price x 1:</span>
            <span>${getInforFlight.price}</span>
          </li>
          <li className="change-color">
            <span>Discount</span>
            <span>{getInforFlight.discount || 0 * 100} %</span>
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
            <span>${getInforFlight.price}</span>
          </li>
          <li>
            <span>Coupon code (OFF 5000)</span>
            <span>{`- ${
              getInforFlight.discount * getInforFlight.price || 0
            }`}</span>
          </li>
        </ul>
      </div>
      <div className="Booking-success__container__content__info">
        <ul style={{ border: 'none' }}>
          <li className="change-color">
            <span>Total Amount</span>
            <span>${getInforFlight.discount * getInforFlight.price || 0}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
