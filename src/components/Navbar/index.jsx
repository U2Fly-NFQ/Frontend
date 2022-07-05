import React, { useRef } from 'react'
import ButtonOfPage from '../ButtonOfPage'
import NavLinkDropDown from '../NavLinkDropDown'
import './index.scss'
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
  ]
  const { t } = useTranslation()
  return (
    <nav className="navbar">
      <div
        className="wide grid"
        style={{
          padding: '10px 0',
          justifyContent: 'flex-end',
        }}
      >
        <ul className="navbar__links">
          <NavLinkDropDown
            Title={{ path: '', title: t('header.navbar.flight') }}
          />
        </ul>
        <div className="navbar__footer">
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
            <li key={item.path} className="navbar__dropdown-menu__item">
              <NavLink to={item.path}>{t(item.name)}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
