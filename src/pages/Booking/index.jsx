import { Layout } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import './index.scss'
import { FlightListBanner, PageLoadingAnimation } from '../../components'
import DetailFlights from './detailFlights'
import BookingTravelDate from './BookingTravelDate'
import BookingCoupon from './BookingCoupon'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  getCurrentMethodInBookingFlight,
  getInfoFlightInBookingFight,
  getInfoFlightInBookingSeat,
  getLoaddingMethodInBookingFlight,
} from '../../redux/selectors'
import BookingSteps from './BookingSteps'
import BookingPassenger from './BookingPassenger'
import PaymentFlight from './PaymentFlight'
import { scrollTo } from '../../utils/scroll'
import { getLsObj } from '../../utils/localStorage'
import {
  getDataFlights,
  getRoundTripBookingFlightAsync,
} from '../../redux/slices/bookingFlightsSlice'
const { Header, Footer, Sider, Content } = Layout
function FlightList() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const getDataBookingFlight = useSelector(getInfoFlightInBookingFight)
  const getCurrentMethod = useSelector(getCurrentMethodInBookingFlight) || 0
  const getLoadding = useSelector(getLoaddingMethodInBookingFlight)
  const seat = useSelector(getInfoFlightInBookingSeat)
  const { ticketId } = useParams()

  // console.log(JSON.parse(localStorage.getItem('flight')))
  // localStorage.setItem(
  //   'flight',
  //   '{"id":3,"username":"sang@gg.com","roles":{"1":"ROLE_ADMIN","2":"ROLE_USER"}}'
  // )
  // console.log(getDataBookingFlight)
  useEffect(() => {
    let flight = getLsObj('flight')
    let token = localStorage.getItem('token')

    if (flight.id) {
      dispatch(getDataFlights(flight.id))
      dispatch(getRoundTripBookingFlightAsync(flight.roundId))
      if (!token) navigate('/login')
    } else {
      navigate(-1)
    }
  }, [])

  useEffect(() => {
    scrollTo('650')
  }, [])
  return (
    <>
      {getLoadding && <PageLoadingAnimation />}
      <div className="booking-page ">
        <FlightListBanner />
        <div
          className="booking-page__container grid wide"
          style={{ display: ticketId === undefined ? 'flex' : 'block' }}
        >
          <BookingSteps ticketId={ticketId} />

          <div className="booking-page__container__item">
            <div className="booking-page__container__itemContent">
              <div className="booking-page__container__item__content">
                {getCurrentMethod === 0 ? (
                  <BookingPassenger />
                ) : (
                  <PaymentFlight />
                )}
              </div>
            </div>
          </div>

          {getDataBookingFlight.code && (
            <div className="booking-page__container__item">
              <div className="booking-page__container__item__content block-container">
                <div className="booking-page__container__itemContent">
                  {seat && <DetailFlights />}
                </div>
              </div>
              <div className="booking-page__container__item__content block-container">
                {seat && <BookingTravelDate />}
              </div>
              <div className="booking-page__container__item__content block-container">
                <div className="booking-page__container__itemContent">
                  {seat && <BookingCoupon />}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default FlightList
