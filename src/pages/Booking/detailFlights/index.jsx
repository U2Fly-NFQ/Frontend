import React from 'react'
import './index.scss'
import { useSelector } from 'react-redux'
import {
  getInfoFlightInBookingArrival,
  getInfoFlightInBookingDeparture,
  getInfoFlightInBookingAirplane,
  getInfoFlightInBookingFight,
  getInfoFlightInBookingAirline,
  getInfoFlightInBookingSeat,
} from '../../../redux/selectors'
export default function DetailFlights() {
  const allDataFight = useSelector(getInfoFlightInBookingFight)
  const arrival = useSelector(getInfoFlightInBookingArrival)
  const departure = useSelector(getInfoFlightInBookingDeparture)
  const airplane = useSelector(getInfoFlightInBookingAirplane)
  const airline = useSelector(getInfoFlightInBookingAirline)
  const seat = useSelector(getInfoFlightInBookingSeat)

  return (
    <div className="detail-flights__container">
      <div className="booking-page__container__item__title">
        <h2>Flights</h2>
      </div>
      <div className="detail-flights__container__trip">
        <div className="detail-flights__container__trip__from">
          <p>From</p>
          <h3>{departure.city}</h3>
          <h6>{departure.name}</h6>
        </div>
        <div className="detail-flights__container__trip__icon">
          <i className="fa-solid fa-circle-arrow-right"></i>
          <h6>non stop</h6>
          <p>{allDataFight.duration}</p>
        </div>
        <div className="detail-flights__container__trip__to">
          <p>To</p>
          <h3>{arrival.city}</h3>
          <p>{arrival.name} </p>
        </div>
      </div>

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
            <del>{seat.price}</del>
          </h6>
          <h3>
            {'$' + seat.price} <sub> / Adult X 1</sub>{' '}
          </h3>
        </div>
      </div>
    </div>
  )
}
