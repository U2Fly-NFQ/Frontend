import React from 'react'
import { useSelector } from 'react-redux'
import { Steps } from 'antd'
import {
  getInfoFlightInBookingArrival,
  getInfoFlightInBookingDeparture,
  getInfoStartTime,
} from '../../../redux/selectors'
import './index.scss'

import { ArrowRightOutlined } from '@ant-design/icons'
import moment from 'moment'
export default function BookingSteps() {
  const arrival = useSelector(getInfoFlightInBookingArrival)
  const departure = useSelector(getInfoFlightInBookingDeparture)
  const startTime = useSelector(getInfoStartTime)
  const { Step } = Steps
  console.log()
  return (
    <Steps type="navigation" className="booking-steps">
      <Step
        status="finish"
        className="booking-steps__flight"
        title={
          <div className="booking-steps__flight__container">
            <div className="booking-steps__flight__content">
              <div>
                <i class="fa-solid fa-plane-up"></i>
              </div>
              <div> {arrival.iata}</div>
              <div>
                <ArrowRightOutlined />
              </div>
              <div>{departure.iata}</div>
            </div>
            <div className="booking-steps__flight__content">
              <p>{moment(startTime.date).format('DD.MM.YYYY')}</p>
            </div>
          </div>
        }
      />
      <Step status="process" title="Step 2" />
      <Step status="wait" title="Step 3" />
      <Step status="wait" title="Step 4" />
    </Steps>
  )
}
