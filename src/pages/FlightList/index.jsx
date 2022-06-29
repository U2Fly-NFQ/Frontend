import { Col, Row, Typography } from 'antd'
import './style.scss'
import {
  FlightListBanner,
  FlightListFilter,
  FlightSearch,
  FlightCard,
} from '../../components'

const { Title } = Typography

function FlightList() {
  return (
    <div className="flight-list-page">
      <FlightListBanner />
      <div className="flight-search-container wide grid">
        <FlightSearch />
      </div>
      <div className="flight-search-title-container">
        <Title level={3}>42 tours found</Title>
      </div>
      <div className="grid wide">
        <Row gutter={[24, 24]}>
          <Col span={24} sm={8} lg={6}>
            <FlightListFilter />
          </Col>
          <Col span={24} sm={16} lg={18}>
            <FlightCard />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default FlightList
