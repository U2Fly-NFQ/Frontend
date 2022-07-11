import React, { useState } from 'react'
import { Layout, Input, Row, Col } from 'antd'
import ProfileMenu from './ProfileMenu'

const { Header } = Layout
const { Search } = Input

function AdminHeader() {
  //initiation
  const [search, setSearch] = useState('')

  const handleSearch = (value) => {
    setSearch('')
  }
  return (
    <Row className="admin-header-content">
      <Col xs={0} sm={12} className="admin-header-content-left">
        {/* <Search
            placeholder="Search in app"
            enterButton="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onSearch={handleSearch}
          /> */}
      </Col>
      <Col xs={24} sm={12} className="admin-header-content-right">
        <ProfileMenu />
      </Col>
    </Row>
  )
}

export default AdminHeader
