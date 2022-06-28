import React from 'react'
import './index.scss'
export default function ButtonOfPage({ title, width, height }) {
  return (
    <div className="ButtonOfPage">
      <button
        style={{ width: width && 'fitContent', height: height && 'fitContent' }}
      >
        {' '}
        {title}
      </button>
    </div>
  )
}
