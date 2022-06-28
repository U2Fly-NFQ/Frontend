import { DownOutlined } from '@ant-design/icons'
import React from 'react'
import NavLinkCustom from '../NavLink'
import './index.scss'
export default function NavLinkDropDown({ Title, ListDropDown }) {
  return (
    <li className="navbar__link">
      <NavLinkCustom to="/News">
        <p className="navbar__link__data">
          {Title} <DownOutlined />{' '}
        </p>
      </NavLinkCustom>
      {ListDropDown.length > 0 && (
        <div className="navbar__dropdown">
          <div className="navbar__dropdown__content">
            <div className="navbar__dropdown__lists">
              <ul className="list__dropdown__items">
                {ListDropDown.map((item) => {
                  return <li className="list__dropdown__item">{item}</li>
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </li>
  )
}
