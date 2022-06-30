import { Form, Layout } from 'antd'
import { useDispatch } from 'react-redux'
import './index.scss'
import {
  ButtonOfPage,
  FlightListBanner,
  SelectDropDown,
} from '../../components'
import BookingPayment from './BookingPayment'
import DetailFlights from './detailFlights'
import BookingTravelDate from './BookingTravelDate'
import BookingCoupon from './BookingCoupon'
import { useEffect } from 'react'
import { addDataIntoBookingFlight } from '../../redux/slices/bookingFlightsSlice'
import { useNavigate } from 'react-router-dom'
const { Header, Footer, Sider, Content } = Layout
function FlightList() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    // dispatch(getDataFlights())
  }, [])

  const onFinish = (values) => {
    dispatch(addDataIntoBookingFlight(values))
    navigate('/booking-success')
  }
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
                onFinish={onFinish}
              >
                <Form.Item
                  name="firstName"
                  style={{
                    display: 'inline-block',
                    width: '50%',
                    margin: '0px',
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
                  name="lastName"
                  style={{ display: 'inline-block', width: '50%' }}
                  rules={[
                    { required: true, message: 'Please input your last name!' },
                  ]}
                >
                  <input
                    name="firstName"
                    className="form-control"
                    placeholder="First name*"
                  />
                </Form.Item>
                <Form.Item
                  name="emailAddress"
                  style={{
                    display: 'inline-block',
                    width: '50%',
                    margin: '0px',
                  }}
                >
                  <input
                    name="emailAddress"
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
                  name="apartment"
                  style={{ display: 'inline-block', width: '50%' }}
                >
                  <input
                    name="apartment"
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
                  name="state"
                  style={{ display: 'inline-block', width: '50%' }}
                >
                  <SelectDropDown
                    name="state"
                    ListData={['Việt Nam', 'Malaysia', 'Lào']}
                  />
                </Form.Item>
                <Form.Item
                  name="country"
                  style={{
                    display: 'inline-block',
                    width: '50%',
                    margin: '0px',
                  }}
                >
                  <SelectDropDown
                    name="country"
                    ListData={['Việt Nam', 'Malaysia', 'Lào']}
                  />
                </Form.Item>

                <Form.Item
                  name="passport"
                  style={{ display: 'inline-block', width: '50%' }}
                  rules={[
                    { required: true, message: 'Please input your Passport!' },
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

                <Form.Item style={{ marginTop: '20px' }}>
                  <ButtonOfPage title={'Pay Now'} />
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
        <div className="booking-page__container__item">
          <div className="booking-page__container__item__content">
            <div className="booking-page__container__itemContent">
              <DetailFlights />
            </div>
          </div>
          <div
            className="booking-page__container__item__content"
            style={{ padding: '20px', marginTop: '20px' }}
          >
            <BookingCoupon />
          </div>
          <div
            className="booking-page__container__item__content"
            style={{ padding: '20px', marginTop: '20px' }}
          >
            <div className="booking-page__container__itemContent">
              <BookingTravelDate />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlightList
