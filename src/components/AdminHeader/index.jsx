import React, { useState } from 'react'
import { Avatar, Dropdown, Layout, Input, Row, Col } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import ProfileMenu from './ProfileMenu'

const { Header } = Layout
const { Search } = Input

function AdminHeader() {
  //initiation
  const [search, setSearch] = useState('')

  return (
    <Header className="admin-header">
      <Row className="admin-header-content">
        <Col span={12} className="admin-header-content-left">
          <Search
            placeholder="Search in app"
            enterButton="Search"
            value={search}
          />
        </Col>
        <Col span={12} className="admin-header-content-right">
          <Dropdown className="profileMenu" overlay={<ProfileMenu />}>
            <Avatar size="large" icon={<UserOutlined />} />
          </Dropdown>
        </Col>
      </Row>
    </Header>
  )
}

export default AdminHeader
