import React from 'react'
import { Pie } from '@ant-design/plots'

const PieChart = () => {
  const data = [
    {
      type: 'Economy',
      value: 1234,
    },
    {
      type: 'Business',
      value: 43,
    },
  ]

  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
    height: 250,
  }
  return <Pie {...config} />
}

export default PieChart
