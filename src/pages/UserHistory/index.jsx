import React, { useState } from 'react'
import { Col, Row } from 'antd'
import { UserBookingTable } from '../../components'

function UserHistory(props) {
  //initiation
  const [loading, setLoading] = useState(false)

  //Logical handling functions
  //Fake Data
  const data = [
    {
      key: 1,
      bookingAmount: '$850.00',
      status: 'Canceled',
      owner: 'Sang Sáng Sủa',
      email: 'sang@gg.com',
      date: '13/06/2022',
      flights: [
        {
          key: '1',
          airline:
            'https://www.vietnamairlines.com/~/media/Images/VNANew/Home/Logo%20Header/logo_vna-mobile.png',
          departure: 'Ha Noi (HAN)',
          arrival: 'Ho Chi Minh (HCM)',
          dateTime: '2022-06-13',
          boardingTime: '2022-06-13 06:30',
          startTime: '2022-06-13 06:00',
          endTime: '2022-06-13 8:30',
        },
        {
          key: '2',
          airline:
            'https://www.vietnamairlines.com/~/media/Images/VNANew/Home/Logo%20Header/logo_vna-mobile.png',
          departure: 'Ho Chi Minh (HCM)',
          arrival: 'Ha Noi (HAN)',
          dateTime: '2022-06-14',
          boardingTime: '2022-06-14 06:30',
          startTime: '2022-06-14 06:00',
          endTime: '2022-06-14 8:30',
        },
      ],
    },
  ]

  return (
    <Row className="userProfile-container-history">
      <Col span={24} className="userProfile-container-history-title">
        Booking History
      </Col>
      <Col span={24}>
        <UserBookingTable data={data} loading={loading} />
      </Col>
    </Row>
  )
}

export default UserHistory
