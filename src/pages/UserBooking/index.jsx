import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import { UserBookingTable } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { ticketDataSelector } from '../../redux/selectors'
import { fetchTickets } from '../../redux/slices/ticketSlice'
import { isEmpty } from 'lodash/lang'

import { bookingStatus } from '../../Constants'
import moment from 'moment'
import { getBoardingDateTime, getEndDateTime } from '../../utils'
import { convertNumberToUSD } from '../../utils/numberFormater'

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
    setTimeout(() => {
      dispatch(
        fetchTickets()
        // fetchTickets({
        //   passenger: userLogin.id,
        //   effectiveness: 1,
        // })
      )
    }, 500)
  }, [dispatch, userLogin.id])

  useEffect(() => {
    if (!isEmpty(ticketData)) {
      let ticketProcessedData = ticketData.map((ticket) => {
        let flights = ticket.flights.map((flight) => {
          let ETD = `${flight.startTime} ${flight.startDate}`
          let endDate = getEndDateTime(flight.duration, ETD)
          let boardingTime = getBoardingDateTime(flight.duration, ETD)
          return {
            ...flight,
            departure: `${flight.departure.city} (${flight.departure.iata})`,
            arrival: `${flight.arrival.city} (${flight.arrival.iata})`,
            ETD: moment(ETD).format('DD/M/YYYY hh:mm A'),
            ETA: moment(endDate).format('DD/M/YYYY hh:mm A'),
            boardingTime: moment(boardingTime).format('DD/M/YYYY hh:mm A'),
          }
        })
        return {
          ...ticket,
          status: bookingStatus[0],
          totalPrice: convertNumberToUSD(ticket.totalPrice),
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
