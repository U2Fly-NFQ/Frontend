import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import { UserBookingTable } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { ticketDataSelector } from '../../redux/selectors'
import { fetchTickets } from '../../redux/slices/ticketSlice'
import { isEmpty } from 'lodash/lang'

import moment from 'moment'
import { bookingStatus } from '../../Constants'

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
      dispatch(fetchTickets())
    }, 500)
  }, [dispatch])

  useEffect(() => {
    if (!isEmpty(ticketData)) {
      let ticketProcessedData = ticketData.map((ticket) => {
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
          total_price: ticket.total_price,
          status: bookingStatus[ticket.status],
          flights: flights,
        }
      })
      setTickets(ticketProcessedData)
      setLoading(false)
    }
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
