import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'antd'
import { Bar } from '@ant-design/charts'
import { Typography } from 'antd/es'
import './style.scss'
import FlightChart from './FlightChart'
import { get } from '../../api/Dashboard'
import PieChart from './PieChart'

const { Title } = Typography

function AdminDashboard() {
  const barConfig = {
    xField: 'number',
    yField: 'name',
    seriesField: 'number',
    colorField: 'number', // or seriesField in some cases
    color: ['#19CDD7', '#DDB27C'],
    height: 200,
  }

  const routeConfig = {
    xField: 'number',
    yField: 'journey',
    seriesField: 'number',
    colorField: 'number', // or seriesField in some cases
    color: ['#19CDD7', '#DDB27C'],
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
          <Col lg={8}>
            <Card
              className="routes"
              title={<Title level={5}>Class</Title>}
              bordered={false}
            >
              <PieChart />
            </Card>
          </Col>
          <Col lg={8}>
            <Card
              className="airlines"
              title={<Title level={5}>Top Airlines</Title>}
              bordered={false}
            >
              <Bar data={data.top_airline} {...barConfig} />
            </Card>
          </Col>
          <Col lg={8}>
            <Card
              className="routes"
              title={<Title level={5}>Top Routes</Title>}
              bordered={false}
            >
              <Bar data={data.top_route} {...routeConfig} />
            </Card>
          </Col>
        </Row>
      </div>
      <div className="line-chart-area">
        <Row gutter={[20, 20]}>
          <Col span={24}>
            <Card
              className="routes"
              title={<Title level={5}>Booking</Title>}
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
