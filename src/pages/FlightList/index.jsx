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

const { Title } = Typography

function FlightList() {
  const { data, status } = useSelector((state) => state.flights)
  const { flight, pagination } = data

  let [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchFlights(searchParams))
  }, [searchParams])

  const changePage = (value) => {
    setSearchParams({
      ...searchParams,
      page: value,
    })
  }

  const changeSize = (value) => {
    setSearchParams({
      ...searchParams,
      offset: value,
    })
  }

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
            <Title level={4}>{pagination?.total} tours found</Title>
          </div>
          <Row gutter={[24, 24]}>
            <Col span={24} md={6}>
              <FlightListFilter />
            </Col>
            <Col span={24} md={18}>
              <Row gutter={[16, 16]} justify="center">
                <Col span={24}>
                  {status === 'loading' && <h1>loading..</h1>}
                  {flight.map((f) => (
                    <FlightCard key={f.id} data={f} />
                  ))}
                  {flight.length === 0 && <NotFoundFlight />}
                </Col>
                <Col flex={0} justify="center">
                  {pagination.page && (
                    <Pagination
                      onChange={changePage}
                      defaultCurrent={pagination.page}
                      onShowSizeChange={changeSize}
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
