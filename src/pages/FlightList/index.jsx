import { Col, Row } from 'antd'
import FlightListFilter from '../../components/FlightListFilter'
// const { Sider, Content } = Layout

function FlightList() {
  return (
    <div className="flightListPage wide grid">
      <Row>
        <Col span={8}>
          <FlightListFilter />
        </Col>
        <Col span={16}>Flight list</Col>
      </Row>
    </div>
  )
}

export default FlightList
