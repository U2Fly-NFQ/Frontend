import React from 'react'
import { Line } from '@ant-design/plots'

const FlightChart = ({ data }) => {
  const { flightCancel, flightTotal, flightSuccess } = data

  let flightCancelMap = flightCancel.map((f) => ({
    name: 'Flight canceled',
    time: f.time,
    value: f.value,
  }))

  let flightTotalMap = flightTotal.map((f) => ({
    name: 'Flight total',
    time: f.time,
    value: f.value,
  }))

  let flightSuccessMap = flightSuccess.map((f) => ({
    name: 'Flight Success',
    time: f.time,
    value: f.value,
  }))

  let resultChart = [...flightCancelMap, ...flightTotalMap, ...flightSuccessMap]

  console.log(resultChart)

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
