import {
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons'
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
    getItem(<Link to="/admin/">Dashboard</Link>, 1, <DashboardOutlined />),
    getItem(<Link to="/admin/users">users</Link>, 2, <UserOutlined />),
  ]

  return (
    <Sider
      className="admin-sidebar"
      trigger={null}
      collapsedWidth="65"
      collapsed={collapsed}
    >
      <Row className="admin-sidebar-header">
        {!collapsed && (
          <Col span={18} className="admin-sidebar-header-logo">
            <img src={Logo} alt="logo" />
          </Col>
        )}
        <Col span={6} className="admin-sidebar-header-trigger">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Col>
      </Row>
      <Menu theme="light" mode="inline" items={Items} />
    </Sider>
  )
}

export default AdminSidebar
