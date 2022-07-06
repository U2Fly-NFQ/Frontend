import { Form, Layout } from 'antd'
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
  getInfoFlightInBookingArrival,
  getInfoFlightInBookingDeparture,
  getInfoFlightInBookingFight,
  getInfoFlightInBookingSeat,
  getLoaddingMethodInBookingFlight,
  getUserInformation,
} from '../../redux/selectors'
import BookingSteps from './BookingSteps'
import BookingPassenger from './BookingPassenger'
import PaymentFlight from './PaymentFlight'
import BookingSuccessPage from './BookingSuccess'
import { scrollTo } from '../../utils/scroll'
import { getBookingInformationSuccess } from '../../redux/selectors/bookingSuccessSelector'
import { getLsObj } from '../../utils/localStorage'
import {
  getDataFlights,
  getRoundTripBookingFlightAsync,
} from '../../redux/slices/bookingFlightsSlice'
const { Header, Footer, Sider, Content } = Layout
function FlightList() {
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const arrival = useSelector(getInfoFlightInBookingArrival)
  const departure = useSelector(getInfoFlightInBookingDeparture)
  const getPrice = useSelector(getInfoFlightInBookingSeat)
  const userInformation = useSelector(getUserInformation)
  const getTicketStatus = useSelector(getBookingInformationSuccess)
  const getDataFlight = useSelector(getInfoFlightInBookingFight)
  const getCurrentMethod = useSelector(getCurrentMethodInBookingFlight) || 0
  const getLoadding = useSelector(getLoaddingMethodInBookingFlight)
  const { ticketId } = useParams()

  useEffect(() => {
    let flight = getLsObj('flight')
    let token = localStorage.getItem('token')

    if (flight.id) {
      dispatch(getDataFlights(flight.id))
      if (flight.roundId)
        dispatch(getRoundTripBookingFlightAsync(flight.roundId))
      if (flight.roundId) if (!token) navigate('/login')
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
          {ticketId === undefined ? (
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
          ) : (
            <BookingSuccessPage />
          )}
          {ticketId === undefined && (
            <div className="booking-page__container__item">
              <div className="booking-page__container__item__content block-container">
                <div className="booking-page__container__itemContent">
                  {getDataFlight.arrival && <DetailFlights />}
                </div>
              </div>
              <div
                className="booking-page__container__item__content block-container"
                // style={{ padding: '20px', marginTop: '20px' }}
              >
                {getDataFlight.arrival && <BookingTravelDate />}
              </div>
              <div
                className="booking-page__container__item__content block-container"
                // style={{ padding: '20px', marginTop: '20px' }}
              >
                <div className="booking-page__container__itemContent">
                  {<BookingCoupon />}
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
