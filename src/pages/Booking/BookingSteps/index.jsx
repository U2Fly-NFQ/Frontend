import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Steps } from 'antd'
import { getCurrentMethodInBookingFlight } from '../../../redux/selectors'
import './index.scss'
import { changeCurrentMethod } from '../../../redux/slices/bookingFlightsSlice'

export default function BookingSteps({ contentTop, contentBottom }) {
  const dispatch = useDispatch()
  const getCurrentMethod = useSelector(getCurrentMethodInBookingFlight)

  const { Step } = Steps
  const onChange = (value) => {
    // setCurrent(value)
    console.log(value)
    dispatch(changeCurrentMethod(value))
  }
  return (
    <Steps
      type="navigation"
      className="booking-steps"
      current={getCurrentMethod}
      onChange={onChange}
    >
      <Step
        status="finish"
        className="booking-steps__flight"
        title={
          <div className="booking-steps__flight__container">
            <div className="booking-steps__flight__logo">
              <i class="fa-regular fa-user"></i>
            </div>
            <div>
              <div className="booking-steps__flight__content">
                <h4>Thông tin khách Hàng</h4>
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
              <i class="fa-solid fa-credit-card"></i>
            </div>
            <div>
              <div className="booking-steps__flight__content">
                <h4>Phương Thức Thanh Toán</h4>
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
              <i class="fa-solid fa-circle-check"></i>
            </div>
            <div>
              <div className="booking-steps__flight__content">
                <h4>Thanh Toán Thành Công</h4>
              </div>
            </div>
          </div>
        }
      />
    </Steps>
  )
}
