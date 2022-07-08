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
            <span> Price:</span>
            <span>
              $
              {(getInforFlight.price +
                getInforFlight.price * getInforFlight.discount) /
                100}
            </span>
          </li>
          <li className="change-color">
            <span>Discount</span>
            <span>{getInforFlight.discount * 100 || 0 * 100} %</span>
          </li>
        </ul>
      </div>

      <div className="Booking-success__container__content__info">
        <ul style={{ border: 'none' }}>
          <li className="change-color">
            <span>Total Amount</span>
            <span>${getInforFlight.price || 0}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
