import React from 'react'
import './index.scss'
export default function DetailFlights() {
  return (
    <div className="detail-flights__container">
      <div className="booking-page__container__item__title">
        <h2>Flights</h2>
      </div>
      <div className="detail-flights__container__trip">
        <div className="detail-flights__container__trip__from">
          <p>From</p>
          <h3>New York</h3>
          <h6>JFK - John F. Kennedy International...</h6>
        </div>
        <div className="detail-flights__container__trip__icon">
          <i className="fa-solid fa-circle-arrow-right"></i>
          <h6>non stop</h6>
          <p>01h 05minite</p>
        </div>
        <div className="detail-flights__container__trip__to">
          <p>To</p>
          <h3>London</h3>
          <p>LCY, London city airport </p>
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
            <del>$ 35,500</del>
          </h6>
          <h3>
            $ 30,500 <sub> / Adult X 1</sub>{' '}
          </h3>
        </div>
      </div>
    </div>
  )
}
