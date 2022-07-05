import React from 'react'
import { Skeleton } from 'antd'
import { motion } from 'framer-motion'
import './style.scss'
import {
  useNavigate,
  useSearchParams,
  createSearchParams,
} from 'react-router-dom'
import { getLsObj, updateLs } from '../../utils/localStorage'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

export default function FlightCard({ data }) {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const flight = useSelector((state) => state.flights)
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

      if (flight.seatType === 'roundTrip') {
        if (flight.id) {
          updateLs('flight', {
            roundId: data.id,
          })
          navigate('/flights-booking')
          return
        } else {
          navigate({
            pathname: 'flights',
            search: createSearchParams({
              departure: flight.arrival,
              arrival: flight.departure,
              startDate: flight.returnDate,
              seatType: flight.seatType,
              seatAvailable: flight.seatAvailable,
            }).toString(),
          })
          return
        }
      }
    }
  }

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
                      {t('flight-list-page.From')}
                    </p>
                    <h3 className="flight-card-place-destination__title">
                      {data.departure.city} ({data.departure.iata})
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
                  <h6
                    style={{
                      color: 'var(--ant-infor-color)',
                    }}
                  >
                    {t('flight-list-page.Direct')}
                  </h6>
                  <p>
                    {data.duration} {t('flight-list-page.hour')}
                  </p>
                </div>
                <div className="flight-card-place__to">
                  <div className="flight-card-place-destination">
                    <p className="flight-card-place-destination__sub-title">
                      {t('flight-list-page.To')}
                    </p>
                    <h3 className="flight-card-place-destination__title">
                      {data.arrival.city} ({data.arrival.iata})
                    </h3>
                    <h6 className="flight-card-place-destination__desc">
                      {data.arrival.name}
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
                  <sup>{t('flight-list-page.OFF', { number: 20 })}</sup>
                </h2>
              </div>
              <button className="btn btn-primary btn-md" onClick={onBooking}>
                {t('flight-list-page.Book now')}
              </button>
            </div>
          </div>
        </Skeleton>
      </div>
    </motion.div>
  )
}
