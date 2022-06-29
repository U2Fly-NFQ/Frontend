import React from 'react'
import './index.scss'
export default function SelectDropDown({ ListData }) {
  return (
    <div className="">
      <select class="form-select bg_input">
        {ListData &&
          ListData.map((item) => {
            return <option value="1">{item}</option>
          })}
      </select>
    </div>
  )
}
