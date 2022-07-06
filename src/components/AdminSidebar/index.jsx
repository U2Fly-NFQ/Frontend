import { Col, Layout, Menu, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/system/logo.png'

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
      <Link to="/admin/">Dashboard</Link>,
      1,
      <i className="fa-solid fa-gauge"></i>
    ),
    getItem(
      <Link to="/admin/flights">Flights</Link>,
      2,
      <i className="fa-solid fa-plane-circle-check"></i>
    ),
    // getItem(
    //   <Link to="/admin/flights">Flights</Link>,
    //   2,
    //   <i className="fa-solid fa-plane-circle-check"></i>
    // ),
  ]

  return (
    <Sider
      className="admin-sidebar"
      trigger={null}
      breakpoint="md"
      onBreakpoint={(broken) => {
        setCollapsed(broken)
      }}
      collapsedWidth="65"
      collapsed={collapsed}
    >
      <Row className="admin-sidebar-header">
        <Col span={24} className="admin-sidebar-header-logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </Col>

        {/*<Col span={6} className="admin-sidebar-header-trigger">*/}
        {/*  {React.createElement(*/}
        {/*    collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,*/}
        {/*    {*/}
        {/*      onClick: () => setCollapsed(!collapsed),*/}
        {/*    }*/}
        {/*  )}*/}
        {/*</Col>*/}
      </Row>
      <Menu theme="light" mode="inline" items={Items} />
    </Sider>
  )
}

export default AdminSidebar
