import { Col, Layout, Row } from 'antd'
import FlightListFilter from '../../components/FlightListFilter'
const { Sider, Content } = Layout

function FlightList() {
  return (
    <Layout>
      <Row>
        <Col span={6}>
          <FlightListFilter />
        </Col>
        <Col span={18}>Flight List</Col>
      </Row>
    </Layout>
  )
}

export default FlightList
