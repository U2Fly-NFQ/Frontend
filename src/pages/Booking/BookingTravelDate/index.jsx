import React from 'react'
import { useSelector } from 'react-redux'
import {
  getDiscountForBookingAirline,
  getInfoFlightInBookingSeat,
} from '../../../redux/selectors'
import { getRoundTripSeat } from '../../../redux/selectors/bookingFlightSelector'
import './index.scss'
export default function BookingTravelDate() {
  const seat = useSelector(getInfoFlightInBookingSeat)
  const seatRoungTrip = useSelector(getRoundTripSeat)
  const getDiscount = useSelector(getDiscountForBookingAirline)
  return (
    <div className="booking-travel-date">
      <div className="booking-page__container__item__title">
        <h3>Booking amount</h3>
      </div>
      <div className="booking-travel-date__container">
        <ul className="booking-travel-date__container__value">
          <li>
            <div className="booking-travel-date__container__key">
              {seat.name} Price x 1
            </div>
            <div className="booking-travel-date__container__key">
              {'$ ' +
                (seatRoungTrip.price
                  ? seatRoungTrip.price + seat.price
                  : seat.price)}
            </div>
          </li>
          <li>
            <div className="booking-travel-date__container__key">Discount</div>
            <div className="booking-travel-date__container__key">
              {`${getDiscount.percent * 100}% ($${
                (seatRoungTrip.price
                  ? seatRoungTrip.price + seat.price
                  : seat.price) * seat.discount
              })`}
            </div>
          </li>
        </ul>
        <div className="booking-travel-date__container__amount">
          <ul>
            <li>
              <div className="booking-travel-date__container__key">
                Subtotal
              </div>
              <div className="booking-travel-date__container__value">
                $
                {seatRoungTrip.price
                  ? seatRoungTrip.price + seat.price
                  : seat.price}
              </div>
            </li>
            <li>
              <div className="booking-travel-date__container__key">Tax</div>
              <div className="booking-travel-date__container__value">
                {seat.discount * 100}%
              </div>
            </li>
            <li>
              <div className="booking-travel-date__container__key">
                Coupon code (OFF 5000)
              </div>
              <div className="booking-travel-date__container__value">
                $
                {(seatRoungTrip.price
                  ? seatRoungTrip.price + seat.price
                  : seat.price) * getDiscount.percent}
              </div>
            </li>
          </ul>
        </div>
        <div className="booking-travel-date__container__total">
          <div className="booking-travel-date__container__amount__total__key">
            Total Amount
          </div>
          <div className="booking-travel-date__container__amount__total__value">
            $
            {(seatRoungTrip.price
              ? seatRoungTrip.price + seat.price
              : seat.price) -
              (seatRoungTrip.price
                ? seatRoungTrip.price + seat.price
                : seat.price) *
                getDiscount.percent +
              seat.discount * 100}
          </div>
        </div>
      </div>
    </div>
  )
}
