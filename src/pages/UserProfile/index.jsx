import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { FlightListBanner, UserProfileSidebar } from '../../components'
import { Col, Row } from 'antd'
import './style.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDataInBooking } from '../../redux/slices/bookingFlightsSlice'
import { getLsObj } from '../../utils/localStorage'
import { getUserInformation } from '../../redux/selectors'

function UserProfile(props) {
  const dispatch = useDispatch()
  const useID = getLsObj('user').id
  const userProfile = useSelector(getUserInformation)
  useEffect(() => {
    dispatch(getUserDataInBooking(useID))
  }, [dispatch, useID])

  return (
    <div className="userProfile">
      <FlightListBanner />
      <div className="userProfile-container wide grid">
        <Row gutter={[0, 12]} justify="space-around">
          <Col xs={24} md={5}>
            <UserProfileSidebar proflie={userProfile} />
          </Col>
          <Col xs={24} md={18} className="userProfile-container-main">
            <Outlet />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default UserProfile
