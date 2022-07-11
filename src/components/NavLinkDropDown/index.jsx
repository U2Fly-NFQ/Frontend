import { DownOutlined } from '@ant-design/icons'
import React from 'react'
import NavLinkCustom from '../NavLink'
import './index.scss'
export default function NavLinkDropDown({ Title, ListDropDown }) {
  return (
    <li className="navbar__link">
      <NavLinkCustom to={`/${Title.path}`}>
        <p className="navbar__link__data">
          {Title.title} {ListDropDown && <DownOutlined />}
        </p>
      </NavLinkCustom>
    </li>
  )
}
