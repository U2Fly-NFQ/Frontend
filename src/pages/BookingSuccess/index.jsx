import { useDispatch, useSelector } from 'react-redux'
import './index.scss'
import { FlightListBanner, PageLoadingAnimation } from '../../components'

import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getLoaddingMethodInBookingFlight } from '../../redux/selectors'
import { scrollTo } from '../../utils/scroll'
import { getUserInformationSuccess } from '../../redux/selectors/bookingSuccessSelector'
import BookingSteps from '../Booking/BookingSteps'
import BookingSuccessDetail from './BookingSuccessDetail'
import './index.scss'
import { getTicketInformation } from '../../redux/slices/bookingSuccessSlice'
import moment from 'moment'
function BookingSuccessPage() {
  const navigate = useNavigate()
  const dateUserBooking = useSelector(getUserInformationSuccess)
  const getLoadding = useSelector(getLoaddingMethodInBookingFlight)
  const { ticketId } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    if (ticketId) {
      dispatch(getTicketInformation(ticketId))
    } else {
      navigate('/flights')
    }
  }, [])

  useEffect(() => {
    scrollTo('650')
  }, [])
  console.log(dateUserBooking.birthday)
  return (
    <>
      {getLoadding && <PageLoadingAnimation />}
      <div className="booking-page ">
        <FlightListBanner />
        <div
          className="booking-page__container grid wide"
          style={{ display: ticketId === undefined ? 'flex' : 'block' }}
        >
          <BookingSteps ticketId={ticketId} step={2} />
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
                      <span className="highlight-main">
                        {dateUserBooking.name}
                      </span>
                      , your order was paid successfully!
                    </h3>
                    <h6>
                      our booking details has been sent to:
                      <span className="highlight-main">
                        <a href="https://mail.google.com/mail/u/0/#search/support%40tolehoai.me">
                          {dateUserBooking.email || 'thang@nfq.com'}
                        </a>
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
                        {dateUserBooking.birthday &&
                          moment(dateUserBooking.birthday.date).format(
                            'DD-MM-YYYY'
                          )}
                      </span>
                    </li>
                    <li>
                      <span>Email address:</span>
                      <span className="value">
                        {dateUserBooking.email || 'No Email'}
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
                  </ul>
                </div>
              </div>
              <div className="Booking-success__container__item">
                <BookingSuccessDetail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookingSuccessPage
