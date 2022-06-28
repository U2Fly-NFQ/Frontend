import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import './style.scss'
import { Navbar } from '../../components'

const { Header, Footer, Content } = Layout

function Home() {
  return (
    <Layout>
      <Layout>
        <Navbar />
        <Content>
          <Outlet />
        </Content>
        <Footer>home footer</Footer>
      </Layout>
    </Layout>
  )
}

export default Home
