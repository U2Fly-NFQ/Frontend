import { Layout } from 'antd'
const { Sider, Content } = Layout

function FlightList() {
  return (
    <Layout>
      <Sider>Flight list Sider</Sider>
      <Content>Flight list Content</Content>
    </Layout>
  )
}

export default FlightList
