import { Col, Row, Slider, InputNumber, Space, Typography, Radio } from 'antd'
import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import './style.scss'

const { Text } = Typography

const Flight = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(1500)
  const [isClear, setIsClear] = useState(false)
  const [startTime, setStartTime] = useState('')

  const handlePriceChange = (value) => {
    setIsClear(false)
    setMinPrice(value[0])
    setMaxPrice(value[1])
  }

  const clearPrice = () => {
    setIsClear(true)
    setMinPrice(0)
    setMaxPrice(1500)
    searchParams.delete('minPrice')
    searchParams.delete('maxPrice')
    setSearchParams(searchParams)
  }

  const changeStartTime = (e) => {
    console.log(e.target.value)
    setStartTime(e.target.value)
    searchParams.set('startTime', e.target.value)
    setSearchParams(searchParams)
  }

  let firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    if (isClear) return

    const delayChange = setTimeout(() => {
      searchParams.set('minPrice', minPrice)
      searchParams.set('maxPrice', maxPrice)
      setSearchParams(searchParams)
    }, 1000)

    return () => clearTimeout(delayChange)
  }, [minPrice, maxPrice])

  return (
    <div className="filter">
      <Row className="filterItem price" justify="center">
        <Col span={24} className="title">
          <Space
            style={{
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Text>Price</Text>
            {(minPrice !== 0 || maxPrice !== 1500) && (
              <Text className="clear-btn" italic onClick={clearPrice}>
                Clear
              </Text>
            )}
          </Space>
        </Col>
        <Col span={20} className="content">
          <Slider
            tipFormatter={(value) => `${value} USD`}
            range
            min={0}
            max={1500}
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
              max={1500}
              value={minPrice}
              onChange={(value) => handlePriceChange([value, maxPrice])}
              prefix="$"
            />
            -
            <InputNumber
              min={0}
              max={1500}
              value={maxPrice}
              onChange={(value) => handlePriceChange(minPrice, value)}
              prefix="$"
            />
          </Space>
        </Col>
      </Row>

      <Row className="filterItem" justify="center">
        <Col span={24} className="title">
          <Space
            style={{
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Text>Times</Text>
          </Space>
        </Col>
        <Col span={20} className="content">
          <Radio.Group onChange={changeStartTime} value={startTime}>
            <Space direction="vertical">
              <Radio value={''}>All time</Radio>
              <Radio value={'morning'}>Early Morning (00:00 - 06:00)</Radio>
              <Radio value={'earlymoning'}>Morning (06:00 - 12:00)</Radio>
              <Radio value={'afternoon'}>Afternoon (12:00 - 18:00)</Radio>
              <Radio value={'evening'}>Evening (18:00 - 24:00)</Radio>
            </Space>
          </Radio.Group>
        </Col>
      </Row>
    </div>
  )
}

export default Flight
