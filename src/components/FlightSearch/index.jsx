import React, { useEffect, useState, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { scrollTo } from '../../utils/scroll'

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

import { CloseOutlined } from '@ant-design/icons'
import moment from 'moment'
import { fetchAirports } from '../../redux/slices/airportSlice'
import { updateLocalStorage } from '../../utils/localStorage'

const { Option } = Select

export default function FlightSearch() {
  const airports = useSelector((state) => state.airports.data)
  const existingRoundTrip = useSelector(
    (state) => state.flights.search.existingRoundTrip
  )
  const [ticketType, setTicketType] = useState('oneWay')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [searchFrom, setSearchFrom] = useState('')
  const [searchTo, setSearchTo] = useState('')
  const [journeyDay, setJourneyDay] = useState(moment())
  const [returnDay, setReturnDay] = useState(moment().add(3, 'days'))
  const [passengerClass, setPassengerClass] = useState('Economy')
  const [passengerNumber, setPassengerNumber] = useState(1)
  const [modalContent, setModalContent] = useState('')
  const { t } = useTranslation()

  let [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()
  const submitRef = useRef(null)

  useEffect(() => {
    // Get num passengers and class in local storage
    let existingBooking = JSON.parse(localStorage.getItem('flight') || '[]')
    const { seatType, passengerNumber } = existingBooking
    if (seatType) setPassengerClass(seatType)
    if (passengerNumber) setPassengerNumber(passengerNumber)

    dispatch(fetchAirports())
  }, [])

  const onFinish = () => {
    if (!from || !to) {
      setModalContent(
        'Please enter the origin, destination and your travel date to proceed'
      )
      return
    }

    // if (ticketType === 'roundTrip')
    //   dispatch(checkExistingRoundTrip())

    // if (!existingRoundTrip) return;

    const searchQuery = {
      departure: from,
      arrival: to,
      startTime: journeyDay.format('YYYY-MM-DD'),
      seatType: passengerClass,
    }

    updateLocalStorage('flight', {
      setType: passengerClass,
      passengerNumber,
    })

    scrollTo(500)

    setSearchParams({
      ...searchParams,
      ...searchQuery,
    })
  }

  const onChangeTicketType = (value) => {
    updateLocalStorage('flight', {
      ticketType: value,
    })
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
    searchParams.delete('departure')
    setSearchParams(searchParams)
  }

  const clearTo = () => {
    setTo('')
    searchParams.delete('arrival')
    setSearchParams(searchParams)
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
                clearIcon={
                  <CloseOutlined
                    style={{
                      fontSize: '20px',
                    }}
                  />
                }
                showSearch
                defaultValue={from}
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
                {/* {airports &&
                  airports.find((ap) => ap.iata === from?.value)?.name} */}
              </p>
            </div>
          </Col>
          <Col span={24} md={12} lg={6}>
            <div className="flightSearchBox">
              <i className="flightSearchBox__Icon fa-solid fa-plane-arrival"></i>
              <label className="flightSearchLabel">{t('search_form.to')}</label>
              <Select
                clearIcon={
                  <CloseOutlined
                    style={{
                      fontSize: '20px',
                    }}
                  />
                }
                size="large"
                showSearch
                allowClear
                onClear={clearTo}
                defaultValue={to}
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
                {/* {airports && airports.find((ap) => ap.iata === to?.value)?.name} */}
              </p>
            </div>
          </Col>
          <Col span={24} md={12} lg={7}>
            <div className="flightSearchBox">
              <Row gutter={[8, 8]}>
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
                        moment().add(-1, 'days') >= current ||
                        moment().add(1, 'month') <= current
                      )
                    }}
                    value={journeyDay}
                    onChange={(date) => setJourneyDay(date)}
                    format={'MM/DD/YY'}
                  />
                </Col>
                {ticketType !== 'oneWay' && (
                  <Col span={12}>
                    <label className="flightSearchLabel">
                      {t('search_form.return_date')}
                    </label>
                    <DatePicker
                      allowClear={false}
                      disabledDate={(current) => {
                        return (
                          journeyDay >= returnDay ||
                          moment().add(1, 'month') <= current
                        )
                      }}
                      value={returnDay}
                      onChange={(date) => setReturnDay(date)}
                      format={'MM/DD/YY'}
                    />
                  </Col>
                )}
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
            {/* <Button
              className="close-btn"
              icon={<CloseOutlined />}
              onClick={clearAllSearch}
              style={{
                display: (from && to && 'block') || 'none',
              }}
            >
              Clear all
            </Button> */}
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
