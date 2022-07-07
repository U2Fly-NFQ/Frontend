import React, { useState } from 'react'
import { Avatar, Dropdown, Layout, Input, Row, Col } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import ProfileMenu from './ProfileMenu'

const { Header } = Layout
const { Search } = Input

function AdminHeader() {
  //initiation
  const [search, setSearch] = useState('')

  //Logical handling functions
  const handleSearch = (value) => {
    console.log(value)
    setSearch('')
  }
  return (
    <Header className="admin-header">
      <Row className="admin-header-content">
        <Col xs={0} sm={12} className="admin-header-content-left">
          <Search
            placeholder="Search in app"
            enterButton="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onSearch={handleSearch}
          />
        </Col>
        <Col xs={24} sm={12} className="admin-header-content-right">
          <Dropdown className="profileMenu" overlay={<ProfileMenu />}>
            <Avatar size="large" icon={<UserOutlined />} />
          </Dropdown>
        </Col>
      </Row>
    </Header>
  )
}

export default AdminHeader
