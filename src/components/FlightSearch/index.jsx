import React, { useEffect, useState } from 'react'
import {
  useNavigate,
  useSearchParams,
  createSearchParams,
} from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'

import './style.scss'
import {
  Col,
  Row,
  DatePicker,
  Radio,
  Popover,
  InputNumber,
  Select,
  Button,
  Tooltip,
  Modal,
  Space,
} from 'antd'

import moment from 'moment'
import { fetchAirports } from '../../redux/slices/airportSlice'
import { updateLs, getLsObj } from '../../utils/localStorage'
import { CloseOutlined } from '@ant-design/icons'

const { Option } = Select

export const variantsSelector = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.5,
    },
  },
  hide: {
    y: -20,
    opacity: 0,
  },
}

export default function FlightSearch() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const airports = useSelector((state) => state.airports.data)
  const [searchTo, setSearchTo] = useState('')
  const [searchFrom, setSearchFrom] = useState('')

  const [from, setFrom] = useState(undefined)
  const [to, setTo] = useState(undefined)
  const [ticketType, setTicketType] = useState('oneWay')
  const [journeyDay, setJourneyDay] = useState(moment())
  const [passengerClass, setPassengerClass] = useState('economy')
  const [returnDate, setReturnDate] = useState(moment().add(3, 'days'))
  const [passengerNumber, setPassengerNumber] = useState(1)
  const [modalContent, setModalContent] = useState('')

  const flightStorage = getLsObj('flight')

  useEffect(() => {
    dispatch(fetchAirports())
  }, [])

  useEffect(() => {
    const {
      seatType,
      seatAvailable,
      departure,
      arrival,
      startDate,
      ticketType,
      startDateRoundTrip,
    } = flightStorage

    // If exist query in local storage
    if (departure) setFrom(departure)
    if (arrival) setTo(arrival)
    // if (startDate) setJourneyDay(moment(startDate))
    if (seatType) setPassengerClass(seatType)
    if (seatAvailable) setPassengerNumber(seatAvailable)
    if (ticketType) setTicketType(ticketType)
    // if (startDateRoundTrip) setReturnDate(moment(returnDate))

    // If exist query on URL
    const departureParam = searchParams.get('departure')
    const arrivalParam = searchParams.get('arrival')
    const startDateParam = searchParams.get('startDate')
    const seatTypeParam = searchParams.get('seatType')
    const seatAvailableParam = searchParams.get('seatAvailable')
    const ticketTypeParam = searchParams.get('ticketType')
    const startDateRoundTripParam = searchParams.get('startDateRoundTrip')

    if (departureParam) setFrom(departureParam)
    if (arrivalParam) setTo(arrivalParam)
    if (startDateParam) setJourneyDay(moment(startDateParam))
    if (seatTypeParam) setPassengerClass(seatTypeParam)
    if (seatAvailableParam) setPassengerNumber(seatAvailableParam)
    if (ticketTypeParam) setTicketType(ticketTypeParam)
    if (startDateRoundTripParam) setReturnDate(moment(startDateRoundTripParam))
  }, [searchParams])

  const onFinish = async () => {
    if (!from || !to) {
      setModalContent(
        'Please enter the origin, destination and your travel date to proceed'
      )
      return
    }

    const searchQuery = {
      departure: from,
      arrival: to,
      startDate: journeyDay.format('YYYY-MM-DD'),
      seatType: passengerClass,
      seatAvailable: passengerNumber,
      ticketType,
      startDateRoundTrip:
        ticketType === 'roundTrip' ? returnDate.format('YYYY-MM-DD') : '',
    }

    updateLs('flight', searchQuery)

    navigate({
      pathname: '/flights',
      search: createSearchParams(searchQuery).toString(),
    })
  }

  const onChangeTicketType = (value) => {
    setTicketType(value)
  }

  const onChangeFrom = (option) => {
    if (option) setFrom(option)
    setSearchFrom('')
  }

  const onChangeTo = (option) => {
    if (option) setTo(option)
    setSearchTo('')
  }

  const clearFrom = () => {
    setFrom('')
  }

  const clearTo = () => {
    setTo('')
  }

  const passengerPopover = (
    <>
      <label className="flightSearchLabel">
        {t('search_form.No. of Passengers')}
      </label>
      <InputNumber
        min={1}
        max={5}
        value={passengerNumber}
        onChange={(value) => {
          setPassengerNumber(value)
        }}
      />
      <label
        className="flightSearchLabel"
        style={{
          marginTop: '10px',
        }}
      >
        {t('search_form.class')}
      </label>
      <Radio.Group
        buttonStyle="outlined"
        value={passengerClass}
        onChange={(e) => setPassengerClass(e.target.value)}
      >
        <Radio.Button value="economy">{t('search_form.economy')}</Radio.Button>
        <Radio.Button value="business">
          {t('search_form.business')}
        </Radio.Button>
      </Radio.Group>
    </>
  )

  const [showAskModal, setShowAskModal] = useState(true)

  const chooseDeparture = (value) => {
    updateLs('flight', {
      departure: value,
    })
    setFrom(value)
  }

  return (
    <div className="flightSearchContainer">
      {!flightStorage.departure && showAskModal && (
        <Modal
          visible={true}
          style={{
            borderRadius: '12px',
            overflow: 'hidden',
            paddingBottom: 0,
          }}
          maskStyle={{
            backgroundColor: 'rgba(14, 134, 212, 0.4)',
          }}
          footer={false}
          onCancel={() => setShowAskModal(false)}
        >
          Hey buddy, where is your departure?
          <Select
            size="large"
            clearIcon={<CloseOutlined />}
            autoFocus
            showSearch
            value={airports[0]}
            showArrow={false}
            onSelect={chooseDeparture}
            bordered={false}
            defaultOpen
            placement="bottomLeft"
            style={{
              width: '100%',
              borderBottom: '1px solid #ddd',
            }}
            dropdownStyle={{
              borderRadius: '10px',
            }}
            placeholder="Flying from..."
          >
            {airports.map((airport) => {
              return (
                <Option key={airport.iata} value={airport.iata}>
                  {airport.city} ({airport.iata})
                </Option>
              )
            })}
          </Select>
        </Modal>
      )}
      <Modal
        visible={modalContent && true}
        onOk={() => setModalContent('')}
        onCancel={() => setModalContent('')}
        centered
        cancelButtonProps={{
          hidden: 'true',
        }}
      >
        {modalContent}
      </Modal>
      <div className="flightSearch">
        <div className="flightSearchCategories">
          <Radio.Group
            value={ticketType}
            onChange={(e) => onChangeTicketType(e.target.value)}
            buttonStyle="solid"
          >
            <Radio.Button value="oneWay">
              {t('search_form.one_way')}
            </Radio.Button>
            <Radio.Button value="roundTrip">
              {t('search_form.round_trip')}
            </Radio.Button>
          </Radio.Group>
        </div>

        <Row gutter={[24, 24]} className="flightSearchBody">
          <Col span={24} md={12} lg={6}>
            <div className="flightSearchBox">
              <i className="flightSearchBox__Icon fa-solid fa-plane-departure"></i>
              <label className="flightSearchLabel">
                {t('search_form.from')}
              </label>
              <motion.div
                key={from}
                variants={variantsSelector}
                animate={'show'}
                initial="hide"
              >
                <Select
                  size="large"
                  allowClear
                  clearIcon={<CloseOutlined />}
                  onClear={clearFrom}
                  showSearch
                  value={from}
                  showArrow={false}
                  filterOption={() => true}
                  onChange={onChangeFrom}
                  onSearch={(text) => setSearchFrom(text)}
                  bordered={false}
                  style={{
                    width: '100%',
                    borderBottom: '1px solid #ddd',
                  }}
                  dropdownStyle={{
                    borderRadius: '10px',
                  }}
                  placeholder="Flying from..."
                >
                  {airports.map((airport) => {
                    return (
                      airport.city
                        .toLowerCase()
                        .includes(searchFrom.toLowerCase()) &&
                      airport.iata !== to && (
                        <Option key={airport.iata} value={airport.iata}>
                          {airport.city} ({airport.iata})
                        </Option>
                      )
                    )
                  })}
                </Select>
              </motion.div>
            </div>
          </Col>
          <Col span={24} md={12} lg={6}>
            <div className="flightSearchBox">
              <i className="flightSearchBox__Icon fa-solid fa-plane-arrival"></i>
              <label className="flightSearchLabel">{t('search_form.to')}</label>
              <motion.div
                key={to}
                variants={variantsSelector}
                animate={'show'}
                initial="hide"
              >
                <Select
                  size="large"
                  showSearch
                  allowClear
                  clearIcon={<CloseOutlined />}
                  onClear={clearTo}
                  value={to}
                  showArrow={false}
                  filterOption={() => true}
                  onChange={onChangeTo}
                  onSearch={(text) => setSearchTo(text)}
                  bordered={false}
                  style={{
                    width: '100%',
                    borderBottom: '1px solid #ddd',
                  }}
                  dropdownStyle={{
                    borderRadius: '10px',
                  }}
                  placeholder="Flying to..."
                >
                  {airports.map((airport) => {
                    return (
                      airport.city
                        .toLowerCase()
                        .includes(searchTo.toLowerCase()) &&
                      airport.iata !== from && (
                        <Option key={airport.iata} value={airport.iata}>
                          {airport.city} ({airport.iata})
                        </Option>
                      )
                    )
                  })}
                </Select>
              </motion.div>
            </div>
          </Col>
          <Col span={24} md={12} lg={7}>
            <div className="flightSearchBox">
              <Row gutter={[8, 8]} justify="center">
                <Col sm={12} xs={24}>
                  <label className="flightSearchLabel">
                    {t('search_form.journey_date')}
                  </label>
                  <DatePicker
                    className="journeyDate"
                    allowClear={false}
                    disabledDate={(current) => {
                      return (
                        moment().add(-1, 'days') > current ||
                        moment().add(1, 'months') <= current
                      )
                    }}
                    value={journeyDay}
                    onChange={(date) => setJourneyDay(date)}
                    format={'MM/DD/YY'}
                  />
                </Col>
                <Col sm={12} xs={24}>
                  <label className="flightSearchLabel">
                    {t('search_form.return_date')}
                  </label>
                  <AnimatePresence>
                    {(ticketType === 'roundTrip' && (
                      <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{
                          x: 0,
                          opacity: 1,
                          transition: { duration: 0.6 },
                        }}
                        exit={{
                          x: -100,
                          opacity: 0,
                          transition: { duration: 0.6 },
                        }}
                      >
                        <DatePicker
                          allowClear={false}
                          disabledDate={(current) => {
                            return (
                              journeyDay > current ||
                              moment().add(1, 'month') <= current
                            )
                          }}
                          value={returnDate}
                          onChange={(date) => setReturnDate(date)}
                          format={'MM/DD/YY'}
                        />
                      </motion.div>
                    )) || (
                      <Space
                        style={{
                          display: 'block',
                        }}
                      >
                        <Button
                          type="link"
                          onClick={() => setTicketType('roundTrip')}
                          style={{
                            paddingLeft: 0,
                          }}
                        >
                          {t('search_form.Add return date')}
                        </Button>
                      </Space>
                    )}
                  </AnimatePresence>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={24} md={12} lg={5}>
            <Popover
              content={passengerPopover}
              trigger="click"
              placement="bottomRight"
            >
              <div className="flightSearchBox">
                <label className="flightSearchLabel">
                  {t('search_form.passenger')} & {t('search_form.class')}
                </label>
                <div className="flightSearchPassenger">
                  {passengerNumber} {t('search_form.passenger')}
                </div>
                <p className="flightSearchSelected">
                  {t(`search_form.${passengerClass}`)}
                </p>
              </div>
            </Popover>
          </Col>
        </Row>
        <div className="formControl">
          <Tooltip className="search-submit">
            <button
              type="primary"
              size="large"
              className="searchBtn btn btn-md btn-primary"
              onClick={onFinish}
            >
              {t('cta.search')}{' '}
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
