import React, { useEffect } from 'react'
import { Skeleton, Rate } from 'antd'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
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

const FlightCardVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  hidden: { opacity: 0, x: 400 },
}

export default function FlightCard(props) {
  const { data, loading, onClickDetail } = props
  const navigate = useNavigate()
  const { t } = useTranslation()
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

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
      ref={ref}
      variants={FlightCardVariants}
      initial="hidden"
      animate={control}
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
          <button className="btn btn-primary btn-md" onClick={onBooking}>
            {t('flight-list-page.Book now')}
          </button>
        </div>
      </div>
    </motion.div>
  )
}
