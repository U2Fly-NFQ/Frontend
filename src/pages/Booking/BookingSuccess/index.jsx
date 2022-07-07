import React from 'react'
import './index.scss'
import { useSelector } from 'react-redux'
import { getUserInformationSuccess } from '../../../redux/selectors/bookingSuccessSelector'
import BookingSuccessDetail from './BookingSuccessDetail'
export default function BookingSuccessPage() {
  const dateUserBooking = useSelector(getUserInformationSuccess)

  return (
    <div className="Booking-success">
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
                <span className="highlight-main">{dateUserBooking.name}</span>,
                your order was paid successfully!
              </h3>
              <h6>
                our booking details has been sent to:
                <span className="highlight-main">
                  {dateUserBooking.email || 'thang@nfq.com'}
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
                <span>Full name:</span>
                <span className="value">{dateUserBooking.name}</span>
              </li>
              <li>
                <span>Day of Birth:</span>
                <span className="value">
                  {dateUserBooking.birthday || 'No provided'}
                </span>
              </li>
              <li>
                <span>Email address:</span>
                <span className="value">
                  {dateUserBooking.emailAddress || 'No Email'}
                </span>
              </li>
              <li>
                <span>identification:</span>
                <span className="value">
                  {dateUserBooking.identification || 'No identification'}
                </span>
              </li>

              <li>
                <span>Passport:</span>
                <span className="value">
                  {dateUserBooking.passport || 'No Postal Passport'}
                </span>
              </li>
              <li>
                <span>visa:</span>
                <span className="value">
                  {dateUserBooking.visa || 'No visa'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="Booking-success__container__item">
          <BookingSuccessDetail />
        </div>
      </div>
    </div>
  )
}
