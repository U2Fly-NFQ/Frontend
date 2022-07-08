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
import { useTranslation } from 'react-i18next'
import FlightApi from '../../api/Flight'
import { CloseOutlined } from '@ant-design/icons'
import { scrollTo } from '../../utils/scroll'
import Home from '../Home'
import {
  addHourToTime,
  getDurationFormat,
  getPriceWithDiscount,
} from '../../utils/flight'

const { Title, Text } = Typography
const { Option } = Select

function FlightList() {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [order, setOrder] = useState('price.asc')
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedFlight, setSelectedFlight] = useState({})
  const flightStorage = getLsObj('flight')
  const { oneway, roundtrip, status } = useSelector((state) => state.flights)
  const activeData = flightStorage.ticketType === 'oneWay' ? oneway : roundtrip
  const { pagination } = activeData

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
        const rs = await FlightApi.get(flightStorage.id)
        setSelectedFlight(rs.data.data)
      }
      fetchData()
    }

    // Before action is searching
    dispatch(fetchFlights(searchParams))
  }, [searchParams, flightStorage.id])

  const changeOrder = (value) => {
    setOrder(value)
    searchParams.set('order', value)
    setSearchParams(searchParams)
  }

  const changePage = (value) => {
    searchParams.set('page', value)
    setSearchParams(searchParams)
  }

  const changeSize = (value) => {
    searchParams.set('offset', value)
    setSearchParams(searchParams)
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

  let selectedSeat = 0

  if (selectedFlight.seat && selectedFlight.seat.length)
    selectedSeat =
      (flightStorage.seatType === 'Economy' && selectedFlight.seat[0]) ||
      selectedFlight.seat[1]

  const emptyTrip = !activeData?.flight?.length

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
                        <Text className="main-title">
                          {t('flight-list-page.Selected outbound')}
                        </Text>
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
                            <span className="duration">
                              {getDurationFormat(selectedFlight.duration)}
                            </span>
                          </div>
                          <div className="line-way-item to">
                            <Title level={3}>
                              {addHourToTime(selectedFlight.startTime)}
                            </Title>
                            <Text>{selectedFlight.arrival.iata}</Text>
                          </div>
                        </div>
                        <div className="price-box">
                          <Title level={3} className="price-old">
                            {t('flight-list-page.$')}
                            <del>{selectedSeat.price}</del>
                          </Title>
                          <Title level={3} className="price-new">
                            {t('flight-list-page.$')}
                            {getPriceWithDiscount(
                              selectedSeat.price,
                              selectedSeat.discount
                            )}
                          </Title>
                          <sup>
                            {t('flight-list-page.OFF', {
                              number: selectedSeat.discount * 100,
                            })}
                          </sup>
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
                        {t('flight-list-page.flights found', {
                          number: pagination?.total || 0,
                        })}
                      </Title>
                      <Select
                        value={order}
                        style={{ width: 180, textAlign: 'left' }}
                        onChange={changeOrder}
                      >
                        <Option value="price.asc">
                          {t('flight-list-page.Price Low to High')}
                        </Option>
                        <Option value="duration.asc">
                          {t('flight-list-page.Fly time Fastest')}
                        </Option>
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
                    {emptyTrip && <NotFoundFlight />}
                    {!emptyTrip &&
                      activeData.flight.map((f) => (
                        <FlightCard key={f.id} data={f} />
                      ))}
                    {!emptyTrip && pagination.total > pagination.offset && (
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
