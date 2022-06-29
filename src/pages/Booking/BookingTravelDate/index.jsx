import React from 'react'
import './index.scss'
export default function BookingTravelDate() {
  return (
    <div className="booking-travel-date">
      <div className="booking-page__container__item__title">
        <h3>Booking amount</h3>
      </div>
      <div className="booking-travel-date__container">
        <ul className="booking-travel-date__container__value">
          <li>
            <div className="booking-travel-date__container__key">
              Adult Price x 1
            </div>
            <div className="booking-travel-date__container__key">
              $40,000.00
            </div>
          </li>
          <li>
            <div className="booking-travel-date__container__key">Discount</div>
            <div className="booking-travel-date__container__key">-10%</div>
          </li>
          <li>
            <div className="booking-travel-date__container__key">Tax</div>
            <div className="booking-travel-date__container__key">5%</div>
          </li>
        </ul>
        <div className="booking-travel-date__container__amount">
          <div className="booking-travel-date__container__amount__remove">
            remove
          </div>
          <ul>
            <li>
              <div className="booking-travel-date__container__key">
                Subtotal
              </div>
              <div className="booking-travel-date__container__value">
                $38,000.00
              </div>
            </li>
            <li>
              <div className="booking-travel-date__container__key">
                Coupon code (OFF 5000)
              </div>
              <div className="booking-travel-date__container__value">
                $5,000.00
              </div>
            </li>
          </ul>
        </div>
        <div className="booking-travel-date__container__total">
          <div className="booking-travel-date__container__amount__total__key">
            Total Amount
          </div>
          <div className="booking-travel-date__container__amount__total__value">
            $33,000.00
          </div>
        </div>
      </div>
    </div>
  )
}
