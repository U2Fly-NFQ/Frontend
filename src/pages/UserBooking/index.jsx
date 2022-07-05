import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import { UserBookingTable } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { ticketDataSelector } from '../../redux/selectors'

function UserBooking(props) {
  //initiation
  const dispatch = useDispatch()
  const ticketData = useSelector(ticketDataSelector)

  const [loading, setLoading] = useState(false)
  const [tickets, setTickets] = useState([])
  //Logical handling functions
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      // dispatch(fetchTickets())
    }, 500)
  }, [dispatch])

  useEffect(() => {
    let ticketProcessedData = ticketData.map((ticket) => ({
      ...ticket,
      key: ticket.id,
    }))
    setTickets(ticketProcessedData)
    // setLoading(false)
  }, [ticketData])

  return (
    <Row className="userProfile-container-booking">
      <Col span={24} className="userProfile-container-booking-title">
        My Booking
      </Col>
      <Col span={24}>
        <UserBookingTable data={tickets} loading={loading} />
      </Col>
    </Row>
  )
}

export default UserBooking
