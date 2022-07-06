import React from 'react'
import { Skeleton } from 'antd'
import { motion } from 'framer-motion'
import './style.scss'
import { useNavigate } from 'react-router-dom'
import { getLsObj, updateLs } from '../../utils/localStorage'
import { useTranslation } from 'react-i18next'
import moment from 'moment'

Number.prototype.round = function (places) {
  return +(Math.round(this + 'e+' + places) + 'e-' + places)
}

export default function FlightCard(props) {
  const { data, loading } = props
  const navigate = useNavigate()
  const { t } = useTranslation()

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
          navigate(0)
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

  const randomDiscount = Math.random().toFixed(2)

  return (
    <motion.div
      whileHover={{
        scale: 1.01,
        boxShadow: '0 1rem 3rem rgba(#000, 0.175)',
      }}
    >
      <div className="flight-card">
        <div className="place">
          <div className="airline">
            <img
              className="airline-image"
              src="https://andit.co/projects/html/and-tour/assets/img/common/biman_bangla.png"
            />
          </div>

          <div className="destination">
            <p className="sub-title">{t('flight-list-page.From')}</p>
            <h3 className="title">
              {data.departure.city} ({data.departure.iata})
            </h3>
            <h6 className="desc">
              {moment(data.startTime, 'HH:mm:ss').format('HH:mm')}
            </h6>
          </div>
          <div className="arrow">
            <h6>{t('flight-list-page.Direct')}</h6>
            <i className="fa-solid fa-arrow-right-long"></i>
            <p>
              {data.duration} {t('flight-list-page.hour')}{' '}
            </p>
          </div>
          <div className="destination">
            <p className="sub-title">{t('flight-list-page.To')}</p>
            <h3 className="title">
              {data.arrival.city} ({data.arrival.iata})
            </h3>
            <h6 className="desc">
              {moment(data.startTime, 'HH:mm:ss')
                .add(data.duration * 60, 'minutes')
                .format('HH:mm')}
            </h6>
          </div>
        </div>
        <div className="flight-card-deal">
          <div className="flight-card-price">
            <h5 className="flight-card-price__origin">
              <del>${data.seat.price}</del>
            </h5>
            <h2 className="flight-card-price__discount">
              ${(data.seat.price * (1 - randomDiscount)).toFixed(2)}
            </h2>
            <h4 className="discount-label red">
              <span>
                {t('flight-list-page.OFF', {
                  number: (randomDiscount * 100).toFixed(0),
                })}
              </span>
            </h4>
          </div>
          <button className="btn btn-primary btn-md" onClick={onBooking}>
            Book now
          </button>
        </div>
      </div>
    </motion.div>
  )
}
