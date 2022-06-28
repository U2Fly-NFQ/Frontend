import { Checkbox, Col, Row, Slider } from 'antd'
import './style.scss'

const Flight = () => {
  // Data for UI
  const optionDeparture = [
    {
      label: 'Early Morning (00:00 - 06:00)',
      value: '1',
    },
    {
      label: 'Morning (06:00 - 12:00)',
      value: '2',
    },
    {
      label: 'Afternoon (12:00 - 18:00)',
      value: '3',
    },
    {
      label: 'Evening (18:00 - 24:00)',
      value: '4',
    },
  ]
  const optionStops = [
    {
      label: 'Non-stop',
      value: '0',
    },
    {
      label: '1 stop',
      value: '1',
    },
    {
      label: '2 stop',
      value: '2',
    },
    {
      label: '2+ stop',
      value: '3',
    },
  ]
  const optionClass = [
    {
      label: 'Economy',
      value: '0',
    },
    {
      label: 'Business',
      value: '1',
    },
  ]
  const optionAirlines = [
    {
      label: 'VietJet Air',
      value: 'VJ',
    },
    {
      label: 'Vietnam Airlines',
      value: 'VN',
    },
    {
      label: 'Bamboo Airways',
      value: 'QH',
    },
    {
      label: 'Vietravel Airlines',
      value: 'VU',
    },
  ]

  //Function get data

  const handlePriceChange = (value) => {
    console.log(value)
  }
  const handleDepartureChange = (value) => {
    console.log(value)
  }
  const handleStopChange = (value) => {
    console.log(value)
  }
  const handleClassChange = (value) => {
    console.log(value)
  }
  const handleAirlineChange = (value) => {
    console.log(value)
  }

  return (
    <div className="filter">
      <Row className="filterItem price">
        <Col span={24} className="title">
          Filter by price
        </Col>
        <Col span={24} className="content">
          <Slider
            range
            min={0}
            max={1000}
            // onChange={handleChangePrice}
            onAfterChange={handlePriceChange}
            tooltipVisible
            tooltipPlacement="bottom"
            defaultValue={[0, 500]}
          />
        </Col>
      </Row>
      <Row className="filterItem departure ">
        <Col span={24} className="title">
          Departure Time
        </Col>
        <Col span={24} className="content">
          <Checkbox.Group
            options={optionDeparture}
            onChange={handleDepartureChange}
          />
        </Col>
      </Row>
      <Row className="filterItem">
        <Col span={24} className="title">
          Number of stops
        </Col>
        <Col span={24} className="content">
          <Checkbox.Group options={optionStops} onChange={handleStopChange} />
        </Col>
      </Row>
      <Row className="filterItem">
        <Col span={24} className="title">
          Flight class
        </Col>
        <Col span={24} className="content">
          <Checkbox.Group options={optionClass} onChange={handleClassChange} />
        </Col>
      </Row>
      <Row className="filterItem">
        <Col span={24} className="title">
          Airlines
        </Col>
        <Col span={24} className="content">
          <Checkbox.Group
            options={optionAirlines}
            onChange={handleAirlineChange}
          />
        </Col>
      </Row>
    </div>
  )
}

export default Flight
