import { Col, Layout, Menu, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const { Sider } = Layout

function AdminSidebar({ collapsed, setCollapsed }) {
  const getItem = (label, key, icon, children) => {
    return {
      key,
      icon,
      children,
      label,
    }
  }

  const Items = [
    getItem(
      <Link to="/admin">Dashboard</Link>,
      1,
      <i className="fa-solid fa-gauge"></i>
    ),
    getItem(
      <Link to="/admin/discount">Discount</Link>,
      2,
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
              fontSize: 24,
            }}
          >
            U2Fly
          </Link>
        </Col>
      </Row>
      <Menu theme="light" mode="inline" items={Items} />
    </>
  )
}

export default AdminSidebar
