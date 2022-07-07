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
  getInfoFlightInBookingSeat,
  getLoaddingMethodInBookingFlight,
  getUserInformation,
} from '../../redux/selectors'
import BookingSteps from './BookingSteps'
import BookingPassenger from './BookingPassenger'
import PaymentFlight from './PaymentFlight'
import { scrollTo } from '../../utils/scroll'
import { getBookingInformationSuccess } from '../../redux/selectors/bookingSuccessSelector'
import { getLsObj } from '../../utils/localStorage'
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
  const getCurrentMethod = useSelector(getCurrentMethodInBookingFlight) || 0
  const getLoadding = useSelector(getLoaddingMethodInBookingFlight)
  const { ticketId } = useParams()

  // console.log(JSON.parse(localStorage.getItem('flight')))
  // localStorage.setItem(
  //   'flight',
  //   '{"id":3,"username":"sang@gg.com","roles":{"1":"ROLE_ADMIN","2":"ROLE_USER"}}'
  // )

  useEffect(() => {
    let flight = getLsObj('flight')
    let token = localStorage.getItem('token')

    if (flight.id) {
      if (!token) navigate('/login')
    } else {
      // navigate(-1)
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

          {ticketId === undefined && (
            <div className="booking-page__container__item">
              <div className="booking-page__container__item__content block-container">
                <div className="booking-page__container__itemContent">
                  {<DetailFlights />}
                </div>
              </div>
              <div className="booking-page__container__item__content block-container">
                {<BookingTravelDate />}
              </div>
              <div className="booking-page__container__item__content block-container">
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
