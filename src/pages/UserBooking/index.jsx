import React, { useState } from 'react'
import { Col, Row, Table, Space } from 'antd'
import { UserBookingDetail } from '../../components'

function UserBooking(props) {
  //initiation
  const [loading, setLoading] = useState(false)

  //Data for UI
  const bookingListColumn = [
    {
      title: 'Booking ID',
      dataIndex: 'key',
      align: 'center',
      sorter: (a, b) => a.code - b.code,
    },
    {
      title: 'Journey',
      dataIndex: 'flights',
      align: 'center',
      sorter: (a, b) => a.flights.length - b.flights.length,
      render: (_, { flights }) => (
        <>
          {flights[0].departure}
          {flights.length === 2 ? (
            <i
              style={{ padding: '0 10px' }}
              className="fa-solid fa-arrow-right-arrow-left"
            ></i>
          ) : (
            <i
              style={{ padding: '0 10px' }}
              className="fa-solid fa-arrow-right-long"
            ></i>
          )}
          {flights[0].arrival}
        </>
      ),
    },
    {
      title: 'Booking Amount',
      dataIndex: 'bookingAmount',
      align: 'center',
      sorter: (a, b) => a.bookingAmount - b.bookingAmount,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      align: 'center',
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: 'Action',
      key: 'action',
      width: 100,
      align: 'center',
      render: (_, record) => (
        <Space>
          {/*<Button*/}
          {/*  type="default"*/}
          {/*  shape="default"*/}
          {/*  onClick={() => setViewTicket(true)}*/}
          {/*  icon={<EyeOutlined />}*/}
          {/*/>*/}
        </Space>
      ),
    },
  ]
  //Logical handling functions
  const data = [
    {
      key: 1,
      bookingAmount: '$ 750.00',
      status: 'Booking success',
      owner: 'Sang Sáng Sủa',
      email: 'sang@gg.com',
      date: '03/7/2022',
      flights: [
        {
          key: '1',
          airline:
            'https://www.vietnamairlines.com/~/media/Images/VNANew/Home/Logo%20Header/logo_vna-mobile.png',
          departure: 'Ha Noi',
          arrival: 'Can Tho',
          startTime: '2022-07-04 07:00',
          duration: '1.5',
        },
        {
          key: '2',
          airline:
            'https://www.vietnamairlines.com/~/media/Images/VNANew/Home/Logo%20Header/logo_vna-mobile.png',
          departure: 'Can Tho',
          arrival: 'Ha Noi',
          startTime: '2022-07-04 07:00:00',
          duration: '1.5',
        },
      ],
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
          expandable={{
            expandedRowRender: (record) => (
              <UserBookingDetail detailData={record} />
            ),
          }}
          dataSource={data}
          loading={loading}
          scroll={{
            x: 'max-content',
          }}
        />
      </Col>
    </Row>
  )
}
export default UserBooking
