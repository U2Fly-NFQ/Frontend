import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'antd'
import { Bar } from '@ant-design/charts'
import { Typography } from 'antd'
import './style.scss'
import FlightChart from './FlightChart'
import { get } from '../../api/Dashboard'

const { Title } = Typography

function AdminDashboard() {
  const airlineChartConfig = {
    xField: 'number',
    yField: 'name',
    seriesField: 'number',
    colorField: 'name',
    height: 200,
  }

  const routeChartConfig = {
    xField: 'number',
    yField: 'journey',
    seriesField: 'number',
    colorField: 'journey',
    height: 200,
  }

  const [data, setData] = useState({})

  useEffect(() => {
    get().then((rs) => {
      setData(rs.data.data)
    })
  }, [])

  if (!data.top_airline) return
  if (!data.top_route) return

  return (
    <div className="admin-layout">
      <div className="bar-chart-area">
        <Row gutter={20}>
          <Col lg={12} xs={24}>
            <Card
              className="airlines"
              title={<Title level={5}>Top Airlines Report</Title>}
              bordered={false}
            >
              <Bar
                data={data.top_airline}
                {...airlineChartConfig}
                color={['#73d13d', '#ffc53d', '#1890ff']}
              />
            </Card>
          </Col>
          <Col lg={12} xs={24}>
            <Card
              className="routes"
              title={<Title level={5}>Top Routes Report</Title>}
              bordered={false}
            >
              <Bar
                data={data.top_route}
                {...routeChartConfig}
                color={['#ffc53d', '#73d13d', '#1890ff']}
              />
            </Card>
          </Col>
        </Row>
      </div>
      <div className="line-chart-area">
        <Row gutter={[20, 20]}>
          <Col span={24}>
            <Card
              className="routes"
              title={<Title level={5}>Bookings Report</Title>}
              bordered={false}
            >
              <FlightChart data={data.flightAnalyze} />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AdminDashboard
