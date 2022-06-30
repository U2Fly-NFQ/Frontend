import React from 'react'
import { BookedSidebar, FlightListBanner } from '../../components'
import { Col, Row } from 'antd'
import './style.scss'

const Booked = () => {
  return (
    <div className="booked-page">
      <FlightListBanner />
      <div className="booked-page-container wide grid">
        <Row gutter={50}>
          <Col span={6}>
            <BookedSidebar />
          </Col>
          <Col span={18} className="table">
            right
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Booked
