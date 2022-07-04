import React, { useEffect, useState } from 'react'
import { Col, Row, Space, Table, Button } from 'antd'
import { EyeOutlined } from '@ant-design/icons'
import { UserTicket } from '../index'
import { isEmpty } from 'lodash/lang'
import './style.scss'

function UserBookingDetail({ detailData }) {
  const [flights, setFlights] = useState([])
  const [viewTicket, setViewTicket] = useState(false)
  const [ticketData, setTicketData] = useState({})

  const flightsColumn = [
    {
      title: 'Airline',
      dataIndex: 'airline',
      align: 'center',
      width: '150px',
      render: (_, { airline }) => (
        <img width="100%" src={airline} alt="airline" />
      ),
    },
    {
      title: 'Flight',
      dataIndex: 'key',
      align: 'center',
    },
    {
      title: 'Departure',
      dataIndex: 'departure',
    },
    {
      title: 'Arrival',
      dataIndex: 'arrival',
    },
    {
      title: 'Action',
      key: 'action',
      align: 'center',
      render: (_, record) => (
        <Space>
          <Button
            type="default"
            shape="default"
            onClick={() => {
              setTicketData({
                ...detailData,
                flights: detailData.flights[record.key - 1],
              })
              setViewTicket(true)
            }}
            icon={<EyeOutlined />}
          />
        </Space>
      ),
    },
  ]

  useEffect(() => {
    const flights = detailData.flights.map((flight) => ({
      ...flight,
      departure: `${flight.startTime} - ${flight.departure}`,
      arrival: `${flight.endTime} - ${flight.arrival}`,
    }))
    setFlights(flights)
  }, [detailData])

  return (
    <Row className="booking-detail">
      <Col className="booking-detail-info" span={24}>
        <Row className="booking-info">
          <Col className="booking-info-title" span={24}>
            Booking Information
          </Col>
          <Col className="booking-info-label" span={5}>
            Status:
          </Col>
          <Col className="booking-info-text" span={7}>
            {detailData.status}
          </Col>
          <Col className="booking-info-label" span={5}>
            Name:
          </Col>
          <Col className="booking-info-text" span={7}>
            {detailData.owner}
          </Col>
          <Col className="booking-info-label" span={5}>
            Date:
          </Col>
          <Col className="booking-info-text" span={7}>
            {detailData.date}
          </Col>
          <Col className="booking-info-label" span={5}>
            Email:
          </Col>
          <Col className="booking-info-text" span={7}>
            {detailData.email}
          </Col>
        </Row>
        <Row className="flight-info">
          <Col className="flight-info-title" span={24}>
            Flight Information
          </Col>
          <Col className="flight-info-content" span={24}>
            <Table
              columns={flightsColumn}
              dataSource={flights}
              pagination={false}
            />
          </Col>
        </Row>
      </Col>
      {!isEmpty(ticketData) && (
        <UserTicket
          ticketData={ticketData}
          setViewTicket={setViewTicket}
          visible={viewTicket}
        />
      )}
    </Row>
  )
}

export default UserBookingDetail