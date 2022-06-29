import React, { useState } from 'react'
import './style.scss'
import {
  Col,
  Row,
  Form,
  Button,
  AutoComplete,
  DatePicker,
  Radio,
  Popover,
  Typography,
  InputNumber,
} from 'antd'
import moment from 'moment'

const { Title } = Typography

const options = [
  {
    value: 'Hanoi',
  },
  {
    value: 'Da Nang',
  },
  {
    value: 'Ho Chi Minh',
  },
  {
    value: 'Can Tho',
  },
]

export default function FlightSearch() {
  const [journeyDay, setJourneyDay] = useState('')
  const [returnDay, setReturnDay] = useState('')
  const [ticket, setTicket] = useState('oneWay')
  const [passengerClass, setPassengerClass] = useState('')
  const [passengerNumber, setPassengerNumber] = useState(0)

  const passengerPopover = (
    <>
      <Title level={4}>Passengers</Title>
      <Form.Item name="passengers">
        <InputNumber
          min={1}
          max={10}
          value={passengerNumber}
          onChange={(value) => {
            setPassengerNumber(value)
          }}
        />
      </Form.Item>
      <Title level={4}>Cabin Class</Title>
      <Form.Item name="class">
        <Radio.Group
          buttonStyle="solid"
          onChange={(e) => setPassengerClass(e.target.value)}
        >
          <Radio.Button value="economy">Economy</Radio.Button>
          <Radio.Button value="business">Business</Radio.Button>
          <Radio.Button value="firstClass">First Class</Radio.Button>
        </Radio.Group>
      </Form.Item>
    </>
  )

  const onFinish = (values) => {
    console.log('Success:', JSON.stringify(values))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

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
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={[24, 24]} className="flightSearchBody">
          <Col span={24} md={12} lg={6}>
            <div className="flightSearchBox">
              <i class="flightSearchBox__Icon fa-solid fa-plane-departure"></i>
              <label className="flightSearchLabel">From</label>
              <Form.Item name="from">
                <AutoComplete
                  className="flightSearchInput"
                  options={options}
                  filterOption={(inputValue, option) =>
                    option.value
                      .toUpperCase()
                      .indexOf(inputValue.toUpperCase()) !== -1
                  }
                />
              </Form.Item>
              <p className="flightSearchSelected">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus, corrupti possimus dolores, deserunt dolorem aliquid
                officiis labore inventore impedit est, assumenda nobis deleniti
                perferendis sit harum. Adipisci alias at delectus.
              </p>
            </div>
          </Col>
          <Col span={24} md={12} lg={6}>
            <div className="flightSearchBox">
              <i class="flightSearchBox__Icon fa-solid fa-plane-arrival"></i>
              <label className="flightSearchLabel">To</label>
              <Form.Item name="to">
                <AutoComplete
                  className="flightSearchInput"
                  options={options}
                  filterOption={(inputValue, option) =>
                    option.value
                      .toUpperCase()
                      .indexOf(inputValue.toUpperCase()) !== -1
                  }
                />
              </Form.Item>
              <p className="flightSearchSelected">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus, corrupti possimus dolores, deserunt dolorem aliquid
                officiis labore inventore impedit est, assumenda nobis deleniti
                perferendis sit harum. Adipisci alias at delectus.
              </p>
            </div>
          </Col>
          <Col span={24} md={12} lg={7}>
            <div className="flightSearchBox">
              <Row gutter={[8, 8]}>
                <Col span={12}>
                  <label className="flightSearchLabel">Journey Date</label>
                  <Form.Item name="journeyDate">
                    <DatePicker
                      onChange={(date) => {
                        if (date) {
                          setJourneyDay(date.format('dddd'))
                        } else {
                          setJourneyDay('')
                        }
                      }}
                      disabledDate={(current) => {
                        return (
                          moment().add(-1, 'days') >= current ||
                          moment().add(1, 'month') <= current
                        )
                      }}
                    />
                  </Form.Item>
                  <p className="flightSearchSelected">{journeyDay}</p>
                </Col>
                {ticket !== 'oneWay' && (
                  <Col span={12}>
                    <label className="flightSearchLabel">Return Date</label>
                    <Form.Item name="returnDate">
                      <DatePicker
                        onChange={(date) => {
                          if (date) {
                            setReturnDay(date.format('dddd'))
                          } else {
                            setReturnDay('')
                          }
                        }}
                        disabledDate={(current) => {
                          return (
                            moment().add(-1, 'days') >= current ||
                            moment().add(1, 'month') <= current
                          )
                        }}
                      />
                    </Form.Item>
                    <p className="flightSearchSelected">{returnDay}</p>
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
                <label className="flightSearchLabel">Passenger, Class</label>
                <div className="flightSearchPassenger">{passengerNumber}</div>
                <p className="flightSearchSelected">{passengerClass}</p>
              </div>
            </Popover>
          </Col>
        </Row>
        <div className="formControl">
          <Button type="primary" htmlType="submit" size="large">
            Search
          </Button>
        </div>
      </Form>
    </div>
  )
}
