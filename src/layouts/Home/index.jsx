import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import './style.scss'

const { Header, Footer, Content } = Layout

function Home() {
  return (
    <Layout>
      <Layout>
        <Header>home header</Header>
        <Content>
          <h1 className="test-h1">Hello</h1>
          <Outlet />
        </Content>
        <Footer>home footer</Footer>
      </Layout>
    </Layout>
  )
}

export default Home
