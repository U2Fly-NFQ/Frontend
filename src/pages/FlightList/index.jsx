import { Col, Row, Typography, Pagination } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { fetchFlights } from '../../redux/slices/flightSlice'
import './style.scss'
import {
  FlightListBanner,
  FlightListFilter,
  FlightSearch,
  FlightCard,
} from '../../components'
import { useEffect } from 'react'

const { Title } = Typography

function FlightList() {
  const flights = useSelector((state) => state.flights)
  const airports = useSelector((state) => state.airports.data)

  let [searchParams, setSearchParams] = useSearchParams()
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
      <div className="flight-search-title-container">
        <Title level={3}>{flights.data.length} tours found</Title>
      </div>
      <div className="grid wide">
        <Row gutter={[24, 24]}>
          <Col span={24} md={6}>
            <FlightListFilter />
          </Col>
          <Col span={24} md={18}>
            <Row gutter={[16, 16]} justify="center">
              <Col span={24}>
                {flights.data.map((f) => (
                  <FlightCard key={f.id} data={f} />
                ))}
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
