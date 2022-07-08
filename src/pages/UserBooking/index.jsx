import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import { UserBookingTable } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import {
  ticketCancelStatusSelector,
  ticketDataSelector,
} from '../../redux/selectors'
import {
  fetchCancelBooking,
  fetchTickets,
} from '../../redux/slices/ticketSlice'
import { isEmpty } from 'lodash/lang'

import { bookingStatus } from '../../Constants'
import { convertNumberToUSD } from '../../utils/numberFormater'
import { flightDataProcessed } from '../../utils/flightDataProcessing'
import { message } from 'antd/es'
import { useNavigate } from 'react-router-dom'

function UserBooking(props) {
  //initiation
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const ticketData = useSelector(ticketDataSelector)
  const ticketCancelStatus = useSelector(ticketCancelStatusSelector)
  const userLogin = JSON.parse(localStorage.getItem('user'))

  const [loading, setLoading] = useState(false)
  const [tickets, setTickets] = useState([])

  //Logical handling functions
  useEffect(() => {
    setLoading(true)
    dispatch(
      fetchTickets({
        passenger: userLogin.id,
        effectiveness: 1,
      })
    )
  }, [dispatch, userLogin.id])

  useEffect(() => {
    if (!isEmpty(ticketData)) {
      let ticketProcessedData = ticketData.map((ticket) => {
        return {
          ...ticket,
          status: bookingStatus[ticket.status],
          totalPrice: convertNumberToUSD(ticket.totalPrice),
          flights: flightDataProcessed(ticket),
        }
      })
      setTickets(ticketProcessedData)
      setLoading(false)
    }
  }, [ticketData])

  useEffect(() => {
    if (ticketCancelStatus === 'failed') {
      message.error("Can't cancel this booking!")
    }
    if (ticketCancelStatus === 'success') {
      message.success('Cancel this booking success!')
    }
    if (ticketCancelStatus) {
      dispatch(
        fetchTickets({
          passenger: userLogin.id,
          effectiveness: 1,
        })
      )
    }
  }, [dispatch, ticketCancelStatus, userLogin.id])

  const handleCancelBooking = (data) => {
    dispatch(
      fetchCancelBooking({
        paymentId: data,
      })
    )
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
