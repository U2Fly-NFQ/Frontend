import React from 'react'
import { Skeleton, Rate } from 'antd'
import { motion } from 'framer-motion'
import './style.scss'
import { useNavigate } from 'react-router-dom'
import { getLsObj, updateLs } from '../../utils/localStorage'
import { useTranslation } from 'react-i18next'
import moment from 'moment'
import {
  addHourToTime,
  getDurationFormat,
  getPriceWithDiscount,
} from '../../utils/flight'

export default function FlightCard(props) {
  const { data, loading, onClickDetail } = props
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

  return (
    <motion.div
      whileHover={{
        scale: 1.01,
        boxShadow: '0 1rem 3rem rgba(#000, 0.175)',
      }}
    >
      <div className="flight-card" onClick={onClickDetail}>
        <div className="airline">
          <img
            className="airline-image"
            src={data.airline.image}
            style={{
              width: '180px',
              objectFit: 'contain',
            }}
          />
          <div
            className="rating"
            style={{
              display: 'block',
            }}
          >
            <Rate disabled defaultValue={data?.airline?.rating || 0} />
          </div>
        </div>
        <div className="place">
          <div className="destination">
            <p className="sub-title">{t('flight-list-page.From')}</p>
            <h3 className="title">{data.departure.iata}</h3>
            <h6 className="desc">
              {moment(data.startTime, 'HH:mm:ss').format('HH:mm')}
            </h6>
          </div>
          <div className="arrow">
            <h6>{t('flight-list-page.Direct')}</h6>
            <i className="fa-solid fa-arrow-right-long"></i>
            <p>{getDurationFormat(data.duration)}</p>
          </div>
          <div className="destination">
            <p className="sub-title">{t('flight-list-page.To')}</p>
            <h3 className="title">{data.arrival.iata}</h3>
            <h6 className="desc">
              {addHourToTime(data.startTime, data.duration)}
            </h6>
          </div>
        </div>
        <div className="flight-card-deal">
          <p
            className="flight-detail"
            style={{
              cursor: 'pointer',
            }}
          >
            {t('flight-list-page.Flight details')}
          </p>
          <div className="flight-card-price">
            <h5 className="flight-card-price__origin">
              <del>
                {t('flight-list-page.$')}
                {data.seat.price}
              </del>
            </h5>
            <h2 className="flight-card-price__discount">
              $ {getPriceWithDiscount(data.seat.price, data.seat.discount)}
            </h2>
            <h4 className="discount-label red">
              <span>
                {t('flight-list-page.OFF', {
                  number: (data.seat.discount * 100).toFixed(0),
                })}
              </span>
            </h4>
          </div>
          <button
            data-testid="booking-btn"
            className="btn btn-primary btn-md"
            onClick={onBooking}
          >
            {t('flight-list-page.Book now')}
          </button>
        </div>
      </div>
    </motion.div>
  )
}
