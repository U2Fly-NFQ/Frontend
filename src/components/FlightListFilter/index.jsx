import { Col, Row, Slider, InputNumber, Space, Typography } from 'antd'
import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import './style.scss'

const { Text } = Typography

const Flight = () => {
  let [searchParams, setSearchParams] = useSearchParams()
  let [minPrice, setMinPrice] = useState(0)
  let [maxPrice, setMaxPrice] = useState(10000)
  let [isClear, setIsClear] = useState(false)

  const handlePriceChange = (value) => {
    setIsClear(false)
    setMinPrice(value[0])
    setMaxPrice(value[1])
  }

  const clearPrice = () => {
    setIsClear(true)
    setMinPrice(0)
    setMaxPrice(10000)
    searchParams.delete('minPrice')
    searchParams.delete('maxPrice')
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
          <Space
            style={{
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Text>Price</Text>
            {(minPrice !== 0 || maxPrice !== 10000) && (
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
              onChange={(value) => handlePriceChange([value, maxPrice])}
              prefix="$"
            />
            -
            <InputNumber
              min={0}
              max={10000}
              value={maxPrice}
              onChange={(value) => handlePriceChange(minPrice, value)}
              prefix="$"
            />
          </Space>
        </Col>
      </Row>
    </div>
  )
}

export default Flight
