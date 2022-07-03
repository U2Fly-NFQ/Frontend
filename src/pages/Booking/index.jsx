import { Form, Layout, DatePicker } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import './index.scss'
import { FlightListBanner, SelectDropDown } from '../../components'
import BookingPayment from './BookingPayment'
import DetailFlights from './detailFlights'
import { useLoadingContext } from 'react-router-loading'
import BookingTravelDate from './BookingTravelDate'
import BookingCoupon from './BookingCoupon'
import { useEffect } from 'react'
import {
  addDataIntoBookingFlight,
  getDataFlights,
  getUserDataInBooking,
} from '../../redux/slices/bookingFlightsSlice'
import { useNavigate } from 'react-router-dom'
import {
  getInfoFlightInBookingArrival,
  getInfoFlightInBookingSeat,
  getUserInformation,
} from '../../redux/selectors'
import moment from 'moment'
const { Header, Footer, Sider, Content } = Layout
function FlightList() {
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const arrival = useSelector(getInfoFlightInBookingArrival)
  const getPrice = useSelector(getInfoFlightInBookingSeat)
  const userInformation = useSelector(getUserInformation)
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
  const onFinish = (values) => {
    dispatch(addDataIntoBookingFlight(values))
    // navigate('/booking-success')
  }
  useEffect(() => {
    form.setFieldsValue({
      firstName: userInformation.name,
      date_picker: moment(userInformation.birthday),
      email: userInformation.email,
      streetAddress: userInformation.address,
      identificationCard: userInformation.identification,
    })
  }, [userInformation])

  const loadingContext = useLoadingContext()

  const loading = async () => {
    // loading some data

    // call method to indicate that loading is done and we are ready to switch
    loadingContext.done()
  }
  useEffect(() => {
    loading()
  }, [])
  return (
    <div className="booking-page ">
      <FlightListBanner />
      <div className="booking-page__container grid wide">
        <div className="booking-page__container__item">
          <div className="booking-page__container__itemContent">
            <div className="booking-page__container__item__title">
              <h2>Passenger information</h2>
            </div>
            <div className="booking-page__container__item__content">
              <Form
                wrapperCol={{
                  span: 22,
                }}
                form={form}
                initialValues={{}}
                onFinish={onFinish}
              >
                <Form.Item
                  name="firstName"
                  style={{
                    display: 'inline-block',
                    width: '50%',
                  }}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your first name!',
                    },
                  ]}
                >
                  <input
                    name="firstName"
                    className="form-control"
                    placeholder="First name*"
                  />
                </Form.Item>

                <Form.Item
                  name="date_picker"
                  style={{ display: 'inline-block', width: '50%' }}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your last name!',
                    },
                  ]}
                >
                  <DatePicker
                    placeholder="Ngày Sinh của bạn"
                    className="form-control"
                    format="YYYY-MM-DD"
                    style={{ display: 'flex' }}
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  style={{
                    display: 'inline-block',
                    width: '50%',
                  }}
                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ]}
                >
                  <input
                    name="email"
                    className="form-control"
                    placeholder="Email address (Optional)*"
                  />
                </Form.Item>

                <Form.Item
                  name="number"
                  style={{ display: 'inline-block', width: '50%' }}
                  rules={[
                    { required: true, message: 'Please input your number !' },
                  ]}
                >
                  <input
                    name="number"
                    className="form-control"
                    placeholder="Mobile number*"
                  />
                </Form.Item>

                <Form.Item
                  name="streetAddress"
                  style={{
                    display: 'inline-block',
                    width: '100%',
                  }}
                  wrapperCol={{ span: 23 }}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your street address!',
                    },
                  ]}
                >
                  <input
                    name="streetAddress"
                    className="form-control"
                    placeholder="Street address*"
                  />
                </Form.Item>

                <Form.Item
                  name="identificationCard"
                  style={{ display: 'inline-block', width: '50%' }}
                >
                  <input
                    name="Identification Card"
                    className="form-control"
                    placeholder="Apartment*"
                  />
                </Form.Item>
                <Form.Item
                  name="city"
                  style={{
                    display: 'inline-block',
                    width: '50%',
                    margin: '0px',
                  }}
                >
                  <SelectDropDown
                    name="city"
                    ListData={['Cần Thơ', 'Thành Phố Hồ Chí Minh', 'Hà Nội']}
                  />
                </Form.Item>

                <Form.Item
                  name="passport"
                  style={{ display: 'inline-block', width: '50%' }}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Passport!',
                    },
                  ]}
                >
                  <input
                    className="form-control"
                    name="passport"
                    placeholder={'Passport no.'}
                  />
                </Form.Item>

                <Form.Item
                  name="visa"
                  style={{ display: 'inline-block', width: '50%' }}
                  rules={[
                    { required: true, message: 'Please input your visa!' },
                  ]}
                >
                  <input
                    name="visa"
                    className="form-control"
                    placeholder={'Visa no.'}
                  />
                </Form.Item>

                <div className="booking-page__container__item__title">
                  <h2>Payment method</h2>
                </div>

                <BookingPayment />
              </Form>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  )
}

export default FlightList
