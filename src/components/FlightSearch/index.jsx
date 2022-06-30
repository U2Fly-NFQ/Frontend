import React, { useEffect, useState } from 'react'
import airportApi from '../../api/Airport'

import './style.scss'
import { Col, Row, DatePicker, Radio, Popover, InputNumber, Select } from 'antd'
import moment from 'moment'

const { Option } = Select

export default function FlightSearch() {
  const [airport, setAirport] = useState([])
  const [airportOptions, setAirportOptions] = useState([])
  const [from, setFrom] = useState()
  const [to, setTo] = useState()
  const [searchFrom, setSearchFrom] = useState('')
  const [searchTo, setSearchTo] = useState('')
  const [journeyDay, setJourneyDay] = useState(moment().add(1, 'days'))
  const [returnDay, setReturnDay] = useState(moment().add(3, 'days'))
  const [ticket, setTicket] = useState('oneWay')
  const [passengerClass, setPassengerClass] = useState('economy')
  const [passengerNumber, setPassengerNumber] = useState(1)

  useEffect(() => {
    airportApi.getList().then((rs) => {
      const data = rs.data.data
      if (data.length > 0) {
        setAirport(data)
        const airportOptionsMap = data.map((op) => ({
          value: op.iata,
          label: op.city,
          name: op.name,
        }))
        setFrom(airportOptionsMap[0])
        setTo(airportOptionsMap[1])
        setAirportOptions(airportOptionsMap)
        console.log(airportOptionsMap)
      }
    })
  }, [])

  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onChangeFrom = (option) => {
    if (option.value === to.value) return
    setFrom({
      value: option.value,
      label: option.label,
    })
  }

  const onChangeTo = (option) => {
    if (option.value === from.value) return
    setTo({
      value: option.value,
      label: option.label,
    })
  }

  const passengerPopover = (
    <>
      <label className="flightSearchLabel">Num Passengers</label>
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
        Cabin Class
      </label>
      <Radio.Group
        buttonStyle="outlined"
        defaultValue={passengerClass}
        onChange={(e) => setPassengerClass(e.target.value)}
      >
        <Radio.Button value="economy">Economy</Radio.Button>
        <Radio.Button value="business">Business</Radio.Button>
      </Radio.Group>
    </>
  )

  return (
    <div className="flightSearch">
      <div className="flightSearchCategories">
        <Radio.Group
          buttonStyle="solid"
          value={ticket}
          onChange={(e) => setTicket(e.target.value)}
        >
          <Radio.Button value="oneWay">One Way</Radio.Button>
          <Radio.Button value="roundTrip">Round Trip</Radio.Button>
        </Radio.Group>
      </div>

      <Row gutter={[24, 24]} className="flightSearchBody">
        <Col span={24} md={12} lg={6}>
          <div className="flightSearchBox">
            <i className="flightSearchBox__Icon fa-solid fa-plane-departure"></i>
            <label className="flightSearchLabel">From</label>
            <Select
              size="large"
              showSearch
              showArrow={false}
              labelInValue
              filterOption={() => true}
              value={from}
              onChange={onChangeFrom}
              onSearch={(text) => setSearchFrom(text)}
              style={{
                minWidth: '100%',
              }}
            >
              {airportOptions.map((airport) => {
                return (
                  airport.label
                    .toLowerCase()
                    .includes(searchFrom.toLowerCase()) && (
                    <Option value={airport.value}>{airport.label}</Option>
                  )
                )
              })}
            </Select>
            <p className="flightSearchSelected">
              {airport.find((ap) => ap.iata === from.value)?.name}
            </p>
          </div>
        </Col>
        <Col span={24} md={12} lg={6}>
          <div className="flightSearchBox">
            <i className="flightSearchBox__Icon fa-solid fa-plane-arrival"></i>
            <label className="flightSearchLabel">To</label>
            <Select
              size="large"
              showSearch
              showArrow={false}
              labelInValue
              filterOption={() => true}
              value={to}
              onChange={onChangeTo}
              onSearch={(text) => setSearchTo(text)}
              style={{
                minWidth: '100%',
              }}
            >
              {airportOptions.map((airport) => {
                return (
                  airport.label
                    .toLowerCase()
                    .includes(searchTo.toLowerCase()) && (
                    <Option value={airport.value}>{airport.label}</Option>
                  )
                )
              })}
            </Select>
            <p className="flightSearchSelected">
              {airport.find((ap) => ap.iata === to.value)?.name}
            </p>
          </div>
        </Col>
        <Col span={24} md={12} lg={7}>
          <div className="flightSearchBox">
            <Row gutter={[8, 8]}>
              <Col span={12}>
                <label className="flightSearchLabel">Journey Date</label>
                <DatePicker
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
                  format={'MM/DD/YYYY'}
                />
              </Col>
              {ticket !== 'oneWay' && (
                <Col span={12}>
                  <label className="flightSearchLabel">Return Date</label>
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
                    format={'MM/DD/YYYY'}
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
              <label className="flightSearchLabel">Passenger & Class</label>
              <div className="flightSearchPassenger">
                {passengerNumber} Passenger
              </div>
              <p className="flightSearchSelected">
                {passengerClass.toUpperCase()}
              </p>
            </div>
          </Popover>
        </Col>
      </Row>
      <div className="formControl">
        <button type="primary" size="large" className="btn btn-md btn-primary">
          Search
        </button>
      </div>
    </div>
  )
}
