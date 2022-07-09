import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import { UserBookingTable } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHistoryBooking } from '../../redux/slices/ticketSlice'
import {
  ticketHistoryDataSelector,
  ticketRatingStatusSelector,
} from '../../redux/selectors'
import { isEmpty } from 'lodash/lang'
import { bookingStatus } from '../../Constants'
import { convertNumberToUSD } from '../../utils/numberFormater'
import { flightDataProcessed } from '../../utils/flightDataProcessing'

function UserHistory(props) {
  //initiation
  const dispatch = useDispatch()
  const ticketHistory = useSelector(ticketHistoryDataSelector)
  const ticketRating = useSelector(ticketRatingStatusSelector)
  const userLogin = JSON.parse(localStorage.getItem('user'))

  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(false)

  //Logical handling functions
  useEffect(() => {
    setLoading(true)
    dispatch(
      fetchHistoryBooking({
        passenger: userLogin.id,
        effectiveness: 0,
      })
    )
  }, [dispatch, userLogin.id])

  useEffect(() => {
    if (!isEmpty(ticketHistory)) {
      let ticketProcessedData = ticketHistory.map((ticket) => {
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
  }, [ticketHistory])

  useEffect(() => {
    dispatch(
      fetchHistoryBooking({
        passenger: userLogin.id,
        effectiveness: 0,
      })
    )
  }, [ticketRating])

  return (
    <Row className="userProfile-container-history">
      <Col span={24} className="userProfile-container-history-title">
        Booking History
      </Col>
      <Col span={24}>
        <UserBookingTable data={tickets} loading={loading} />
      </Col>
    </Row>
  )
}

export default UserHistory
