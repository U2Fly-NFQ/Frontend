import React from 'react'
import './index.scss'
import { useSelector } from 'react-redux'
import FlightTrip from './flightTrip'

import { getInfoFlightInBookingFight } from '../../../redux/selectors'
import { getRoundTripSeat } from '../../../redux/selectors/bookingFlightSelector'
export default function DetailFlights({ seat }) {
  const getDataFlight = useSelector(getInfoFlightInBookingFight)

  const seatRoungTrip = useSelector(getRoundTripSeat)
  const flightLocal = JSON.parse(localStorage.getItem('flight'))
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
                ? (seatRoungTrip.price + seat.price) * flightLocal.seatAvailable
                : seat.price * flightLocal.seatAvailable)}
            <sub>
              / {seat.name} X
              {flightLocal.roundId
                ? flightLocal.seatAvailable * 2
                : flightLocal.seatAvailable}
            </sub>
          </h3>
        </div>
      </div>
    </div>
  )
}
