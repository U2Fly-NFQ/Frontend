import {
  Col,
  Row,
  Typography,
  Pagination,
  Select,
  Button,
  Space,
  Spin,
} from 'antd'
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
import { ScrollToTopButton, FlightDetailModal } from '../../components'
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
    if (currentTicketType === 'roundTrip') {
      searchParams.set('page', '')
      searchParams.set('pageRoundTrip', value)
    } else {
      searchParams.set('page', value)
      searchParams.set('pageRoundTrip', '')
    }
    setSearchParams(searchParams)
  }

  const changeSize = (value) => {
    if (currentTicketType === 'roundTrip') {
      searchParams.set('offset', '')
      searchParams.set('offsetRoundTrip', value)
    } else {
      searchParams.set('offset', value)
      searchParams.set('offsetRoundTrip', value)
    }
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

  selectedSeat = {
    id: 1,
    name: 'Economy',
    price: 59,
    seatAvailable: 50,
    discount: 0.1,
  }

  const [showDetailModal, setShowDetailModal] = useState(true)
  const [modalData, setModalData] = useState({})

  return (
    <>
      <ScrollToTopButton />
      <FlightDetailModal
        visible={showDetailModal}
        setIsModalVisible={(value) => setShowDetailModal(value)}
        data={modalData}
      />
      <div className="flight-list-page">
        <FlightListBanner />
        <div className="grid wide">
          <FlightSearch />
        </div>
        {(!checkFirstVisitWithoutParams() && (
          <div className="flight-list">
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
                          <Button
                            className="detail-btn"
                            type="link"
                            size="small"
                            onClick={() => {
                              setModalData(selectedFlight)
                              setShowDetailModal(true)
                            }}
                          >
                            Flight details
                          </Button>
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
                        <Row gutter={[8, 8]} justify="space-between">
                          <Col sm={12} xs={24}>
                            <Title level={4}>
                              {emptyFlight
                                ? ''
                                : t('flight-list-page.flights found', {
                                    number: pagination.total,
                                  })}
                            </Title>
                          </Col>
                          <Col flex={0}>
                            <Space>
                              {t('flight-list-page.Order by')}
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
                            </Space>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col span={24} style={{ position: 'relative' }}>
                      {status === 'loading' && (
                        <Spin
                          size="large"
                          style={{
                            display: 'block',
                          }}
                        />
                      )}
                      {status !== 'loading' && emptyFlight && (
                        <NotFoundFlight />
                      )}
                      {!emptyFlight &&
                        activeData.flight.map((f) => (
                          <FlightCard
                            key={f.id}
                            data={f}
                            onClickDetail={() => {
                              setModalData(f)
                              setShowDetailModal(true)
                            }}
                          />
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
          </div>
        )) || <Home />}
      </div>
    </>
  )
}

export default FlightList
