import React from 'react'
import { Line } from '@ant-design/plots'

const FlightChart = ({ data }) => {
  const { flightOfDay } = data

  let flightCancel = flightOfDay.map((f) => ({
    name: 'Flight Cancel',
    time: f.date,
    value: f.cancel || 0,
  }))

  let flightSuccess = flightOfDay.map((f) => ({
    name: 'Flight Success',
    time: f.date,
    value: f.success || 0,
  }))

  let flightTotal = flightOfDay.map((f) => ({
    name: 'Flight Total',
    time: f.date,
    value: (f.cancel || 0) + (f.success || 0),
  }))

  let resultChart = [...flightCancel, ...flightTotal, ...flightSuccess]

  const config = {
    data: resultChart,
    xField: 'time',
    yField: 'value',
    seriesField: 'name',
    yAxis: {
      label: {},
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
    height: 400,
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
