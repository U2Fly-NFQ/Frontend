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
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <div className="selected-outbound">
                <div className="wrapper">
                  <div className="header">
                    <Text className="main-title">Selected outbound</Text>
                    <div className="sub-title">
                      <Text>Flight details</Text>
                      <Text>Change</Text>
                    </div>
                  </div>
                  <div className="content">
                    <div className="airline">
                      <img
                        src="https://andit.co/projects/html/and-tour/assets/img/common/biman_bangla.png"
                        alt="Airline image"
                      />
                      <Text>Bamboo Airways</Text>
                    </div>
                    <div className="line-way">
                      <div className="line-way-item from">
                        <Title level={3}>20:40</Title>
                        <Text>VCA</Text>
                      </div>
                      <div className="line-way-item way">
                        <i className="fa-solid fa-plane"></i>
                        <span className="flight-segment"></span>
                        <i className="fa-solid fa-map-location-dot"></i>
                      </div>
                      <div className="line-way-item to">
                        <Title level={3}>22:40</Title>
                        <Text>HAN</Text>
                      </div>
                    </div>
                    <Title level={3} className="price">
                      3,624,057
                    </Title>
                  </div>
                </div>
              </div>
              <div className="flight-search-title-container">
                <Title level={4}>{pagination?.total} tours found</Title>
              </div>
            </Col>
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
