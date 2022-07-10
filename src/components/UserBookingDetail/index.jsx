import React, { useState } from 'react'
import { Col, Row, Space, Table, Button } from 'antd'
import { UserTicket } from '../index'
import { isEmpty } from 'lodash/lang'
import './style.scss'
import { findIndex } from 'lodash/array'
import moment from 'moment'
import ModalRating from '../ModalRating'
import { useDispatch } from 'react-redux'
import { fetchRatingBooking } from '../../redux/slices/ticketSlice'
import { message } from 'antd/es'

function UserBookingDetail({ detailData }) {
  //initiation
  const dispatch = useDispatch()
  const [viewTicket, setViewTicket] = useState(false)
  const [ticketData, setTicketData] = useState({})
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [dataRating, setDataRating] = useState({})

  const showRatingForm = (value) => {
    setIsModalVisible(true)
    setDataRating({
      ticketFlightId: value.ticketFlight.id,
      accountId: JSON.parse(localStorage.getItem('user')).id,
    })
  }

  const handleRating = (value) => {
    dispatch(
      fetchRatingBooking({
        ...dataRating,
        rate: value.status,
        comment: value.description,
      })
    )
    message.success('Thanks for your review. Wish you have a good trip!')
  }

  const flightsColumn = [
    {
      title: 'Airline',
      dataIndex: 'airline',
      align: 'center',
      width: '125px',
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
      title: 'Departure',
      dataIndex: 'ETD',
      width: '115px',
      align: 'center',
    },
    {
      title: 'Arrival',
      dataIndex: 'ETA',
      width: '115px',
      align: 'center',
    },
    {
      title: 'Action',
      key: 'action',
      align: 'center',
      render: (_, record) => (
        <Space>
          {record.isRating && (
            <Button
              type="default"
              shape="default"
              onClick={() => {
                let index = findIndex(
                  detailData.flights,
                  (flight) => flight.id === record.id
                )
                setTicketData({
                  ...detailData,
                  flights: detailData.flights[index],
                })
                setViewTicket(true)
              }}
            >
              View
            </Button>
          )}
          {!record.isRating && (
            <Button
              type="primary"
              shape="default"
              onClick={() => {
                showRatingForm(record)
              }}
            >
              Rating
            </Button>
          )}
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
            {detailData.ticketOwner}
          </Col>
          <Col className="booking-info-label" span={5}>
            Date:
          </Col>
          <Col className="booking-info-text" span={7}>
            {moment(detailData.createdAt).format('MM-DD-YYYY')}
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
      <ModalRating
        visible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        rating={handleRating}
      />
    </Row>
  )
}

export default UserBookingDetail
