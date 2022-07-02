import { Col, Row, Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { fetchFlights } from '../../redux/slices/flightSlice'
import './style.scss'
import {
  FlightListBanner,
  FlightListFilter,
  FlightSearch,
  FlightCard,
  NotFoundFlight,
} from '../../components'
import { useEffect } from 'react'

const { Title, Text } = Typography

function FlightList() {
  const flights = useSelector((state) => state.flights.data.flight)

  let [searchParams] = useSearchParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchFlights(searchParams))
  }, [searchParams])

  return (
    <div className="flight-list-page">
      <FlightListBanner />
      <div className="flight-search-container wide grid">
        <FlightSearch />
      </div>
      <div className="grid wide">
        <div className="flight-search-title-container">
          <Title level={4}>{flights.length} tours found</Title>
        </div>
        <Row gutter={[24, 24]}>
          <Col span={24} md={6}>
            <FlightListFilter />
          </Col>
          <Col span={24} md={18}>
            <Row gutter={[16, 16]} justify="center">
              <Col span={24}>
                {flights.map((f) => (
                  <FlightCard key={f.id} data={f} />
                ))}
                {flights.length === 0 && <NotFoundFlight />}
              </Col>
              {/* <Col flex={0} justify="center">
                <Pagination
                  current={1}
                  onChange={(values) => console.log(values)}
                  total={100}
                  pageSize={5}
                />
              </Col> */}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default FlightList
