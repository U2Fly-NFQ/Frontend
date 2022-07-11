import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import { UserBookingTable } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHistoryBooking } from '../../redux/slices/ticketSlice'
import {
  ticketHistoryDataSelector,
  ticketRatingStatusSelector,
  ticketStatusSelector,
} from '../../redux/selectors'
import { message } from 'antd/es'
import {
  logicForUserPage,
  processingTicketData,
} from '../../utils/logicForUserPage'

function UserHistory(props) {
  //initiation
  const dispatch = useDispatch()
  const ticketLoadingStatus = useSelector(ticketStatusSelector)
  const ticketHistory = useSelector(ticketHistoryDataSelector)
  const ticketRating = useSelector(ticketRatingStatusSelector)
  const userLogin = JSON.parse(localStorage.getItem('user'))

  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(false)

  //handle loading animation
  useEffect(() => {
    logicForUserPage(ticketLoadingStatus, 'loading', setLoading)
  }, [ticketLoadingStatus])

  //load data for booking history
  useEffect(() => {
    dispatch(
      fetchHistoryBooking({
        passenger: userLogin.id,
        effectiveness: 0,
      })
    )
  }, [dispatch, userLogin.id])

  //processing data when load success
  useEffect(() => {
    processingTicketData(ticketHistory, setTickets)
  }, [ticketHistory])

  //reload data when rating success
  useEffect(() => {
    if (ticketRating) {
      dispatch(
        fetchHistoryBooking({
          passenger: userLogin.id,
          effectiveness: 0,
        })
      )
      message.success('Thanks for your review. Wish you have a good trip!')
    }
  }, [dispatch, ticketRating, userLogin.id])

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
