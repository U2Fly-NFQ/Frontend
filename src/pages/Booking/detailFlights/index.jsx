import React from 'react'
import './index.scss'
import { useSelector } from 'react-redux'
import FlightTrip from './flightTrip'

import {
  getInfoFlightInBookingFight,
  getInfoFlightInBookingSeat,
} from '../../../redux/selectors'
import { getRoundTripSeat } from '../../../redux/selectors/bookingFlightSelector'
export default function DetailFlights() {
  const getDataFlight = useSelector(getInfoFlightInBookingFight)
  const seat = useSelector(getInfoFlightInBookingSeat)
  const seatRoungTrip = useSelector(getRoundTripSeat)

  return (
    <div className="detail-flights__container">
      <div className="booking-page__container__item__title">
        <h2>Flights</h2>
      </div>
      {getDataFlight.code && <FlightTrip />}
      <div className="detail-flights__container__package-rules">
        <div className="booking-page__container__item__title">
          <h3>Flights Rules</h3>
        </div>
        <div className="detail-flights__container__package-rules__content">
          <ul>
            <li>
              <i className="fas fa-circle"></i> Buffet breakfast as per the
              Itinerary
            </li>
            <li>
              <i className="fas fa-circle"></i> Visit eight villages showcasing
              Polynesian culture
            </li>
            <li>
              <i className="fas fa-circle"></i> Complimentary Camel safari,
              Bonfire,
            </li>
            <li>
              <i className="fas fa-circle"></i> All toll tax, parking, fuel, and
              driver allowances
            </li>
            <li>
              <i className="fas fa-circle"></i> Comfortable and hygienic vehicle
            </li>
          </ul>
        </div>
      </div>
      <div className="detail-flights__container__price">
        <div className="booking-page__container__item__title">
          <h3>Prices</h3>
        </div>

        <div className="detail-flights__container__price__content">
          <h3>
            {'$' +
              (seatRoungTrip !== undefined
                ? seatRoungTrip.price + seat.price
                : seat.price)}
            <sub>
              / {seat.name} X
              {JSON.parse(localStorage.getItem('flight')).passengerNumber}
            </sub>
          </h3>
        </div>
      </div>
    </div>
  )
}
