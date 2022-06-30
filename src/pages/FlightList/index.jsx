import { Col, Row, Typography, Pagination } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import './style.scss'
import {
  FlightListBanner,
  FlightListFilter,
  FlightSearch,
  FlightCard,
} from '../../components'
import { fetchFlights } from '../../redux/slices/flightSlice'
import { useEffect } from 'react'

const { Title } = Typography

function FlightList() {
  const dispatch = useDispatch()
  const flights = useSelector((state) => state.flights)

  useEffect(() => {
    dispatch(fetchFlights())
  })

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
          <Col span={24} md={6}>
            <FlightListFilter />
          </Col>
          <Col span={24} md={18}>
            <Row gutter={[16, 16]} justify="center">
              <Col span={24}>
                <FlightCard />
                <FlightCard />
                <FlightCard />
                <FlightCard />
              </Col>
              <Col flex={0} justify="center">
                <Pagination
                  current={1}
                  onChange={(values) => console.log(values)}
                  total={100}
                  pageSize={5}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default FlightList
