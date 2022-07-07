import React, { useEffect } from 'react'
import { Form, DatePicker, Checkbox } from 'antd'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInformation } from '../../../redux/selectors'
import {
  addDataIntoBookingFlight,
  changeCurrentMethod,
  getUserDataInBooking,
} from '../../../redux/slices/bookingFlightsSlice'
import { ButtonOfPage, SelectDropDown } from '../../../components'
export default function BookingPassenger() {
  const userInformation = useSelector(getUserInformation)
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  useEffect(() => {
    let userInfo = JSON.parse(localStorage.getItem('user'))
    if (userInfo) {
      dispatch(getUserDataInBooking(userInfo.id))
    }
  }, [])
  const onFinish = (values) => {
    let valueResult = {
      ...values,
      date_picker: moment(values.date_picker).format('YYYY-MM-DD'),
    }
    dispatch(changeCurrentMethod(1))
    dispatch(addDataIntoBookingFlight(valueResult))
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
  return (
    <>
      <div class="booking-page__container__item__title">
        <h2>Passengers information</h2>
      </div>
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
          format="DD-MM-YYYY"
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
            format="DD-MM-YYYY"
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
            placeholder="Email address"
          />
        </Form.Item>

        <Form.Item
          name="number"
          style={{ display: 'inline-block', width: '50%' }}
          rules={[{ required: true, message: 'Please input your number !' }]}
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
          rules={[{ required: true, message: 'Please input your visa!' }]}
        >
          <input
            name="visa"
            className="form-control"
            placeholder={'Visa no.'}
          />
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          style={{ marginTop: '10px' }}
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error('Should accept agreement')),
            },
          ]}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <ButtonOfPage title="Continue to payment" />
        </Form.Item>
      </Form>
    </>
  )
}
