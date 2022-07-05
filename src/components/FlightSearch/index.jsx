import React, { useEffect, useState, useRef } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
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
  Tooltip,
  Modal,
} from 'antd'

import moment from 'moment'
import { fetchAirports } from '../../redux/slices/airportSlice'
import { updateLs, getLsObj } from '../../utils/localStorage'

const { Option } = Select

export default function FlightSearch() {
  const location = useLocation()
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const submitRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()

  const airports = useSelector((state) => state.airports.data)
  const [searchTo, setSearchTo] = useState('')
  const [searchFrom, setSearchFrom] = useState('')

  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [ticketType, setTicketType] = useState('oneWay')
  const [journeyDay, setJourneyDay] = useState(moment())
  const [returnDate, setReturnDate] = useState(moment().add(3, 'days'))
  const [passengerClass, setPassengerClass] = useState('Economy')
  const [passengerNumber, setPassengerNumber] = useState(1)
  const [modalContent, setModalContent] = useState('')

  useEffect(() => {
    dispatch(fetchAirports())

    let existingFlight = getLsObj('flight')

    const { seatType, seatAvailable, departure, arrival, startDate } =
      existingFlight

    if (departure) setFrom(departure)
    if (arrival) setTo(arrival)
    if (startDate) setJourneyDay(moment(startDate))
    if (seatType) setPassengerClass(seatType)
    if (seatAvailable) setPassengerNumber(seatAvailable)
    if (ticketType) setTicketType(ticketType)

    setSearchParams({ ...existingFlight })
  }, [])

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
      returnDate: returnDate.format('YYYY-MM-DD'),
    }

    updateLs('flight', searchQuery)

    setSearchParams(searchQuery)
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
        <Radio.Button value="Economy">Economy</Radio.Button>
        <Radio.Button value="Business">Business</Radio.Button>
      </Radio.Group>
    </>
  )

  return (
    <div className="flightSearchContainer">
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
              <Select
                size="large"
                onClear={clearFrom}
                showSearch
                value={from}
                showArrow={false}
                filterOption={() => true}
                onChange={onChangeFrom}
                onSearch={(text) => setSearchFrom(text)}
                allowClear
                bordered={false}
                style={{
                  width: '70%',
                }}
                dropdownStyle={{
                  borderRadius: '10px',
                }}
              >
                {airports.map((airport) => {
                  return (
                    airport.city
                      .toLowerCase()
                      .includes(searchFrom.toLowerCase()) &&
                    airport.iata !== to && (
                      <Option key={airport.iata} value={airport.iata}>
                        {airport.city}
                      </Option>
                    )
                  )
                })}
              </Select>
              <p className="flightSearchSelected">
                {airports && airports.find((ap) => ap.iata === from)?.name}
              </p>
            </div>
          </Col>
          <Col span={24} md={12} lg={6}>
            <div className="flightSearchBox">
              <i className="flightSearchBox__Icon fa-solid fa-plane-arrival"></i>
              <label className="flightSearchLabel">{t('search_form.to')}</label>
              <Select
                size="large"
                showSearch
                allowClear
                onClear={clearTo}
                value={to}
                showArrow={false}
                filterOption={() => true}
                onChange={onChangeTo}
                onSearch={(text) => setSearchTo(text)}
                bordered={false}
                style={{
                  width: '70%',
                }}
                dropdownStyle={{
                  borderRadius: '10px',
                }}
              >
                {airports.map((airport) => {
                  return (
                    airport.city
                      .toLowerCase()
                      .includes(searchTo.toLowerCase()) &&
                    airport.iata !== from && (
                      <Option key={airport.iata} value={airport.iata}>
                        {airport.city}
                      </Option>
                    )
                  )
                })}
              </Select>
              <p className="flightSearchSelected">
                {airports && airports.find((ap) => ap.iata === to)?.name}
              </p>
            </div>
          </Col>
          <Col span={24} md={12} lg={7}>
            <div className="flightSearchBox">
              <Row gutter={[8, 8]} justify="center">
                <Col span={12}>
                  <label className="flightSearchLabel">
                    {t('search_form.journey_date')}
                  </label>
                  <DatePicker
                    popupStyle={{
                      borderRadius: '10px',
                    }}
                    className="journeyDate"
                    allowClear={false}
                    disabledDate={(current) => {
                      return (
                        moment().add(-3, 'days') >= current ||
                        moment().add(1, 'month') <= current
                      )
                    }}
                    value={journeyDay}
                    onChange={(date) => setJourneyDay(date)}
                    format={'MM/DD/YY'}
                  />
                </Col>
                <Col span={12}>
                  <AnimatePresence>
                    {ticketType !== 'oneWay' && (
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
                        <label className="flightSearchLabel">
                          {t('search_form.return_date')}
                        </label>
                        <DatePicker
                          allowClear={false}
                          disabledDate={(current) => {
                            return (
                              journeyDay >= returnDate ||
                              moment().add(1, 'month') <= current
                            )
                          }}
                          value={returnDate}
                          onChange={(date) => setReturnDate(date)}
                          format={'MM/DD/YY'}
                        />
                      </motion.div>
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
                  {t('search_form.passenger', { count: passengerNumber })}
                </div>
                <p className="flightSearchSelected">
                  {passengerClass.toUpperCase()}
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
              ref={submitRef}
            >
              Search
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
