import { SearchOutlined } from '@ant-design/icons'
import React, { useRef } from 'react'
import ButtonOfPage from '../ButtonOfPage'
import NavLinkDropDown from '../NavLinkDropDown'
import './index.scss'
import getLogo from '../../assets/images/system/logo-rectangle.png'
import { useTranslation } from 'react-i18next'
export default function Navbar() {
  const openNavbarHamburger = useRef(null)
  const openNavbarModal = useRef(null)
  const openAndNavbarDropDown = () => {
    openNavbarHamburger.current.classList.toggle('open')
    openNavbarModal.current.classList.toggle('open')
  }
  const { t } = useTranslation()
  return (
    <nav className="navbar">
      <div className="wide grid">
        <div className="navbar__logo">
          <img src={getLogo} className="navbar__logo" />
        </div>

        <ul className="navbar__links">
          <NavLinkDropDown Title={t('header.navbar.home')} />
          <NavLinkDropDown
            Title={t('header.navbar.flight')}
            ListDropDown={[
              t('header.navbar.flight'),
              t('header.navbar.flight_booking'),
            ]}
          />
          <NavLinkDropDown
            Title={t('header.navbar.tour')}
            ListDropDown={[
              t('header.navbar.tour'),
              t('header.navbar.tour_booking'),
              t('header.navbar.top_destination'),
              t('header.navbar.destination_booking'),
            ]}
          />
          <NavLinkDropDown
            Title={t('header.navbar.news')}
            ListDropDown={['Ajax Load More']}
          />
          <NavLinkDropDown
            Title={t('header.navbar.pages')}
            ListDropDown={['Ajax Load More']}
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
      <div className="navbar__dropdown__modal">
        <ul className="navbar__dropdown-menu" ref={openNavbarModal}>
          <li className="navbar__dropdown-menu__item">
            <a>{t('header.navbar.home')}</a>
            <div href="navbar__dropdown-menu__item__icon">+</div>
          </li>
          <li className="navbar__dropdown-menu__item">
            <a>{t('header.navbar.flight')} </a>
            <div href="navbar__dropdown-menu__item__icon">+</div>
          </li>
          <li className="navbar__dropdown-menu__item">
            <a>{t('header.navbar.tour')}</a>
          </li>
          <li className="navbar__dropdown-menu__item">
            <a>{t('header.navbar.news')}</a>
          </li>
          <li className="navbar__dropdown-menu__item">
            <a>{t('header.navbar.pages')}</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
