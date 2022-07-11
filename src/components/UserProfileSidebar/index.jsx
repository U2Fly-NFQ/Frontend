import React, { useEffect, useState } from 'react'
import { Row, Col, Avatar, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'

function UserProfileSidebar({ proflie }) {
  const location = useLocation()
  const [selectedKeys, setSelectedKeys] = useState(['1'])
  const { t } = useTranslation()

  useEffect(() => {
    if (location.pathname === '/profile/booking') {
      setSelectedKeys(['1'])
    }
    if (location.pathname === '/profile/history') {
      setSelectedKeys(['2'])
    }
  }, [location.pathname])

  const getItem = (label, key, icon, children) => {
    return {
      key,
      icon,
      children,
      label,
    }
  }

  const items = [
    getItem(
      <Link to="/profile/booking">{t('My Booking')}</Link>,
      1,
      <i className="fa-solid fa-address-card"></i>
    ),
    getItem(
      <Link to="/profile/history">{t('Booking History')}</Link>,
      2,
      <i className="fa-solid fa-clock-rotate-left"></i>
    ),
  ]

  return (
    <Row className="userProfile-sidebar">
      <Col span={24} className="userProfile-sidebar-header">
        <Row>
          <Col span={24} className="userProfile-sidebar-header-avatar">
            <Avatar
              size={{
                xs: 24,
                sm: 32,
                md: 40,
                lg: 64,
                xl: 80,
                xxl: 100,
              }}
              icon={<UserOutlined />}
            />
          </Col>
          <Col span={24} className="userProfile-sidebar-header-name">
            {proflie.name}
          </Col>
          <Col span={24} className="userProfile-sidebar-header-phone">
            {/*+84 094 8478 487*/}
          </Col>
          <Col span={24} className="userProfile-sidebar-header-email">
            {proflie.email}
          </Col>
        </Row>
      </Col>
      <Col span={24} className="userProfile-sidebar-menu">
        <Menu items={items} selectedKeys={selectedKeys} />
      </Col>
    </Row>
  )
}

export default UserProfileSidebar
