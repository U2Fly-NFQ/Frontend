import { Checkbox, Col, Row, Slider } from 'antd'
import './style.scss'

const Flight = () => {
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
      <Row className="filterItem price" justify="center">
        <Col span={24} className="title">
          Filter by price
        </Col>
        <Col span={20} className="content">
          <Slider
            range
            min={0}
            max={10000}
            defaultValue={[0, 10000]}
            // onChange={handleChangePrice}
            onAfterChange={handlePriceChange}
            tooltipVisible
            tooltipPlacement="bottom"
          />
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
