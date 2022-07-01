import React from 'react'
import { UserProfileSidebar, FlightListBanner } from '../../components'
import { Col, Row } from 'antd'
import { Outlet } from 'react-router-dom'

import './style.scss'

const UserProfile = () => {
  return (
    <div className="userProfile">
      <FlightListBanner />
      <div className="userProfile-container wide grid">
        <Row gutter={[0, 12]} justify="space-around">
          <Col xs={24} md={6}>
            <UserProfileSidebar />
          </Col>
          <Col xs={24} md={17} className="userProfile-container-main">
            <Outlet />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default UserProfile
