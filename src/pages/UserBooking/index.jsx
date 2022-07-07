import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import { UserBookingTable } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { ticketDataSelector } from '../../redux/selectors'
import { fetchTickets } from '../../redux/slices/ticketSlice'
import { isEmpty } from 'lodash/lang'

import { bookingStatus } from '../../Constants'
import { convertNumberToUSD } from '../../utils/numberFormater'
import { flightDataProcessed } from '../../utils/flightDataProcessing'

function UserBooking(props) {
  //initiation
  const dispatch = useDispatch()
  const ticketData = useSelector(ticketDataSelector)
  const userLogin = JSON.parse(localStorage.getItem('user'))

  const [loading, setLoading] = useState(false)
  const [tickets, setTickets] = useState([])

  //Logical handling functions
  useEffect(() => {
    setLoading(true)
    dispatch(
      fetchTickets({
        // passenger: userLogin.id,
        // effectiveness: 1,
      })
    )
  }, [dispatch, userLogin.id])

  useEffect(() => {
    if (!isEmpty(ticketData)) {
      let ticketProcessedData = ticketData.map((ticket) => {
        return {
          ...ticket,
          status: bookingStatus[0],
          totalPrice: convertNumberToUSD(ticket.totalPrice),
          flights: flightDataProcessed(ticket),
        }
      })
      setTickets(ticketProcessedData)
      setLoading(false)
    }
  }, [ticketData])

  const handleCancelBooking = () => {
    console.log('cancel')
  }

  return (
    <Row className="userProfile-container-booking">
      <Col span={24} className="userProfile-container-booking-title">
        My Booking
      </Col>
      <Col span={24}>
        <UserBookingTable
          data={tickets}
          loading={loading}
          onCancel={handleCancelBooking}
        />
      </Col>
    </Row>
  )
}

export default UserBooking
