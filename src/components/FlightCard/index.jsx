import React from 'react'
import { Skeleton } from 'antd'
import { motion } from 'framer-motion'
import './style.scss'
import { useNavigate } from 'react-router-dom'
import { getLsObj, updateLs } from '../../utils/localStorage'
import moment from 'moment'

export default function FlightCard(props) {
  const { data, loading } = props
  const navigate = useNavigate()

  const onBooking = () => {
    let flight = getLsObj('flight')

    if (flight.ticketType) {
      if (flight.ticketType === 'oneWay') {
        updateLs('flight', {
          id: data.id,
        })
        navigate('/flights-booking')
        return
      }

      if (flight.ticketType === 'roundTrip') {
        if (flight.id) {
          updateLs('flight', {
            roundId: data.id,
          })
          navigate('/flights-booking')
        } else {
          updateLs('flight', {
            id: data.id,
          })
          navigate('/')
        }
        return
      }
    }
  }

  if (loading)
    return (
      <Skeleton
        loading={true}
        active
        paragraph={{
          rows: 6,
        }}
      ></Skeleton>
    )

  return (
    <motion.div
      whileHover={{
        scale: 1.01,
        boxShadow: '0 1rem 3rem rgba(#000, 0.175)',
      }}
    >
      <div className="flight-card">
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
                    {data.departure.city} ({data.departure.iata})
                  </h3>
                  <h6 className="flight-card-place-destination__desc">
                    {moment(data.startTime, 'HH:mm:ss').format('HH:mm')}
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
                <h6
                  style={{
                    color: 'var(--ant-infor-color)',
                  }}
                >
                  Direct
                </h6>
                <p>{data.duration} hour</p>
              </div>
              <div className="flight-card-place__to">
                <div className="flight-card-place-destination">
                  <p className="flight-card-place-destination__sub-title">To</p>
                  <h3 className="flight-card-place-destination__title">
                    {data.arrival.city} ({data.arrival.iata})
                  </h3>
                  <h6 className="flight-card-place-destination__desc">
                    {moment(data.startTime, 'HH:mm:ss')
                      .add(data.duration * 60, 'minutes')
                      .format('HH:mm')}
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
                ${data.seat.price * 0.8}
                <sup>*20% OFF</sup>
              </h2>
            </div>
            <button className="btn btn-primary btn-md" onClick={onBooking}>
              Book now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
