import { Form, Layout } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import './index.scss'
import { FlightListBanner } from '../../components'
import DetailFlights from './detailFlights'
import { useLoadingContext } from 'react-router-loading'
import BookingTravelDate from './BookingTravelDate'
import BookingCoupon from './BookingCoupon'
import { useEffect } from 'react'
import {
  getDataFlights,
  getUserDataInBooking,
} from '../../redux/slices/bookingFlightsSlice'
import { useNavigate } from 'react-router-dom'
import {
  getCurrentMethodInBookingFlight,
  getInfoFlightInBookingArrival,
  getInfoFlightInBookingDeparture,
  getInfoFlightInBookingSeat,
  getUserInformation,
} from '../../redux/selectors'
import BookingSteps from './BookingSteps'
import BookingPassenger from './BookingPassenger'
import PaymentFlight from './PaymentFlight'
import BookingSuccessPage from './BookingSuccess'
const { Header, Footer, Sider, Content } = Layout
function FlightList() {
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const arrival = useSelector(getInfoFlightInBookingArrival)
  const departure = useSelector(getInfoFlightInBookingDeparture)
  const getPrice = useSelector(getInfoFlightInBookingSeat)
  const userInformation = useSelector(getUserInformation)
  const getCurrentMethod = useSelector(getCurrentMethodInBookingFlight)
  // console.log(JSON.parse(localStorage.getItem('flight')))
  // localStorage.setItem(
  //   'flight',
  //   '{"id":3,"username":"sang@gg.com","roles":{"1":"ROLE_ADMIN","2":"ROLE_USER"}}'
  // )

  useEffect(() => {
    let dataFlight = JSON.parse(localStorage.getItem('flight'))
    let userInfo = JSON.parse(localStorage.getItem('user'))
    if (dataFlight.id !== undefined) {
      dispatch(getDataFlights(dataFlight.id))
      dispatch(getUserDataInBooking(userInfo.id))
    } else {
      navigate('/flight')
    }
  }, [])

  const loadingContext = useLoadingContext()

  const loading = async () => {
    loadingContext.done()
  }
  useEffect(() => {
    loading()
  }, [])
  return (
    <div className="booking-page ">
      <FlightListBanner />
      <div
        className="booking-page__container grid wide"
        style={{ display: getCurrentMethod < 2 ? 'flex' : 'block' }}
      >
        {arrival && <BookingSteps />}
        {getCurrentMethod < 2 ? (
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
        {getCurrentMethod < 2 && (
          <div className="booking-page__container__item">
            <div className="booking-page__container__item__content">
              <div className="booking-page__container__itemContent">
                {arrival && <DetailFlights />}
              </div>
            </div>
            <div
              className="booking-page__container__item__content"
              style={{ padding: '20px', marginTop: '20px' }}
            >
              {getPrice && <BookingCoupon />}
            </div>
            <div
              className="booking-page__container__item__content"
              style={{ padding: '20px', marginTop: '20px' }}
            >
              <div className="booking-page__container__itemContent">
                {getPrice && <BookingTravelDate />}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FlightList
