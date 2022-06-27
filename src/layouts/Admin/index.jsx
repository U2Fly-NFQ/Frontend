import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout

function AdminLayout() {
  return (
    <Layout>
      <Sider>Admin slider</Sider>
      <Layout>
        <Header>Admin header</Header>
        <Content>admin content</Content>
        <Footer>admin footer</Footer>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
