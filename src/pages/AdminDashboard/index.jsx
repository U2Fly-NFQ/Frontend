import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'antd'
import { Bar } from '@ant-design/charts'
import { Typography } from 'antd/es'
import './style.scss'
import FlightChart from './FlightChart'

const { Title } = Typography

const data = {
  top_airport: {
    total: 2344,
    data: [
      { iata: 'VCN', name: 'Can Tho Airport', value: 13123 },
      { iata: 'ABC', name: 'Noi Bai Airport', value: 11123 },
      { iata: 'TTA', name: 'Tan Son Nhat Airport', value: 22123 },
    ],
  },
  top_airline: {
    total: 4123,
    data: [
      { iata: 'VCN', name: 'VietJetAir', value: 3123 },
      { iata: 'DDN', name: 'Vietnam Ailine', value: 1231 },
    ],
  },
  top_aircraft: {
    total: 5981,
    data: [
      { iata: 'VCN', name: 'Boeing 212', value: 2223 },
      { iata: 'ABN', name: 'Boeing 747', value: 3123 },
      { iata: 'SAN', name: 'B777 Sakas', value: 123 },
    ],
  },
  top_routes: {
    total: 821,
    data: [
      { iata: 'CGK - NAS', value: 323 },
      { iata: 'SIN - CG2', value: 223 },
      { iata: 'HUA - CIS', value: 123 },
    ],
  },
}

function AdminDashboard() {
  const barConfig = {
    xField: 'value',
    yField: 'iata',
    seriesField: 'value',
    colorField: 'value', // or seriesField in some cases
    color: ['#19CDD7', '#DDB27C'],
    height: 200,
  }

  const [statics, setStatics] = useState()

  useEffect(() => {
    // get().then((rs) => console.log(rs))
  }, [])

  return (
    <div className="admin-layout">
      <div className="bar-chart-area">
        <Row gutter={20}>
          <Col lg={12}>
            <Card
              className="airlines"
              title={<Title level={5}>Top Airlines</Title>}
              bordered={false}
            >
              <Bar data={data.top_airline.data} {...barConfig} />
            </Card>
          </Col>
          <Col lg={12}>
            <Card
              className="routes"
              title={<Title level={5}>Top Routes</Title>}
              bordered={false}
            >
              <Bar data={data.top_routes.data} {...barConfig} />
            </Card>
          </Col>
        </Row>
      </div>
      <div className="line-chart-area">
        <Row gutter={[20, 20]}>
          <Col span={24}>
            <FlightChart />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AdminDashboard
