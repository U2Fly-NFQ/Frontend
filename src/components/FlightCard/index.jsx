import React from 'react'
import { Button, Skeleton } from 'antd'
import { motion } from 'framer-motion'
import './style.scss'

export default function FlightCard({ data, airportFrom, airportTo }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: '0 1rem 3rem rgba(#000, 0.175)',
      }}
    >
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
                      {data.departure.city}
                    </h3>
                    <h6 className="flight-card-place-destination__desc">
                      {data.departure.name}
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
                  <p>{data.duration} hour</p>
                </div>
                <div className="flight-card-place__to">
                  <div className="flight-card-place-destination">
                    <p className="flight-card-place-destination__sub-title">
                      To
                    </p>
                    <h3 className="flight-card-place-destination__title">
                      {data.arrival.city}
                    </h3>
                    <h6 className="flight-card-place-destination__desc">
                      {data.departure.name}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="flight-card-deal">
              <div className="flight-card-price">
                <h5 className="flight-card-price__origin">
                  <del>${data.seat.price}</del>
                </h5>
                <h2 className="flight-card-price__off">
                  ${data.seat.price}
                  <sup>*20% OFF</sup>
                </h2>
              </div>
              <Button type="primary" size="large">
                Book now
              </Button>
            </div>
          </div>
        </Skeleton>
      </div>
    </motion.div>
  )
}
