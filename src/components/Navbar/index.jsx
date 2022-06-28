import { SearchOutlined } from '@ant-design/icons'
import React, { useRef } from 'react'
import ButtonOfPage from '../ButtonOfPage'
import NavLinkDropDown from '../NavLinkDropDown'
import './index.scss'
export default function Navbar() {
  const openNavbarHamburger = useRef(null)
  const openNavbarModal = useRef(null)
  const openAndNavbarDropDown = () => {
    openNavbarHamburger.current.classList.toggle('open')
    openNavbarModal.current.classList.toggle('open')
  }
  return (
    <header>
      <nav>
        <div className="wide grid">
          <div className="navbar__logo">
            <img
              src="https://andit.co/projects/html/and-tour/assets/img/logo.png"
              className="navbar__logo"
            />
          </div>

          <ul className="navbar__links">
            <NavLinkDropDown Title={'Home'} />
            <NavLinkDropDown
              Title={'Flights'}
              ListDropDown={['Flight', 'Flight Booking']}
            />
            <NavLinkDropDown
              Title={'Tours'}
              ListDropDown={[
                'Tours',
                'Tour booking',
                'Top Destination',
                'Destination Booking',
              ]}
            />
            <NavLinkDropDown
              Title={'New'}
              ListDropDown={['Ajax Load More', 'Ajax Load More', 'Home']}
            />
            <NavLinkDropDown
              Title={'Pages'}
              ListDropDown={['Ajax Load More', 'Ajax Load More', 'Home']}
            />
          </ul>
          <div className="navbar__footer">
            <div className="navbar__footer__search">
              <SearchOutlined />
            </div>
            <div className="navbar__footer__btn">
              <ButtonOfPage title={'Become a partner'} />
            </div>
          </div>

          <div
            class="navbar_icons"
            onClick={() => {
              openAndNavbarDropDown()
            }}
          >
            <div class="navbar_icon" ref={openNavbarHamburger}></div>
          </div>
        </div>
        <div className="navbar__dropdown__modal">
          <ul className="navbar__dropdown-menu" ref={openNavbarModal}>
            <li className="navbar__dropdown-menu__item">
              <a>Home</a>
              <div href="navbar__dropdown-menu__item__icon">+</div>
            </li>
            <li className="navbar__dropdown-menu__item">
              <a>Flight </a>
              <div href="navbar__dropdown-menu__item__icon">+</div>
            </li>
            <li className="navbar__dropdown-menu__item">
              <a>Tour</a>
            </li>
            <li className="navbar__dropdown-menu__item">
              <a>News</a>
            </li>
            <li className="navbar__dropdown-menu__item">
              <a>PAges</a>
            </li>
            <li className="navbar__dropdown-menu__item">
              <a>Hello</a>
            </li>
            <li className="navbar__dropdown-menu__item">
              <a>Hello</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
