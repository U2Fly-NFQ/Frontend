import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import { TableListTicket } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTicketHistory } from '../../redux/slices/ticketSlice'
import { getAllTicketHistorySelector } from '../../redux/selectors'
import { isEmpty } from 'lodash/lang'
import moment from 'moment'
import { bookingStatus } from '../../Constants'
import { convertNumberToUSD } from '../../utils/numberFormater'
import { getBoardingDateTime, getEndDateTime } from '../../utils/flight'

import './index.scss'
// import TableListTicket from '../../components/TableListTicket'
function AdminTicket(props) {
  //initiation
  const dispatch = useDispatch()
  // const ticketHistory = useSelector(ticketHistoryDataSelector)
  const ticketData = useSelector(getAllTicketHistorySelector)
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(false)
  console.log(ticketData)
  //Logical handling functions
  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      dispatch(getAllTicketHistory())
    }, 500)
  }, [dispatch])

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
          status: bookingStatus[2],
          totalPrice: convertNumberToUSD(ticket.totalPrice),
          flights: flights,
        }
      })
      setTickets(ticketProcessedData)
      setLoading(false)
    }
  }, [ticketData])

  return (
    <div className="admin-layout">
      <Row className="userProfile-container-history">
        <Col span={24} className="userProfile-container-history-title">
          Total Ticket
        </Col>
        <Col span={24}>
          <TableListTicket data={tickets} loading={loading} />
        </Col>
      </Row>
    </div>
  )
}

export default AdminTicket
