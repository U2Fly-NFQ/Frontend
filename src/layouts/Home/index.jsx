import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import './style.scss'
import { FooterOfPage, Navbar } from '../../components'

import SubNavBar from '../../components/SubNavBar'

const { Header, Footer, Content } = Layout

function Home() {
  return (
    <Layout>
      <Layout style={{ backgroundColor: '#ffffff' }}>
        <Header className="home-header">
          <SubNavBar />
          <Navbar />
        </Header>
        <Content style={{ minHeight: '100vh' }}>
          <Outlet />
        </Content>
        <footer style={{ backgroundColor: '#ffffff', marginTop: '50px' }}>
          <FooterOfPage />
        </footer>
      </Layout>
    </Layout>
  )
}

export default Home
