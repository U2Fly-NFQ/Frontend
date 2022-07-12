import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import { UserBookingTable } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import {
  ticketCancelStatusSelector,
  ticketDataSelector,
  ticketStatusSelector,
} from '../../redux/selectors'
import {
  fetchCancelBooking,
  fetchTickets,
} from '../../redux/slices/ticketSlice'

import { message } from 'antd/es'
import { useNavigate } from 'react-router-dom'
import {
  logicForUserPage,
  processingTicketData,
} from '../../utils/logicForUserPage'
import { isEmpty } from 'lodash/lang'
import { useLoadingContext } from 'react-router-loading'
import { useTranslation } from 'react-i18next'

function UserBooking(props) {
  //initiation
  const loadingContext = useLoadingContext()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const ticketLoadingStatus = useSelector(ticketStatusSelector)
  const ticketData = useSelector(ticketDataSelector)
  const ticketCancelStatus = useSelector(ticketCancelStatusSelector)
  const userLogin = JSON.parse(localStorage.getItem('user'))
  const [loading, setLoading] = useState(false)
  const [tickets, setTickets] = useState([])
  const { t } = useTranslation()

  //handle loading animation
  useEffect(() => {
    logicForUserPage(ticketLoadingStatus, 'loading', setLoading)
    loadingContext.done()
  }, [ticketLoadingStatus])

  //load data for user booking
  useEffect(() => {
    dispatch(
      fetchTickets({
        passenger: userLogin.id,
        effectiveness: 1,
      })
    )
  }, [dispatch, userLogin.id])

  //processing data when load success
  useEffect(() => {
    if (isEmpty(ticketData)) {
      setTickets([])
    }
    processingTicketData(ticketData, setTickets)
  }, [ticketData])

  //func handle cancel booking
  const handleCancelBooking = (data) => {
    dispatch(
      fetchCancelBooking({
        paymentId: data,
      })
    )
  }

  //reload data when cancel success
  useEffect(() => {
    if (ticketCancelStatus === 'failed') {
      message.error("Can't cancel this booking!")
    }
    if (ticketCancelStatus === 'success') {
      message.success('Cancel this booking success!')
      dispatch(
        fetchTickets({
          passenger: userLogin.id,
          effectiveness: 1,
        })
      )
    }
  }, [dispatch, ticketCancelStatus, userLogin.id])

  return (
    <Row className="userProfile-container-booking">
      <Col span={24} className="userProfile-container-booking-title">
        {t('My Booking')}
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
