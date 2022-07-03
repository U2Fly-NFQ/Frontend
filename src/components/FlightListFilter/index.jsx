import { Col, Row, Slider, InputNumber, Space } from 'antd'
import { useEffect, useRef, useState } from 'react'
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
  let [minPrice, setMinPrice] = useState(0)
  let [maxPrice, setMaxPrice] = useState(10000)

  const firstRender = useRef(false)

  const handlePriceChange = (value) => {
    setMinPrice(value[0])
    setMaxPrice(value[1])
  }

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    const delayChange = setTimeout(() => {
      setSearchParams({
        ...searchParams,
        minPrice,
        maxPrice,
      })
    }, 1000)

    return () => clearTimeout(delayChange)
  }, [minPrice, maxPrice])

  return (
    <div className="filter">
      <Row className="filterItem price" justify="center">
        <Col span={24} className="title">
          Price
        </Col>
        <Col span={20} className="content">
          <Slider
            tipFormatter={(value) => `${value} USD`}
            range
            min={0}
            max={10000}
            value={[minPrice, maxPrice]}
            onChange={handlePriceChange}
            tooltipPlacement="bottom"
            tooltipVisible={false}
          />

          <Space
            style={{
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <InputNumber
              min={0}
              max={10000}
              value={minPrice}
              onChange={(value) => setMinPrice(value)}
              prefix="$"
            />
            -
            <InputNumber
              min={0}
              max={10000}
              value={maxPrice}
              onChange={(value) => setMaxPrice(value)}
              prefix="$"
            />
          </Space>
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
