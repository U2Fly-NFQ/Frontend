import { Modal } from 'antd'
import React from 'react'
import { Steps } from 'antd'
import moment from 'moment'
import { addHourToTime, getDurationFormat } from '../../utils/flight'

import './style.scss'
import { useTranslation } from 'react-i18next'

const FlightDetailModal = ({ data, visible, setIsModalVisible }) => {
  const { t } = useTranslation()

  const { Step } = Steps

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  if (Object.keys(data).length === 0) {
    return
  }

  return (
    <>
      <Modal
        title={t('flight-list-page.Flight details')}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        className="flight-detail-modal"
      >
        <div className="wrapper">
          <div className="time">
            <p>{moment(data.startTime, 'HH:mm:ss').format('HH:mm')}</p>
            <p className="duration">{getDurationFormat(data.duration)}</p>
            <p>{addHourToTime(data.startTime, data.duration)}</p>
          </div>
          <Steps
            progressDot
            direction="vertical"
            current={3}
            labelPlacement="top"
          >
            <Step
              title={
                <div className="info-plane_trip">
                  <div className="info-plane_trip-icon__rotate">
                    <i
                      className="fa-solid fa-plane-up"
                      style={{ transform: 'rotate(45deg);' }}
                    ></i>
                  </div>

                  <span>
                    {data.departure.name} 
                  </span>
                </div>
              }
              description={
                <div
                  className="info-plane_trip"
                  style={{
                    marginTop: '10px',
                  }}
                >
                  <div className="info-plane_trip__info">
                    <div className="info-plane_trip__title">
                      <h5>{data.airline.name}</h5>
                    </div>
                    <div className="info-plane_trip__body">
                      <span>{data.airplane.name}</span>
                    </div>
                    <div className="info-plane_trip__footer">
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
                  <span>
                    {data.arrival.name} 
                  </span>
                </div>
              }
            />
          </Steps>
        </div>
      </Modal>
    </>
  )
}

export default FlightDetailModal
