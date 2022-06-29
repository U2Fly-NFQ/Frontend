import { Layout } from 'antd'
import { HomeBanner } from '../../components'

const { Header, Footer, Sider, Content } = Layout

function Home() {
  return (
    <div className="home-page">
      <HomeBanner />
    </div>
  )
}

export default Home
