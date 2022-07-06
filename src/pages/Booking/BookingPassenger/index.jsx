import React, { useEffect } from 'react'
import { Form, DatePicker, Checkbox } from 'antd'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInformation } from '../../../redux/selectors'
import {
  addDataIntoBookingFlight,
  changeCurrentMethod,
} from '../../../redux/slices/bookingFlightsSlice'
import { ButtonOfPage, SelectDropDown } from '../../../components'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function BookingPassenger() {
  const userInformation = useSelector(getUserInformation)
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const { t } = useTranslation()

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
      date_picker: moment(),
      email: userInformation.email,
      streetAddress: userInformation.address,
      identificationCard: userInformation.identification,
    })
  }, [userInformation])
  return (
    <>
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
            placeholder={t('flight-booking-page.First name')}
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
            placeholder={t('flight-booking-page.Your birthdate')}
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
            placeholder={t('flight-booking-page.Email address')}
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
            placeholder={t('flight-booking-page.Mobile number')}
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
            placeholder={t('flight-booking-page.Street address')}
          />
        </Form.Item>

        <Form.Item
          name="identificationCard"
          style={{ display: 'inline-block', width: '50%' }}
        >
          <input
            name="Identification Card"
            className="form-control"
            placeholder={t('flight-booking-page.Apartment')}
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
            placeholder={t('flight-booking-page.Passport no.')}
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
            placeholder={t('flight-booking-page.Visa no.')}
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
            {t('flight-booking-page.I have read the')}{' '}
            <Link to="">{t('flight-booking-page.agreement')}</Link>
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <ButtonOfPage title={t('flight-booking-page.Continue to payment')} />
        </Form.Item>
      </Form>
    </>
  )
}
