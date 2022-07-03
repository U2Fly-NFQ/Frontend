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
  NotFoundFlight,
} from '../../components'
import { useEffect } from 'react'
import { ScrollToTopButton } from '../../components'

const { Title, Text } = Typography

function FlightList() {
  const flights = useSelector((state) => state.flights.data.flight)
  const pagination = useSelector((state) => state.flights.data.pagination)

  let [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()

  // useEffect(() => {
  //   setSearchParams({
  //     ...searchParams,
  //     page: 1,
  //     offset: 3,
  //   })
  // }, [])

  console.log(pagination)

  useEffect(() => {
    dispatch(fetchFlights(searchParams))
  }, [searchParams])

  return (
    <>
      <ScrollToTopButton />
      <div className="flight-list-page">
        <FlightListBanner />
        <div className="wide grid">
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
                <Col flex={0} justify="center">
                  {pagination.page && (
                    <Pagination
                      defaultCurrent={pagination.page}
                      onChange={(values) => console.log(values)}
                      total={pagination.total}
                      pageSize={pagination.offset}
                    />
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default FlightList
