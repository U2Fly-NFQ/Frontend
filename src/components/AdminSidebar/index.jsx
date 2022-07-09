import { Col, Menu, Row } from 'antd'
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const getItem = (label, key, icon, children) => {
  return {
    key,
    icon,
    children,
    label,
  }
}

function AdminSidebar({ collapsed, setCollapsed }) {
  const location = useLocation()
  const [activeLocation, setActiveLocation] = useState()

  useEffect(() => {
    setActiveLocation(location.pathname)
  }, [])

  const handleChangeKey = (item) => {
    setActiveLocation(item.key)
  }

  const Items = [
    getItem(
      <Link to="/admin">Dashboard</Link>,
      '/admin',
      <i className="fa-solid fa-gauge"></i>
    ),
    getItem(
      <Link to="/admin/discount">Discount</Link>,
      '/admin/discount',
      <i className="fa-solid fa-tags"></i>
    ),
  ]

  return (
    <>
      <Row className="admin-sidebar-header">
        <Col span={24} className="admin-sidebar-header-logo">
          <Link
            to="/"
            style={{
              fontSize: 22,
            }}
          >
            U2Fly
          </Link>
        </Col>
      </Row>
      <Menu
        theme="light"
        mode="inline"
        items={Items}
        selectedKeys={[activeLocation]}
        onClick={handleChangeKey}
      />
    </>
  )
}

export default AdminSidebar
