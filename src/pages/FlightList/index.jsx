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
import { getLsObj, updateLs } from '../../utils/localStorage'
import moment from 'moment'
import { useTranslation } from 'react-i18next'

const { Title, Text } = Typography
const { Option } = Select

function FlightList() {
  const { data, status } = useSelector((state) => state.flights)
  const { flight, pagination } = data

  const dispatch = useDispatch()
  let [searchParams, setSearchParams] = useSearchParams()
  const { t } = useTranslation()

  const [order, setOrder] = useState('price.asc')

  useEffect(() => {
    dispatch(fetchFlights(searchParams))
  }, [searchParams])

  const changeOrder = (value) => {
    setOrder(value)
    searchParams.set('order', value)
    setSearchParams(searchParams)
  }

  const changePage = (value) => {
    setSearchParams(searchParams.set('page', value))
  }

  const changeSize = (value) => {
    setSearchParams(searchParams.set('offset', value))
  }

  const [selected, setSelected] = useState({})

  let flightStorage = getLsObj('flight')

  useEffect(() => {
    if (flightStorage.ticketType === 'oneWay')
      updateLs('flight', {
        id: '',
      })
    else fetchData()
    async function fetchData() {
      if (flightStorage.id) {
        const rs = await FlightApi.get(flightStorage.id)

        setSelected(rs.data.data)
      }
    }
  }, [])

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
              {selected.id && (
                <div className="selected-outbound">
                  <div className="wrapper">
                    <div className="header">
                      <Text className="main-title">
                        {t('flight-list-page.Selected outbound')}
                      </Text>
                      <div className="sub-title">
                        <Text>{t('flight-list-page.Flight details')}</Text>
                        <Text>{t('flight-list-page.Delete')}</Text>
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
                          <Title level={3}>{selected.startTime}</Title>
                          <Text>{selected.departure.iata}</Text>
                        </div>
                        <div className="line-way-item way">
                          <i className="fa-solid fa-plane"></i>
                          <span className="flight-segment"></span>
                          <i className="fa-solid fa-map-location-dot"></i>
                        </div>
                        <div className="line-way-item to">
                          <Title level={3}>
                            {moment(selected.startTime, 'HH:mm:ss')
                              .add(selected.duration * 60, 'minutes')
                              .format('HH:mm')}
                          </Title>
                          <Text>{selected.arrival.iata}</Text>
                        </div>
                      </div>
                      <Title level={3} className="price">
                        {flightStorage.seatType === 'Economy' &&
                          selected.seat[0].price}
                        {flightStorage.seatType === 'Business' &&
                          selected.seat[1].price}
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
                      {t('flight-list-page.flights found', {
                        number: pagination?.total || 0,
                      })}
                    </Title>

                    <Select
                      value={order}
                      style={{ width: '200px', textAlign: 'left' }}
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
                  {status === 'loading' && <h1>{t('cta.loading')}..</h1>}
                  {flight.map((f) => (
                    <FlightCard key={f.id} data={f} />
                  ))}
                  {flight.length === 0 && <NotFoundFlight />}
                </Col>
                <Col flex={0} justify="center">
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
      </div>
    </>
  )
}

export default FlightList
