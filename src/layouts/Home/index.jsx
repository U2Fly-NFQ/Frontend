import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import './style.scss'
import { FooterOfPage, Navbar } from '../../components'

import SubNavBar from '../../components/SubNavBar'

const { Header, Footer, Content } = Layout

function Home() {
  return (
    <Layout>
      <Layout>
        <Header className="home-header">
          <SubNavBar />
          <Navbar />
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer>
          <FooterOfPage />
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Home
