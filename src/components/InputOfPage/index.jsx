import React from 'react'
import './index.scss'
export default function InputOFPage({ name, placeholder }) {
  return (
    <input name={name} className="form-control" placeholder={placeholder} />
  )
}
