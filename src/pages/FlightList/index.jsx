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
import Home from '../Home'
import {
  addHourToTime,
  getDurationFormat,
  getPriceWithDiscount,
} from '../../utils/flight'

const { Title, Text } = Typography
const { Option } = Select

function FlightList() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [order, setOrder] = useState('price.asc')
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedFlight, setSelectedFlight] = useState({})
  const flightStorage = getLsObj('flight')
  const { oneway, roundtrip, status } = useSelector((state) => state.flights)
  const currentTicketType = searchParams.get('ticketType')
  const activeData =
    currentTicketType === 'roundTrip' && flightStorage.id ? roundtrip : oneway
  const { pagination } = activeData

  const checkEmptyFlight = () => {
    if (!activeData?.flight?.length) return true
    if (currentTicketType === 'roundTrip' && !roundtrip?.flight?.length) {
      return true
    }
    return false
  }

  const emptyFlight = checkEmptyFlight()

  useEffect(() => {
    if (checkFirstVisitWithoutParams()) {
      updateLs('flight', {
        id: '',
        roundId: '',
      })
      setSelectedFlight({})
      return
    }

    if (currentTicketType === 'oneWay' && flightStorage.id) {
      updateLs('flight', {
        id: '',
        roundId: '',
      })
      setSelectedFlight({})
    }

    if (currentTicketType === 'roundTrip' && flightStorage.id) {
      async function fetchData() {
        const rs = await FlightApi.get(flightStorage.id)
        setSelectedFlight(rs.data.data)
      }
      fetchData()
    }

    // Before action is searching
    dispatch(fetchFlights(searchParams))
  }, [searchParams])

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
                            $
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
                <FlightListFilter emptyFlight={emptyFlight} />
              </Col>
              <Col md={18} sm={17} xs={24}>
                <Row gutter={[16, 16]} justify="center">
                  <Col span={24}>
                    <div className="flight-search-title-container">
                      <Title level={4}>
                        {t('flight-list-page.flights found', {
                          number: emptyFlight ? 0 : pagination.total,
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
                    {emptyFlight && <NotFoundFlight />}
                    {!emptyFlight &&
                      activeData.flight.map((f) => (
                        <FlightCard key={f.id} data={f} />
                      ))}
                    {!emptyFlight && pagination.total > pagination.offset && (
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
