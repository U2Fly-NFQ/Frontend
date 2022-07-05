import React, { useState } from 'react'
import { Col, Row, Space, Table, Button } from 'antd'
import { EyeOutlined } from '@ant-design/icons'
import { UserTicket } from '../index'
import { isEmpty } from 'lodash/lang'
import './style.scss'

function UserBookingDetail({ detailData }) {
  const [viewTicket, setViewTicket] = useState(false)
  const [ticketData, setTicketData] = useState({})
  const flightsColumn = [
    {
      title: 'Airline',
      dataIndex: 'airline',
      align: 'center',
      width: '150px',
      render: (_, { airline }) => (
        <img width="100%" src={airline.image} alt="airline" />
      ),
    },
    {
      title: 'Flight',
      dataIndex: 'code',
      align: 'center',
    },
    {
      title: 'Journey',
      align: 'center',
      render: (_, { departure, arrival }) => (
        <>
          {departure}
          <i
            style={{ padding: '0 10px' }}
            className="fa-solid fa-arrow-right-long"
          ></i>
          {arrival}
        </>
      ),
    },
    {
      title: 'ETD',
      dataIndex: 'startTime',
      width: '150px',
      align: 'center',
    },
    {
      title: 'ETA',
      dataIndex: 'endTime',
      width: '150px',
      align: 'center',
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
                flights: detailData.flights[record.id - 1],
              })
              setViewTicket(true)
            }}
            icon={<EyeOutlined />}
          />
        </Space>
      ),
    },
  ]

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
              rowKey={(record) => record.id}
              dataSource={detailData.flights}
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
