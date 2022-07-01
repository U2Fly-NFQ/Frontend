import React, { useEffect } from 'react'
import { FlightListBanner } from '../../components'
import './index.scss'
import { useSelector } from 'react-redux'
import { getInfoUserInBookingFight } from '../../redux/selectors'
import { useNavigate } from 'react-router-dom'
export default function BookingSuccessPage() {
  const navigate = useNavigate()
  const dateUserBooking = useSelector(getInfoUserInBookingFight)

  useEffect(() => {
    if (dateUserBooking.firstName === undefined) {
      navigate('/booking-flights')
    }
    console.log(dateUserBooking.firstName)
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
                    {dateUserBooking.firstName + ' ' + dateUserBooking.lastName}
                  </span>
                  , your order was submitted successfully!
                </h3>
                <h6>
                  our booking details has been sent to:
                  <span className="highlight-main">
                    {dateUserBooking.emailAddress}
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
                  <span>Last name:</span>
                  <span class="value">{dateUserBooking.lastName}</span>
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
                    <span>10 February 2022</span>
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
                    <span>$40,000.00</span>
                  </li>
                  <li className="change-color">
                    <span>Discount</span>
                    <span>10%</span>
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
                    <span>$38,000.00</span>
                  </li>
                  <li>
                    <span>Coupon code (OFF 5000)</span>
                    <span>$5,000.00</span>
                  </li>
                </ul>
              </div>
              <div className="Booking-success__container__content__info">
                <ul style={{ border: 'none' }}>
                  <li className="change-color">
                    <span>Total Amount</span>
                    <span>$33,000.00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
