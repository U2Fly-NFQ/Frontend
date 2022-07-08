import React from 'react'
import { useSelector } from 'react-redux'
import {
  getDiscountForBookingAirline,
  getInfoFlightInBookingSeat,
} from '../../../redux/selectors'
import { getRoundTripSeat } from '../../../redux/selectors/bookingFlightSelector'
import './index.scss'
import { useTranslation } from 'react-i18next'

export default function BookingTravelDate() {
  const seat = useSelector(getInfoFlightInBookingSeat)
  const seatRoungTrip = useSelector(getRoundTripSeat)
  const getDiscount = useSelector(getDiscountForBookingAirline)
  // const flight =
  const { t } = useTranslation()

  return (
    <div className="booking-travel-date">
      <div className="booking-page__container__item__title">
        <h3>{t('flight-booking-page.Booking amount')}</h3>
      </div>
      <div className="booking-travel-date__container">
        <ul className="booking-travel-date__container__value">
          <li>
            <div className="booking-travel-date__container__key">
              {seat.name +
                ' Price x ' +
                JSON.parse(localStorage.getItem('flight')).seatAvailable}
            </div>
            <div className="booking-travel-date__container__key">
              {'$ ' +
                (seatRoungTrip !== undefined
                  ? seatRoungTrip.price + seat.price
                  : seat.price)}
            </div>
          </li>
          <li>
            <div className="booking-travel-date__container__key">Tax</div>
            <div className="booking-travel-date__container__key">
              {seat.discount * 100}%
            </div>
          </li>
        </ul>
        <div className="booking-travel-date__container__amount">
          <ul>
            <li>
              <div className="booking-travel-date__container__key">
                {t('flight-booking-page.Subtotal')}
              </div>
              <div className="booking-travel-date__container__value">
                $
                {seatRoungTrip !== undefined
                  ? seatRoungTrip.price + seat.price
                  : seat.price}
              </div>
            </li>
            <li>
              <div className="booking-travel-date__container__key">
                {t('flight-booking-page.Discount')}
              </div>
              <div className="booking-travel-date__container__value">
                {`${getDiscount.percent * 100}% ($${
                  (seatRoungTrip !== undefined
                    ? seatRoungTrip.price + seat.price
                    : seat.price) * getDiscount.percent
                })`}
              </div>
            </li>
            <li>
              <div className="booking-travel-date__container__key">
                {t('flight-booking-page.Coupon code')}
                {getDiscount.percent !== 0 && ` (${getDiscount.name})`}
              </div>
              <div className="booking-travel-date__container__value">
                $
                {(seatRoungTrip !== undefined
                  ? seatRoungTrip.price + seat.price
                  : seat.price) * getDiscount.percent}
              </div>
            </li>
          </ul>
        </div>
        <div className="booking-travel-date__container__total">
          <div className="booking-travel-date__container__amount__total__key">
            {t('flight-booking-page.Total Amount')}
          </div>
          <div className="booking-travel-date__container__amount__total__value">
            $
            {(seatRoungTrip !== undefined
              ? seatRoungTrip.price + seat.price
              : seat.price) -
              (seatRoungTrip !== undefined
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
