import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import { UserBookingTable } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHistoryBooking } from '../../redux/slices/ticketSlice'
import { ticketHistoryDataSelector } from '../../redux/selectors'
import { isEmpty } from 'lodash/lang'
import moment from 'moment'
import { bookingStatus } from '../../Constants'

function UserHistory(props) {
  //initiation
  const dispatch = useDispatch()
  const ticketHistory = useSelector(ticketHistoryDataSelector)

  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(false)

  //Logical handling functions
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      dispatch(fetchHistoryBooking())
    }, 500)
  }, [dispatch])

  useEffect(() => {
    if (!isEmpty(ticketHistory)) {
      let ticketProcessedData = ticketHistory.map((ticket) => {
        let flights = ticket.flights.map((flight) => {
          let startDate = new Date(`${flight.startDate} ${flight.startTime}`)
          let endDate = new Date(`${flight.startDate} ${flight.startTime}`)
          endDate.setMinutes(endDate.getMinutes() + flight.duration * 60)
          let boardingTime = new Date(`${flight.startDate} ${flight.startTime}`)
          boardingTime.setMinutes(boardingTime.getMinutes() - 30)
          return {
            ...flight,
            startTime: moment(startDate).format('DD/M/YYYY hh:mm A'),
            endTime: moment(endDate).format('DD/M/YYYY hh:mm A'),
            boardingTime: moment(boardingTime).format('DD/M/YYYY hh:mm A'),
          }
        })
        return {
          ...ticket,
          status: bookingStatus[ticket.status],
          flights: flights,
        }
      })
      setLoading(false)
      setTickets(ticketProcessedData)
    }
  }, [ticketHistory])

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
