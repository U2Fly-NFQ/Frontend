import React from 'react'
import { Col, Row, Avatar, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { DashboardOutlined } from '@ant-design/icons'

function BookedSidebar(props) {
  const getItem = (label, key, icon, children) => {
    return {
      key,
      icon,
      children,
      label,
    }
  }

  const items = [
    getItem(<Link to="/profile">Dashboard</Link>, 1, <DashboardOutlined />),
    getItem(
      <Link to="/profile/mybooking">My Booking</Link>,
      2,
      <i className="fa-solid fa-address-card"></i>
    ),
  ]

  return (
    <Row className="booked-sidebar">
      <Col className="booked-sidebar-header">
        <Row>
          <Col span={24} className="booked-sidebar-header-avatar">
            <Avatar
              size={{
                xs: 24,
                sm: 32,
                md: 40,
                lg: 64,
                xl: 80,
                xxl: 100,
              }}
              icon={
                <img
                  src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.6435-9/147238869_2737423053135997_5432239568851874162_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=zVwQ59TvZ1gAX-S0gcK&_nc_oc=AQniGBrBuoIMCZqjMjJgtSgX28eONnyplXB0_vcD6rkL7Xmo9ZxGFXkV5X4duXIUSjU&_nc_ht=scontent.fvca1-2.fna&oh=00_AT9hHya5lsTA9w-XKjfm3koqclwvO7BrLjnfdu7H2luAOQ&oe=62E4B213"
                  alt="avatar"
                />
              }
            />
          </Col>
          <Col span={24} className="booked-sidebar-header-name">
            Sang Sáng Sủa
          </Col>
          <Col span={24} className="booked-sidebar-header-phone">
            +84 094 8478 487
          </Col>
          <Col span={24} className="booked-sidebar-header-email">
            sangsangsua@gmail.com
          </Col>
        </Row>
      </Col>
      <Col span={24} className="booked-sidebar-menu">
        <Menu items={items} />
      </Col>
    </Row>
  )
}

export default BookedSidebar
