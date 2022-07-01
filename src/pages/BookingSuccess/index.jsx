import React, { useEffect } from 'react'
import { FlightListBanner } from '../../components'
import './index.scss'
import { useSelector } from 'react-redux'
import { getInfoUserInBookingFight } from '../../redux/selectors'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import BookingSuccessDetail from './BookingSuccessDetail'
export default function BookingSuccessPage() {
  const navigate = useNavigate()
  const dateUserBooking = useSelector(getInfoUserInBookingFight)
  console.log()
  useEffect(() => {
    if (dateUserBooking.firstName === undefined) {
      navigate('/booking-flights')
    }
    console.log(dateUserBooking.date_picker)
  }, [])
  return (
    <div className="Booking-success">
      <FlightListBanner />
      <div className="Booking-success__container  grid wide">
        <div className="Booking-success__container__items">
          <div className="Booking-success__container__item">
            <div className="Booking-success__container__content">
              <div className="Booking-success__container__content__logo">
                <img
                  src="https://andit.co/projects/html/and-tour/assets/img/icon/right.png"
                  alt="check_logo"
                />
              </div>
              <div className="Booking-success__container__content__mess">
                <h3>
                  <span className="highlight-main">
                    {dateUserBooking.firstName}
                  </span>
                  , your order was paid successfully!
                </h3>
                <h6>
                  our booking details has been sent to:
                  <span className="highlight-main">
                    {dateUserBooking.firstName}
                  </span>
                </h6>
              </div>
            </div>
            <div className="Booking-success__container__content__title">
              <h3>Your information</h3>
            </div>
            <div className="Booking-success__container__content">
              <ul className="Booking-success__container__content-info">
                <li className="Booking-success__container__">
                  <span>First name:</span>
                  <span class="value">{dateUserBooking.firstName}</span>
                </li>
                <li>
                  <span>Day of Bỉrth:</span>
                  <span class="value">
                    {moment(dateUserBooking.date_picker).format('DD-MM-YYYY')}
                  </span>
                </li>
                <li>
                  <span>Email address:</span>
                  <span class="value">
                    {dateUserBooking.emailAddress || 'No Email'}
                  </span>
                </li>
                <li>
                  <span>Address:</span>
                  <span class="value">
                    {dateUserBooking.streetAddress || 'No Address'}
                  </span>
                </li>
                <li>
                  <span>Number:</span>
                  <span class="value">
                    {dateUserBooking.number || 'No Phone'}
                  </span>
                </li>
                <li>
                  <span>State:</span>
                  <span class="value">
                    {dateUserBooking.firstName || 'No State'}
                  </span>
                </li>
                <li>
                  <span>Passport:</span>
                  <span class="value">
                    {dateUserBooking.passport || 'No Postal Passport'}
                  </span>
                </li>
                <li>
                  <span>visa:</span>
                  <span class="value">{dateUserBooking.visa || 'No visa'}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="Booking-success__container__item">
            <BookingSuccessDetail />
          </div>
        </div>
      </div>
    </div>
  )
}
