import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Skeleton } from 'antd'
import './style.scss'

export default function FlightCard({ loading }) {
  return (
    <div className="flight-card">
      <Skeleton
        loading={false}
        active
        paragraph={{
          rows: 6,
        }}
      >
        <div className="flight-card-items">
          <div className="flight-card-place">
            <div className="flight-card-place__left">
              <div className="flight-card-place__airline">
                <img
                  className="flight-card-place__airline-imgage"
                  src="https://andit.co/projects/html/and-tour/assets/img/common/biman_bangla.png"
                />
              </div>

              <div className="flight-card-place__from">
                <div className="flight-card-place-destination">
                  <p className="flight-card-place-destination__sub-title">
                    From
                  </p>
                  <h3 className="flight-card-place-destination__title">
                    New York
                  </h3>
                  <h6 className="flight-card-place-destination__desc">
                    JFK - John F. Kennedy Int Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Molestiae deserunt at odit
                    optio animi reiciendis asperiores quasi quas. Sed vero nemo
                    accusamus sit consectetur quasi facilis nostrum odit error
                    ipsam!
                  </h6>
                </div>
              </div>
            </div>

            <div className="flight-card-place__right">
              <div className="flight-card-place__arrow">
                <img
                  src="https://andit.co/projects/html/and-tour/assets/img/icon/right_arrow.png"
                  alt=""
                />
                <h6>Non-stop</h6>
                <p>01h 05minute </p>
              </div>
              <div className="flight-card-place__to">
                <div className="flight-card-place-destination">
                  <p className="flight-card-place-destination__sub-title">To</p>
                  <h3 className="flight-card-place-destination__title">
                    London
                  </h3>
                  <h6 className="flight-card-place-destination__desc">
                    LCY, London city airport consectetur adipisicing elit.
                    Molestiae deserunt at odit optio animi reiciendis asperiores
                    quasi quas. Sed vero nemo accusamus sit consectetur quasi
                    facilis nostrum odit error ipsam!
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="flight-card-price">
            <h5 className="flight-card-price__origin">
              <del>$9,560</del>
            </h5>
            <h2 className="flight-card-price__off">
              $7,560<sup>*20% OFF</sup>
            </h2>
            <p className="flight-card-price__condition">
              *Discount applicable on some conditions
            </p>
            <Link to="booking">
              <Button type="primary">Book now</Button>
            </Link>
            <h6 className="flight-card-price__show-more">
              Show more <i class="fas fa-chevron-down"></i>
            </h6>
          </div>
        </div>
      </Skeleton>
    </div>
  )
}
