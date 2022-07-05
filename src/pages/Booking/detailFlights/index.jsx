import React from 'react'
import './index.scss'

import FlightTrip from './flightTrip'
export default function DetailFlights() {
  // const allDataFight = useSelector(getInfoFlightInBookingFight)
  // const arrival = useSelector(getInfoFlightInBookingArrival)
  // const departure = useSelector(getInfoFlightInBookingDeparture)
  // const airplane = useSelector(getInfoFlightInBookingAirplane)
  // const airline = useSelector(getInfoFlightInBookingAirline)
  // const seat = useSelector(getInfoFlightInBookingSeat)

  return (
    <div className="detail-flights__container">
      <div className="booking-page__container__item__title">
        <h2>Flights</h2>
      </div>
      <FlightTrip />

      <div className="detail-flights__container__package-rules">
        <div className="booking-page__container__item__title">
          <h3>Flights</h3>
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
          <h6>
            {/* <del>{seat.price}</del> */}
            <del>150</del>
          </h6>
          <h3>
            {/* {'$' + seat.price} */}
            {'$ 150'}
            <sub>
              / Ecome X 2
              {/* {JSON.parse(localStorage.getItem('flight')).passengerNumber} */}
              {/* / {seat.name} X
              {JSON.parse(localStorage.getItem('flight')).passengerNumber} */}
            </sub>
          </h3>
        </div>
      </div>
    </div>
  )
}
