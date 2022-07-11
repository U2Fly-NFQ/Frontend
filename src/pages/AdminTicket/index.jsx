import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import { TableListTicket } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTicketHistory } from '../../redux/slices/ticketSlice'
import {
  getAllTicketHistorySelector,
  ticketStatusSelector,
} from '../../redux/selectors'

import './index.scss'
import {
  logicForUserPage,
  processingTicketData,
} from '../../utils/logicForUserPage'

function AdminTicket(props) {
  //initiation
  const dispatch = useDispatch()

  const ticketLoadingStatus = useSelector(ticketStatusSelector)
  const ticketData = useSelector(getAllTicketHistorySelector)
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(false)

  //handle loading animation
  useEffect(() => {
    logicForUserPage(ticketLoadingStatus, 'loading', setLoading)
  }, [ticketLoadingStatus])

  //Logical handling functions
  useEffect(() => {
    dispatch(getAllTicketHistory())
  }, [dispatch])

  useEffect(() => {
    processingTicketData(ticketData, setTickets)
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
