import { Col, Row, Typography, Pagination, Select, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { fetchFlights } from '../../redux/slices/flightSlice'
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
import { getLsObj, updateLs } from '../../utils/localStorage'
import moment from 'moment'
import axios from 'axios'
import { CloseOutlined } from '@ant-design/icons'
import { scrollTo } from '../../utils/scroll'
import Home from '../Home'

const { Title, Text } = Typography
const { Option } = Select

function FlightList() {
  const dispatch = useDispatch()
  const { onetrip, roundtrip, status } = useSelector((state) => state.flights)
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const [order, setOrder] = useState('price.asc')
  const [selectedFlight, setSelectedFlight] = useState({})
  const flightStorage = getLsObj('flight')
  const activeData = flightStorage.ticketType === 'oneWay' ? onetrip : roundtrip
  const { pagination } = activeData

  const changeOrder = (value) => {
    setOrder(value)
    searchParams.set('order', value)
    setSearchParams(searchParams)
  }

  useEffect(() => {
    if (checkFirstVisitWithoutParams()) {
      updateLs('flight', {
        id: '',
        roundId: '',
      })
      setSelectedFlight({})
      return
    }

    if (searchParams.get('ticketType') === 'oneWay') {
      updateLs('flight', {
        id: '',
        roundId: '',
      })
      setSelectedFlight({})
    }

    if (window.location.search) {
      scrollTo(400)
    }

    if (flightStorage.ticketType === 'roundTrip' && flightStorage.id) {
      async function fetchData() {
        // const rs = await FlightApi.get(flightStorage.id)
        const rs = await axios.get(
          'https://62c45182abea8c085a729073.mockapi.io/flights-by-id/' +
            flightStorage.id
        )
        setSelectedFlight(rs.data)
      }
      fetchData()
    }

    // Before action is searching
    dispatch(fetchFlights(searchParams))
  }, [searchParams, flightStorage.id])

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

  const deleteSelected = () => {
    updateLs('flight', {
      id: '',
    })
    navigate(0)
  }

  let selectedPrice = 0

  if (selectedFlight.seat && selectedFlight.seat.length)
    selectedPrice =
      (flightStorage.seatType === 'Economy' && selectedFlight.seat[0].price) ||
      selectedFlight.seat[1].price

  return (
    <>
      <ScrollToTopButton />
      <div className="flight-list-page">
        <FlightListBanner />
        <div className="grid wide">
          <FlightSearch />
        </div>
        {(!checkFirstVisitWithoutParams() && (
          <div className="grid wide">
            <Row gutter={[16, 16]}>
              <Col span={24}>
                {Object.keys(selectedFlight).length !== 0 && (
                  <div className="selected-outbound">
                    <div className="wrapper">
                      <div className="header">
                        <Text className="main-title">Selected outbound</Text>
                        <div className="sub-title">
                          {/* <Button type="link" size="small">
                            Flight details
                          </Button> */}
                          <Button
                            icon={<CloseOutlined color="#ddd" />}
                            size="small"
                            shape="circle"
                            onClick={deleteSelected}
                          ></Button>
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
                            <Title level={3}>
                              {moment(
                                selectedFlight.startTime,
                                'HH:mm:ss'
                              ).format('HH:mm')}
                            </Title>
                            <Text>{selectedFlight.departure.iata}</Text>
                          </div>
                          <div className="line-way-item way">
                            <i className="fa-solid fa-plane"></i>
                            <span className="flight-segment"></span>
                            <i className="fa-solid fa-map-location-dot"></i>
                            <span className="duration">1.5 hour</span>
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
                        <div className="price-box">
                          <Title level={3} className="price-old">
                            $<del>{selectedPrice}</del>
                          </Title>
                          <Title level={3} className="price-new">
                            ${selectedPrice}
                          </Title>
                          <sup>0% OFF</sup>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Col>
              <Col md={6} sm={7} xs={24}>
                <FlightListFilter />
              </Col>
              <Col md={18} sm={17} xs={24}>
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
                    {status === 'loading' && (
                      <>
                        <FlightCard loading={true} />
                        <FlightCard loading={true} />
                        <FlightCard loading={true} />
                        <FlightCard loading={true} />
                      </>
                    )}
                    {(!activeData.flight.length && <NotFoundFlight />) ||
                      roundtrip.flight.map((f) => (
                        <FlightCard key={f.id} data={f} />
                      ))}

                    {pagination.total > 0 && (
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
        )) || <Home />}
      </div>
    </>
  )
}

export default FlightList
