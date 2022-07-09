import { Collapse, Steps } from 'antd'
import React from 'react'
import { getDurationFormat } from '../../../../utils/flight'
import './index.scss'
import { useSelector } from 'react-redux'
import {
  getInfoFlightInBookingFight,
  getRoundTripBookingFlight,
} from '../../../../redux/selectors'
import { getLsObj } from '../../../../utils/localStorage'
import moment from 'moment'
export default function FlightTrip() {
  const { Panel } = Collapse
  const { Step } = Steps
  const getDataFlight = useSelector(getInfoFlightInBookingFight)
  const getRoundTrip = useSelector(getRoundTripBookingFlight)
  let flight = getLsObj('flight')
  return (
    <Collapse defaultActiveKey={['1']} ghost>
      <Panel
        showArrow={false}
        header={
          <div className="detail-flights__container__trip">
            <div className="detail-flights__container__trip__from">
              <p>From</p>

              <h3>{getDataFlight.departure.city}</h3>
              <h6>{getDataFlight.departure.name}</h6>
            </div>
            <div className="detail-flights__container__trip__icon">
              <i className="fa-solid fa-circle-arrow-right"></i>
              <h6>non stop</h6>
              <p>{getDurationFormat(getDataFlight.duration)}</p>
            </div>
            <div className="detail-flights__container__trip__to">
              <p>To</p>
              <h3>{getDataFlight.arrival.city}</h3>

              <h6>{getDataFlight.arrival.name}</h6>
            </div>
            <div className="detail-flights__container__trip__detail">
              <h5>
                <a>Detail</a>
              </h5>
            </div>
          </div>
        }
        key="1"
      >
        <Steps progressDot direction="vertical" current={1}>
          <Step
            title={
              <div className="info-plane_trip">
                <div className="info-plane_trip-icon__rotate">
                  <i className="fa-solid fa-plane-up"></i>
                </div>

                <span>{getDataFlight.departure.city}</span>
              </div>
            }
          />
          <Step
            description={
              <div className="info-plane_trip">
                <div className="info-plane_trip__info">
                  <div className="info-plane_trip__title">
                    <img src={getDataFlight.airline.image} alt="" />
                    <h5>{getDataFlight.airline.name}</h5>
                  </div>
                  <div className="info-plane_trip__body">
                    <span>{getDataFlight.airplane.name}</span>
                  </div>
                  <div className="info-plane_trip__footer">
                    <span>
                      {`${moment(getDataFlight.startDate).format(
                        'MM-DD-YYYY'
                      )} ${moment(getDataFlight.startTime, 'HH:mm:ss').format(
                        'hh:mm A'
                      )}`}
                    </span>
                  </div>
                </div>
              </div>
            }
          />
          <Step
            title={
              <div className="info-plane_trip">
                <div className="info-plane_trip-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <span>{getDataFlight.arrival.city}</span>
              </div>
            }
          />
        </Steps>
      </Panel>
      {getRoundTrip.code && flight.roundId && (
        <Panel
          style={{ borderTop: '1px solid blue' }}
          showArrow={false}
          header={
            <div className="detail-flights__container__trip">
              <div className="detail-flights__container__trip__from">
                <p>From</p>
                <h3>{getRoundTrip.departure.city}</h3>
                <h6>{getRoundTrip.departure.name}</h6>
              </div>
              <div className="detail-flights__container__trip__icon">
                <i className="fa-solid fa-circle-arrow-right"></i>
                <h6>non stop</h6>
                <p>{getDurationFormat(getRoundTrip.duration)}</p>
              </div>
              <div className="detail-flights__container__trip__to">
                <p>To</p>
                <h3>{getRoundTrip.arrival.city}</h3>
                <p>{getRoundTrip.arrival.name} </p>
              </div>
              <div className="detail-flights__container__trip__detail">
                <h5>
                  <a>Detail</a>
                </h5>
              </div>
            </div>
          }
          key="2"
        >
          <Steps progressDot direction="vertical" current={1}>
            <Step
              title={
                <div className="info-plane_trip">
                  <div className="info-plane_trip-icon__rotate">
                    <i className="fa-solid fa-plane-up"></i>
                  </div>

                  <span>{getRoundTrip.departure.city}</span>
                </div>
              }
            />
            <Step
              description={
                <div className="info-plane_trip">
                  <div className="info-plane_trip__info">
                    <div className="info-plane_trip__title">
                      <img src={getRoundTrip.airline.image} alt="" />
                      <h5>{getRoundTrip.airline.name}</h5>
                    </div>
                    <div className="info-plane_trip__body">
                      <span>{getRoundTrip.airplane.name}</span>
                    </div>
                    <div className="info-plane_trip__footer">
                      <span>
                        {`${moment(getRoundTrip.startDate).format(
                          'MM-DD-YYYY'
                        )} ${moment(getRoundTrip.startTime, 'HH:mm:ss').format(
                          'hh:mm A'
                        )}`}
                      </span>
                    </div>
                  </div>
                </div>
              }
            />
            <Step
              title={
                <div className="info-plane_trip">
                  <div className="info-plane_trip-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>

                  <span>{getRoundTrip.arrival.city}</span>
                </div>
              }
            />
          </Steps>
        </Panel>
      )}
    </Collapse>
  )
}
