import React from 'react'
import { Line } from '@ant-design/plots'

const FlightChart = ({ data }) => {
  const { flightCancel, flightTotal, flightSuccess } = data
  const dataMap = [...flightCancel, ...flightTotal, ...flightSuccess]
  const config = {
    data: dataMap,
    xField: 'time',
    yField: 'value',
    seriesField: 'name',
    yAxis: {
      label: {
        formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
      },
    },
    legend: {
      position: 'top',
    },
    smooth: true,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
    height: 200,
  }

  return (
    <Line
      theme={{
        styleSheet: { backgroundColor: '#fff' },
      }}
      {...config}
    />
  )
}

export default FlightChart
