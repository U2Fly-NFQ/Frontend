import { Layout } from 'antd'
import './style.scss'
import { Outlet } from 'react-router-dom'
import { AdminHeader, AdminSidebar } from '../../components'
import { useState } from 'react'
const { Header, Footer, Sider, Content } = Layout
function AdminLayout() {
  //Menu collapsed
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout className="admin">
      <AdminSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <AdminHeader />
        <Content>
          <Outlet />
        </Content>
        <Footer>admin footer</Footer>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
