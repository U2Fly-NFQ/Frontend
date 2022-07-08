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
        <Content
          style={{
            padding: '20px',
          }}
        >
          <Outlet />
        </Content>
        {/* <Footer></Footer> */}
      </Layout>
    </Layout>
  )
}

export default AdminLayout
