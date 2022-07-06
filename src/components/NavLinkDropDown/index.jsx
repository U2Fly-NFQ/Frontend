import { DownOutlined } from '@ant-design/icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavLinkCustom from '../NavLink'
import './index.scss'
export default function NavLinkDropDown({ Title, ListDropDown }) {
  const navigate = useNavigate()
  const changeNavigation = (data) => {
    return data.replace(' ', '-').toLowerCase()
  }
  return (
    <li className="navbar__link">
      <NavLinkCustom to={`/${Title.path}`}>
        <p className="navbar__link__data">
          {Title.title} {ListDropDown && <DownOutlined />}
        </p>
      </NavLinkCustom>
      {ListDropDown && (
        <div className="navbar__dropdown">
          <div className="navbar__dropdown__content">
            <div className="navbar__dropdown__lists">
              <ul className="list__dropdown__items">
                {ListDropDown.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="list__dropdown__item"
                      onClick={() => {
                        navigate(`/${changeNavigation(item.path)}`)
                      }}
                    >
                      {item.title}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </li>
  )
}
