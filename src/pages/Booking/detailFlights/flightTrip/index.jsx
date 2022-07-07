import { Collapse, Steps } from 'antd'
import React from 'react'
import { getDurationFormat } from '../../../../utils/flight'
import './index.scss'
import { useSelector } from 'react-redux'
import vietnameairline from '../../../../assets/images/system/vip.png'
import {
  getInfoFlightInBookingFight,
  getRoundTripBookingFlight,
} from '../../../../redux/selectors'
export default function FlightTrip() {
  const { Panel } = Collapse
  const { Step } = Steps
  const getDataFlight = useSelector(getInfoFlightInBookingFight)
  const getRoundTrip = useSelector(getRoundTripBookingFlight)
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
                  <i
                    class="fa-solid fa-plane-up"
                    style={{ transform: 'rotate(45deg);' }}
                  ></i>
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
                    <img src={vietnameairline} alt="" />
                    <h5>Vietnam Airlines</h5>
                  </div>
                  <div className="info-plane_trip__body">
                    <span>204 | Airbus A321</span>
                  </div>
                  <div className="info-plane_trip__footer">
                    <span>Economy class</span>
                  </div>
                </div>
              </div>
            }
          />
          <Step
            title={
              <div className="info-plane_trip">
                <div className="info-plane_trip-icon">
                  <i class="fa-solid fa-location-dot"></i>
                </div>

                <span>{getDataFlight.arrival.city}</span>
              </div>
            }
          />
        </Steps>
      </Panel>
      {getRoundTrip.code && (
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
                    <i
                      class="fa-solid fa-plane-up"
                      style={{ transform: 'rotate(45deg);' }}
                    ></i>
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
                      <img src={vietnameairline} alt="" />
                      <h5>{getRoundTrip.airline.name}</h5>
                    </div>
                    <div className="info-plane_trip__body">
                      <span>204 | {getRoundTrip.airplane.name}</span>
                    </div>
                    <div className="info-plane_trip__footer">
                      <span>Economy class</span>
                    </div>
                  </div>
                </div>
              }
            />
            <Step
              title={
                <div className="info-plane_trip">
                  <div className="info-plane_trip-icon">
                    <i class="fa-solid fa-location-dot"></i>
                  </div>

                  <span>{getDataFlight.arrival.city}</span>
                </div>
              }
            />
          </Steps>
        </Panel>
      )}
    </Collapse>
  )
}
