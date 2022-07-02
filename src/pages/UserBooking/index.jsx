import React, { useState } from 'react'
import { Col, Row, Table, Space, Button } from 'antd'
import { EyeOutlined } from '@ant-design/icons'
import { UserTicket } from '../../components'

function UserBooking(props) {
  //initiation
  const [loading, setLoading] = useState(false)
  const [viewTicket, setViewTicket] = useState(false)
  const [bookings, setBookings] = useState([])

  //Data for UI
  const bookingListColumn = [
    // {
    //   title: 'ID',
    //   dataIndex: 'key',
    //   width: 50,
    //   sorter: (a, b) => a.key - b.key,
    // },
    {
      title: 'Airline',
      dataIndex: 'airline',
      width: 150,
      align: 'center',
      render: (_, { airline }) => <img width="100%" src={airline} alt="" />,
    },
    {
      title: 'Code',
      dataIndex: 'code',
      align: 'center',
      sorter: (a, b) => a.code - b.code,
    },
    {
      title: 'Arrival',
      dataIndex: 'flightArrival',
      align: 'center',
      sorter: (a, b) => a.flightArrival.length - b.flightArrival.length,
    },
    {
      title: 'Departure',
      dataIndex: 'flightDeparture',
      align: 'center',
      sorter: (a, b) => a.flightDeparture.length > b.flightDeparture.length,
    },
    {
      title: 'Booking amount',
      dataIndex: 'bookingAmount',
      align: 'center',
      sorter: (a, b) => a.bookingAmount - b.bookingAmount,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      sorter: (a, b) => a.airline.length - b.airline.length,
    },
    {
      title: 'Action',
      key: 'action',
      width: 100,
      align: 'center',
      render: (_, record) => (
        <Space>
          <Button
            type="default"
            shape="default"
            onClick={() => setViewTicket(true)}
            icon={<EyeOutlined />}
          />
        </Space>
      ),
    },
  ]

  //Logical handling functions

  const data = [
    {
      code: 7,
      flightArrival: 'VCA',
      flightDeparture: 'HAN',
      airline:
        'https://www.vietnamairlines.com/~/media/Images/VNANew/Home/Logo%20Header/logo_vna-mobile.png',
      flightStartTime: '2022-03-26 21:30:29',
      bookingAmount: '$750.00',
      key: 7,
      status: '',
    },
  ]
  return (
    <Row className="userProfile-container-booking">
      <Col span={24} className="userProfile-container-booking-title">
        My booking
      </Col>
      <Col span={24}>
        <Table
          columns={bookingListColumn}
          dataSource={data}
          loading={loading}
          scroll={{
            x: 'max-content',
          }}
        />
      </Col>
      <UserTicket setViewTicket={setViewTicket} visible={viewTicket} />
    </Row>
  )
}

export default UserBooking
