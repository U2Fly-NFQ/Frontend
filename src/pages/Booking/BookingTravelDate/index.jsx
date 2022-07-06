import React from 'react'
import { useSelector } from 'react-redux'
import {
  getDiscountForBookingAirline,
  getInfoFlightInBookingSeat,
} from '../../../redux/selectors'
import './index.scss'
import { useTranslation } from 'react-i18next'

export default function BookingTravelDate() {
  const getSeat = useSelector(getInfoFlightInBookingSeat)
  const getDiscount = useSelector(getDiscountForBookingAirline)
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
              {t('flight-booking-page.multiply price', {
                multiply: 2,
                class: getSeat.name.toLowerCase(),
              })}
            </div>
            <div className="booking-travel-date__container__key">
              {'$ ' + getSeat.price}
            </div>
          </li>
          <li>
            <div className="booking-travel-date__container__key">
              {t('flight-booking-page.Discount')}
            </div>
            <div className="booking-travel-date__container__key">
              - {getDiscount.percent * 100}%
            </div>
          </li>
          <li>
            <div className="booking-travel-date__container__key">
              {t('flight-booking-page.Tax')}
            </div>
            <div className="booking-travel-date__container__key">5%</div>
          </li>
        </ul>
        <div className="booking-travel-date__container__amount">
          <div className="booking-travel-date__container__amount__remove">
            {t('flight-booking-page.remove')}
          </div>
          <ul>
            <li>
              <div className="booking-travel-date__container__key">
                {t('flight-booking-page.Subtotal')}
              </div>
              <div className="booking-travel-date__container__value">
                ${getSeat.price}
              </div>
            </li>
            <li>
              <div className="booking-travel-date__container__key">
                {t('flight-booking-page.Coupon code')} (
                {t('flight-booking-page.OFF')} 5000)
              </div>
              <div className="booking-travel-date__container__value">
                ${getSeat.price * getDiscount.percent}
              </div>
            </li>
          </ul>
        </div>
        <div className="booking-travel-date__container__total">
          <div className="booking-travel-date__container__amount__total__key">
            {t('flight-booking-page.Total Amount')}
          </div>
          <div className="booking-travel-date__container__amount__total__value">
            ${getSeat.price - getSeat.price * getDiscount.percent}
          </div>
        </div>
      </div>
    </div>
  )
}
