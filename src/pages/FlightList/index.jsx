import { Col, Row, Typography, Pagination, Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { fetchFlights } from '../../redux/slices/flightSlice'
import FlightApi from '../../api/Flight'
import './style.scss'
import {
  FlightListBanner,
  FlightListFilter,
  FlightSearch,
  FlightCard,
  NotFoundFlight,
} from '../../components'
import { useEffect, useState } from 'react'
import { ScrollToTopButton } from '../../components'
import { getLsObj } from '../../utils/localStorage'
import moment from 'moment'

const { Title, Text } = Typography
const { Option } = Select

function FlightList() {
  const dispatch = useDispatch()
  const { data, status } = useSelector((state) => state.flights)
  const { flight, pagination } = data
  const [searchParams, setSearchParams] = useSearchParams()

  const [order, setOrder] = useState('price.asc')

  const changeOrder = (value) => {
    setOrder(value)
    searchParams.set('order', value)
    setSearchParams(searchParams)
  }

  useEffect(() => {
    dispatch(fetchFlights(searchParams))
  }, [searchParams])

  const changePage = (value) => {
    setSearchParams(searchParams.set('page', value))
  }

  const changeSize = (value) => {
    setSearchParams(searchParams.set('offset', value))
  }

  const checkFirstVisitWithoutParams = () => {
    if (
      !searchParams.get('departure') ||
      !searchParams.get('arrival') ||
      !searchParams.get('startDate') ||
      !searchParams.get('seatType') ||
      !searchParams.get('seatAvailable')
    )
      return true
    return false
  }

  const [selectedFlight, setSelectedFlight] = useState({})

  let flightStorage = getLsObj('flight')

  useEffect(() => {
    if (flightStorage.ticketType === 'roundTrip' && flightStorage.id) {
      async function fetchData() {
        const rs = await FlightApi.get(flightStorage.id)
        setSelectedFlight(rs.data.data)
      }
      fetchData()
    }
  }, [])

  return (
    <>
      <ScrollToTopButton />
      <div className="flight-list-page">
        <FlightListBanner />
        <div className="grid wide">
          <FlightSearch />
        </div>
        {!checkFirstVisitWithoutParams() && (
          <div className="grid wide">
            <Row gutter={[24, 24]}>
              <Col span={24}>
                {Object.keys(selectedFlight).length !== 0 && (
                  <div className="selected-outbound">
                    <div className="wrapper">
                      <div className="header">
                        <Text className="main-title">Selected outbound</Text>
                        <div className="sub-title">
                          <Text>Flight details</Text>
                          <Text>Delete</Text>
                        </div>
                      </div>
                      <div className="content">
                        <div className="airline">
                          <img
                            src="https://andit.co/projects/html/and-tour/assets/img/common/biman_bangla.png"
                            alt="Airline image"
                          />
                          <Text>{selectedFlight.airline.name}</Text>
                        </div>
                        <div className="line-way">
                          <div className="line-way-item from">
                            <Title level={3}>{selectedFlight.startTime}</Title>
                            <Text>{selectedFlight.departure.iata}</Text>
                          </div>
                          <div className="line-way-item way">
                            <i className="fa-solid fa-plane"></i>
                            <span className="flight-segment"></span>
                            <i className="fa-solid fa-map-location-dot"></i>
                          </div>
                          <div className="line-way-item to">
                            <Title level={3}>
                              {moment(selectedFlight.startTime, 'HH:mm:ss')
                                .add(selectedFlight.duration * 60, 'minutes')
                                .format('HH:mm')}
                            </Title>
                            <Text>{selectedFlight.arrival.iata}</Text>
                          </div>
                        </div>
                        <Title level={3} className="price">
                          {flightStorage.seatType === 'Economy' &&
                            selectedFlight.seat[0].price}
                          {flightStorage.seatType === 'Business' &&
                            selectedFlight.seat[1].price}
                        </Title>
                      </div>
                    </div>
                  </div>
                )}
              </Col>
              <Col span={24} md={6}>
                <FlightListFilter />
              </Col>
              <Col span={24} md={18}>
                <Row gutter={[16, 16]} justify="center">
                  <Col span={24}>
                    <div className="flight-search-title-container">
                      <Title level={4}>
                        {pagination?.total || 0} tours found
                      </Title>
                      <Select
                        value={order}
                        style={{ width: 180, textAlign: 'left' }}
                        onChange={changeOrder}
                      >
                        <Option value="price.asc">Cheapest price first</Option>
                        <Option value="duration.asc">Fastest time first</Option>
                      </Select>
                    </div>
                  </Col>
                  <Col span={24}>
                    {
                      // flightStorage.ticketType === 'roundTrip'
                      // Handle one way list or round list
                    }
                    {status === 'loading' && (
                      <>
                        <FlightCard loading={true} />
                        <FlightCard loading={true} />
                        <FlightCard loading={true} />
                        <FlightCard loading={true} />
                      </>
                    )}
                    {flight.map((f) => (
                      <FlightCard key={f.id} data={f} />
                    ))}
                    {flight.length === 0 && <NotFoundFlight />}
                    {pagination.page && pagination.page !== 1 && (
                      <Pagination
                        onChange={changePage}
                        current={pagination.page}
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
        )}
      </div>
    </>
  )
}

export default FlightList
