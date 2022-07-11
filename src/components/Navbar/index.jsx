import React, { useRef } from 'react'
import NavLinkDropDown from '../NavLinkDropDown'
import './index.scss'
import { useTranslation } from 'react-i18next'
import { NavLink, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Typography } from 'antd'

const { Title } = Typography

export default function Navbar() {
  const openNavbarHamburger = useRef(null)
  const openNavbarModal = useRef(null)
  const navigate = useNavigate()
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
          <motion.div whileHover={{ scale: 1.1 }}>
            <Title
              level={3}
              onClick={() => navigate('/')}
              style={{
                display: 'flex',
                margin: 0,
                gap: '0.6rem',
                alignItems: 'center',
                color: '#fff',
                fontSize: '22px',
                cursor: 'pointer',
                marginRight: '20px',
              }}
            >
              U2FLy
            </Title>
          </motion.div>
          <NavLinkDropDown
            Title={{ path: '', title: 'Home' }}
            onClick={() => openAndNavbarDropDown()}
          />
          <NavLinkDropDown
            Title={{ path: 'flights', title: 'Flights' }}
            onClick={() => openAndNavbarDropDown()}
          />
        </ul>

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
