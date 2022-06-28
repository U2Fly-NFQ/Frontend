import { Col, Row } from 'antd'
import './style.scss'
import {
  FlightListBanner,
  FlightListFilter,
  FlightSearch,
} from '../../components'

function FlightList() {
  return (
    <div className="flight-list-page">
      <FlightListBanner />
      <FlightSearch />
      <div className="grid wide">
        <Row>
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
