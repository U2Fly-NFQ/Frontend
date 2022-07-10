import React from 'react'
import './index.scss'
import { useSelector } from 'react-redux'
import FlightTrip from './flightTrip'

import { getInfoFlightInBookingFight } from '../../../redux/selectors'
import {
  getInfoFlightInBookingSeat,
  getRoundTripSeat,
} from '../../../redux/selectors/bookingFlightSelector'
export default function DetailFlights({ flight }) {
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
                ? (seatRoungTrip.price + seat.price) * flight.seatAvailable
                : seat.price * flight.seatAvailable)}
            <sub>
              / {seat.name} X
              {flight.roundId ? flight.seatAvailable * 2 : flight.seatAvailable}
            </sub>
          </h3>
        </div>
      </div>
    </div>
  )
}
