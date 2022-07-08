import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Steps } from 'antd'
import { getCurrentMethodInBookingFlight } from '../../../redux/selectors'
import './index.scss'
import { changeCurrentMethod } from '../../../redux/slices/bookingFlightsSlice'
import { useTranslation } from 'react-i18next'

export default function BookingSteps({ contentTop, contentBottom, ticketId }) {
  const dispatch = useDispatch()
  const getCurrentMethod = useSelector(getCurrentMethodInBookingFlight)
  const { t } = useTranslation()

  const { Step } = Steps
  const onChange = (value) => {
    // dispatch(changeCurrentMethod(value))
    if (value < 2) {
      dispatch(changeCurrentMethod(0))
    }
  }

  return (
    <Steps
      type="navigation"
      className="booking-steps"
      current={getCurrentMethod}
      onChange={onChange}
    >
      <Step
        className="booking-steps__flight"
        title={
          <div className="booking-steps__flight__container">
            <div className="booking-steps__flight__logo">
              <i className="fa-regular fa-user"></i>
            </div>
            <div>
              <div className="booking-steps__flight__content">
                <h4>{t('flight-booking-page.Passenger information')}</h4>
              </div>
            </div>
          </div>
        }
      />
      <Step
        title={
          <div className="booking-steps__flight__container">
            <div className="booking-steps__flight__logo">
              <i className="fa-solid fa-credit-card"></i>
            </div>
            <div>
              <div className="booking-steps__flight__content">
                <h4>{t('flight-booking-page.Payment methods')}</h4>
              </div>
            </div>
          </div>
        }
      />
      <Step
        status="wait"
        title={
          <div className="booking-steps__flight__container">
            <div className="booking-steps__flight__logo">
              <i className="fa-solid fa-circle-check"></i>
            </div>
            <div>
              <div className="booking-steps__flight__content">
                <h4>{t('flight-booking-page.payment successful')}</h4>
              </div>
            </div>
          </div>
        }
      />
    </Steps>
  )
}
