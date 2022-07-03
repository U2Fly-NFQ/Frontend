import React from 'react'
import { Col, Row } from 'antd'

function UserProfileDetail(props) {
  return (
    <Row className="userProfile-container-profile">
      <Col span={24} className="userProfile-container-profile-title">
        My Profile
      </Col>
      <Col span={24}></Col>
    </Row>
  )
}

export default UserProfileDetail
