import { Checkbox, Form, Layout } from 'antd'
import './index.scss'
import {
  ButtonOfPage,
  FlightListBanner,
  InputOFPage,
  SelectDropDown,
} from '../../components'
import BookingPayment from './BookingPayment'
import DetailFlights from './detailFlights'
import BookingTravelDate from './BookingTravelDate'
import BookingCoupon from './BookingCoupon'
const { Header, Footer, Sider, Content } = Layout
function FlightList() {
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
                name="basic"
                wrapperCol={{
                  span: 22,
                }}
                initialValues={{
                  remember: true,
                }}
              >
                <Form.Item
                  name="username"
                  style={{
                    display: 'inline-block',
                    width: '50%',
                    margin: '0px',
                  }}
                  rules={[
                    { required: true, message: 'Please input your username!' },
                  ]}
                >
                  <InputOFPage placeholder="Frist name*" />
                </Form.Item>

                <Form.Item
                  name="lastname"
                  style={{ display: 'inline-block', width: '50%' }}
                >
                  <InputOFPage placeholder="Last name*" />
                </Form.Item>
                <Form.Item
                  name="username"
                  style={{
                    display: 'inline-block',
                    width: '50%',
                    margin: '0px',
                  }}
                >
                  <InputOFPage placeholder={'Email address (Optional)'} />
                </Form.Item>

                <Form.Item
                  name="password"
                  style={{ display: 'inline-block', width: '50%' }}
                >
                  <InputOFPage placeholder={'Mobile number*'} />
                </Form.Item>

                <Form.Item
                  name="password"
                  style={{
                    display: 'inline-block',
                    width: '100%',
                  }}
                  wrapperCol={{ span: 23 }}
                >
                  <InputOFPage placeholder={'Street address'} />
                </Form.Item>

                <Form.Item
                  name="password"
                  style={{ display: 'inline-block', width: '50%' }}
                >
                  <InputOFPage
                    placeholder={'Apartment, Suite, Hose no (Optional)'}
                  />
                </Form.Item>
                <Form.Item
                  name="City"
                  style={{
                    display: 'inline-block',
                    width: '50%',
                    margin: '0px',
                  }}
                >
                  <SelectDropDown
                    ListData={['Cần Thơ', 'Thành Phố Hồ Chí Minh', 'Hà Nội']}
                  />
                </Form.Item>

                <Form.Item
                  name="State"
                  style={{ display: 'inline-block', width: '50%' }}
                >
                  <SelectDropDown ListData={['Việt Nam', 'Malaysia', 'Lào']} />
                </Form.Item>
                <Form.Item
                  name="Contry"
                  style={{
                    display: 'inline-block',
                    width: '50%',
                    margin: '0px',
                  }}
                >
                  <SelectDropDown ListData={['Việt Nam', 'Malaysia', 'Lào']} />
                </Form.Item>

                <Form.Item
                  name="password"
                  style={{ display: 'inline-block', width: '50%' }}
                >
                  <InputOFPage placeholder={'Passport no.'} />
                </Form.Item>

                <Form.Item
                  name="password"
                  style={{ display: 'inline-block', width: '50%' }}
                >
                  <InputOFPage placeholder={'Visa no.'} />
                </Form.Item>

                <div className="booking-page__container__item__title">
                  <h2>Payment method</h2>
                </div>
                <BookingPayment />
                <Form.Item
                  name="password"
                  style={{
                    display: 'inline-block',
                    width: '50%',
                    paddingTop: '10px',
                  }}
                >
                  <Checkbox>
                    <span>
                      I read and accept all{' '}
                      <a style={{ color: '#8b3eea' }}> Terms and conditios</a>
                    </span>
                  </Checkbox>
                </Form.Item>
                <Form.Item>
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
