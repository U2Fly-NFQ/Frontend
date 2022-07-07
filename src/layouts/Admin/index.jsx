import { Layout } from 'antd'
import './style.scss'
import { Outlet } from 'react-router-dom'
import { AdminSidebar } from '../../components'
import { useState } from 'react'

const { Footer } = Layout

function AdminLayout() {
  //Menu collapsed
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout className="admin">
      <AdminSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        {/* <AdminHeader /> */}
        <Outlet />
      </Layout>
    </Layout>
  )
}

export default AdminLayout
