import { Layout } from 'antd'
import './style.scss'
import { Outlet } from 'react-router-dom'
import { AdminHeader, AdminSidebar } from '../../components'
import { useState } from 'react'

const { Header, Content, Sider, Footer } = Layout

function AdminLayout() {
  //Menu collapsed
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout className="admin">
      <Sider
        className="admin-sidebar"
        trigger={null}
        breakpoint="md"
        onBreakpoint={(broken) => {
          setCollapsed(broken)
        }}
        collapsedWidth="50"
        collapsed={collapsed}
      >
        <AdminSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </Sider>
      <Layout>
        <Header className="admin-header">
          <AdminHeader />
        </Header>
        <Content className="admin-content">
          <Outlet />
        </Content>
        <Footer className="admin-footer">
          <p>Copyright © 2022 U2Fly Booking Designed by U2FlyTeam</p>
        </Footer>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
