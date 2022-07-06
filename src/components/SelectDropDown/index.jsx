import React from 'react'
import './index.scss'
export default function SelectDropDown({ ListData }) {
  return (
    // <div className="">
    <select className="form-select bg_input">
      {ListData &&
        ListData.map((item, index) => {
          return (
            <option value="1" key={index}>
              {item}
            </option>
          )
        })}
    </select>
    // </div>
  )
}
