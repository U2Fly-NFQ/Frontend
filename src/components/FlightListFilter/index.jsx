import { Col, Row, Slider } from 'antd'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import './style.scss'

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

const Flight = () => {
  let [searchParams, setSearchParams] = useSearchParams()
  let [price, setPrice] = useState([0, 10000])

  const handlePriceChange = (value) => {
    setPrice(value)
  }

  useEffect(() => {
    // setSearchParams({
    //   ...searchParams,
    //   minPrice: price[0],
    //   maxPrice: price[1],
    // })
  }, [price])

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
      {/* <Row className="filterItem">
        <Col span={24} className="title">
          Airlines
        </Col>
        <Col span={24} className="content">

          </Radio.Group>
        </Col>
      </Row> */}
    </div>
  )
}

export default Flight
