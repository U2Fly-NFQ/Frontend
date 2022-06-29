import React from 'react'
import './index.scss'
export default function ButtonOfPage({ title, width, height }) {
  return (
    <div class="form-submit">
      <button class="btn btn-primary btn-md">{title}</button>
    </div>
  )
}
