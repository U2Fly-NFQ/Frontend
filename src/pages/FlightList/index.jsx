import { Col, Row, Typography } from 'antd'
import './style.scss'
import {
  FlightListBanner,
  FlightListFilter,
  FlightSearch,
} from '../../components'

const { Title } = Typography

function FlightList() {
  return (
    <div className="flight-list-page">
      <FlightListBanner />
      <div className="grid wide">
        <Row>
          <div className="flight-search-container">
            <FlightSearch />
          </div>
          <Col span={24}>
            <Title level={3}>42 tours found</Title>
          </Col>
          <Col span={6}>
            <FlightListFilter />
          </Col>
          <Col span={18}>Flight list</Col>
        </Row>
      </div>
    </div>
  )
}

export default FlightList
