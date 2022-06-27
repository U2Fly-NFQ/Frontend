import React from 'react'
import { Col, Row } from 'antd'
import './style.scss'

export default function FlightSearch() {
  const style = {
    border: '1px solid black',
    backGround: 'red',
  }

  return (
    <div className="FlightSearch">
      <Row gutter={[24, 24]}>
        <Col style={style} span={24} md={12} lg={6}>
          <div className="FlightSearchBox"></div>
        </Col>
        <Col style={style} span={24} md={12} lg={6}>
          <div className="FlightSearchBox"></div>
        </Col>
        <Col style={style} span={24} md={12} lg={8}>
          <div className="FlightSearchBox"></div>
        </Col>
        <Col style={style} span={24} md={12} lg={4}>
          <div className="FlightSearchBox"></div>
        </Col>
      </Row>
    </div>
  )
}
