import React, { useState } from 'react'
import { Col, Row } from 'antd'
import { UserBookingTable } from '../../components'

function UserBooking(props) {
  //initiation
  const [loading, setLoading] = useState(false)
  //Logical handling functions

  //Fake Data
  const data = [
    {
      key: 1,
      bookingAmount: '$ 750.00',
      status: 'Booking success',
      owner: 'Sang Sáng Sủa',
      email: 'sang@gg.com',
      date: '04/07/2022',
      flights: [
        {
          key: '1',
          airline:
            'https://www.vietnamairlines.com/~/media/Images/VNANew/Home/Logo%20Header/logo_vna-mobile.png',
          departure: 'Ho Chi Minh (HCM)',
          arrival: 'Can Tho (VCA)',
          dateTime: '2022-07-04',
          boardingTime: '2022-07-04 06:30',
          startTime: '2022-07-04 07:00',
          endTime: '2022-07-04 8:30',
        },
        {
          key: '2',
          airline:
            'https://www.vietnamairlines.com/~/media/Images/VNANew/Home/Logo%20Header/logo_vna-mobile.png',
          departure: 'Can Tho (VCA)',
          arrival: 'Ha Noi (HAN)',
          dateTime: '2022-07-05',
          boardingTime: '2022-07-05 06:30',
          startTime: '2022-07-05 07:00',
          endTime: '2022-07-05 8:30',
        },
      ],
    },
  ]

  return (
    <Row className="userProfile-container-booking">
      <Col span={24} className="userProfile-container-booking-title">
        My Booking
      </Col>
      <Col span={24}>
        <UserBookingTable data={data} loading={loading} />
      </Col>
    </Row>
  )
}
export default UserBooking
