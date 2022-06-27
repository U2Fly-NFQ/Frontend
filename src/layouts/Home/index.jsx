import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import './style.scss'

import SubNavBar from '../../components/SubNavBar'

const { Header, Footer, Content } = Layout

function Home() {
  return (
    <Layout>
      <Layout>
        <Header className="home-header">
          <SubNavBar />
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer>home footer</Footer>
      </Layout>
    </Layout>
  )
}

export default Home
