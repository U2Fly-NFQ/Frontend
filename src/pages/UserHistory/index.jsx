import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import { UserBookingTable } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHistoryBooking } from '../../redux/slices/ticketSlice'
import { ticketHistoryDataSelector } from '../../redux/selectors'
import { isEmpty } from 'lodash/lang'
import moment from 'moment'
import { bookingStatus } from '../../Constants'
import { getBoardingDateTime, getEndDateTime } from '../../utils'
import { convertNumberToUSD } from '../../utils/numberFormater'

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
          status: bookingStatus[2],
          totalPrice: convertNumberToUSD(ticket.totalPrice),
          flights: flights,
        }
      })
      setTickets(ticketProcessedData)
      setLoading(false)
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
