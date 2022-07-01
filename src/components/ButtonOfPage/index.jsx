import React from 'react'
import './index.scss'
export default function ButtonOfPage({ title, width, height }) {
  return (
    <div className="form-submit">
      <button type="submit" className="btn btn-primary btn-md">
        {title}
      </button>
    </div>
  )
}
