import { SearchOutlined } from '@ant-design/icons'
import React, { useRef } from 'react'
import ButtonOfPage from '../ButtonOfPage'
import NavLinkDropDown from '../NavLinkDropDown'
import './index.scss'
import getLogo from '../../assets/images/system/logo.png'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  const openNavbarHamburger = useRef(null)
  const openNavbarModal = useRef(null)
  const openAndNavbarDropDown = () => {
    openNavbarHamburger.current.classList.toggle('open')
    openNavbarModal.current.classList.toggle('open')
  }
  const navLinkDropDownData = [
    { path: '', name: 'header.navbar.home' },
    { path: '/flights', name: 'header.navbar.flight' },
    { path: '/tour', name: 'header.navbar.tour' },

    { path: '/admin', name: 'header.navbar.admin' },
    { path: '/pages', name: 'header.navbar.pages' },
  ]
  const { t } = useTranslation()
  return (
    <nav className="navbar">
      <div className="wide grid">
        <div className="navbar__logo">
          <img src={getLogo} className="navbar__logo" />
        </div>

        <ul className="navbar__links">
          <NavLinkDropDown
            Title={{ path: '', title: t('header.navbar.home') }}
          />
          <NavLinkDropDown
            Title={{ path: 'flights', title: t('header.navbar.flight') }}
            ListDropDown={[
              {
                path: 'flights',
                title: t('header.navbar.flight'),
              },
              {
                path: 'flights-booking',
                title: t('header.navbar.flight_booking'),
              },
            ]}
          />
          <NavLinkDropDown
            Title={{ path: 'Tour', title: t('header.navbar.tour') }}
            ListDropDown={[
              {
                path: 'flights',
                title: t('header.navbar.flight'),
              },
              {
                path: 'flights-booking',
                title: t('header.navbar.flight_booking'),
              },
            ]}
          />
        </ul>
        <div className="navbar__footer">
          <div className="navbar__footer__search">
            <SearchOutlined />
          </div>
          <div className="navbar__footer__btn">
            <ButtonOfPage title={t('cta.become_partner')} />
          </div>
        </div>
        <div
          className="navbar_icons"
          onClick={() => {
            openAndNavbarDropDown()
          }}
        >
          <div className="navbar_icon" ref={openNavbarHamburger}></div>
        </div>
      </div>
      <div className="navbar__dropdown__modal" ref={openNavbarModal}>
        <ul className="navbar__dropdown-menu">
          {navLinkDropDownData.map((item) => (
            <li className="navbar__dropdown-menu__item">
              <NavLink to={item.path}>{t(item.name)}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
