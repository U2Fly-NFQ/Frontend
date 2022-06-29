import { Button, Form, Layout } from 'antd'
import './index.scss'
import { FlightListBanner, InputOFPage } from '../../components'
const { Header, Footer, Sider, Content } = Layout
function FlightList() {
  return (
    <div className="booking-page ">
      <FlightListBanner />
      <div className="booking-page__container grid wide">
        <div className="booking-page__container__item">
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
                style={{ display: 'inline-block', width: '50%', margin: '0px' }}
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <InputOFPage />
              </Form.Item>

              <Form.Item
                name="password"
                style={{ display: 'inline-block', width: '50%' }}
              >
                <InputOFPage />
              </Form.Item>
              <Form.Item
                name="username"
                style={{ display: 'inline-block', width: '50%', margin: '0px' }}
              >
                <InputOFPage />
              </Form.Item>

              <Form.Item
                name="password"
                style={{ display: 'inline-block', width: '50%' }}
              >
                <InputOFPage />
              </Form.Item>
              <Form.Item
                name="username"
                style={{ display: 'inline-block', width: '50%', margin: '0px' }}
              >
                <InputOFPage />
              </Form.Item>

              <Form.Item
                name="password"
                style={{ display: 'inline-block', width: '50%' }}
              >
                <InputOFPage />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="booking-page__container__item"></div>
      </div>
    </div>
  )
}

export default FlightList
