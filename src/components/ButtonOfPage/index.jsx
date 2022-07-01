import React from 'react'
import './index.scss'
// import { Button } from 'antd'
export default function ButtonOfPage({ title, width, height, warning }) {
  return (
    <div className="form-submit">
      <button
        type="submit"
        className="btn btn-primary btn-md"
        id={warning ? 'success' : ''}
      >
        {title}
      </button>
    </div>
  )
}
