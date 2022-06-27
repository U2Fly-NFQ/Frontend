import { DownOutlined, SearchOutlined } from '@ant-design/icons'
import React from 'react'
import NavLinkCustom from '../NavLink'
import './index.scss'
export default function Navbar() {
  return (
    <header>
      <nav className="wide grid">
        <div className="navbar__logo">
          <img
            src="https://andit.co/projects/html/and-tour/assets/img/logo.png"
            className="navbar__logo"
          />
        </div>

        <ul className="navbar__links">
          <li className="navbar__link">
            <NavLinkCustom to="/Home">
              <p className="navbar__link__data">
                Home
                <DownOutlined />
              </p>
            </NavLinkCustom>
            <div className="navbar__dropdown">
              <div className="navbar__dropdown__content">
                <div className="navbar__dropdown__lists">
                  <div className="title">SHOP LAYOUTS</div>
                  <ul className="list__dropdown__items">
                    <li className="list__dropdown__item">More</li>
                    <li className="list__dropdown__item">Ajax Load More</li>
                    <li className="list__dropdown__item">Ajax Load More</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="navbar__link">
            <NavLinkCustom to="/Flights">
              <p className="navbar__link__data">
                Flights <DownOutlined />
              </p>
            </NavLinkCustom>
            <div className="navbar__dropdown">
              <div className="navbar__dropdown__content">
                <div className="navbar__dropdown__lists">
                  <div className="title">SHOP LAYOUTS</div>
                  <ul className="list__dropdown__items">
                    <li className="list__dropdown__item">More</li>
                    <li className="list__dropdown__item">Ajax Load More</li>
                    <li className="list__dropdown__item">Ajax Load More</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="navbar__link">
            <NavLinkCustom to="/Tours">
              <p className="navbar__link__data">
                Tours <DownOutlined />
              </p>
            </NavLinkCustom>
            <div className="navbar__dropdown">
              <div className="navbar__dropdown__content">
                <div className="navbar__dropdown__lists">
                  <div className="title">SHOP LAYOUTS</div>
                  <ul className="list__dropdown__items">
                    <li className="list__dropdown__item">More</li>
                    <li className="list__dropdown__item">Ajax Load More</li>
                    <li className="list__dropdown__item">Ajax Load More</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="navbar__link">
            <NavLinkCustom to="/News">
              <p className="navbar__link__data">
                News <DownOutlined />{' '}
              </p>
            </NavLinkCustom>
            <div className="navbar__dropdown">
              <div className="navbar__dropdown__content">
                <div className="navbar__dropdown__lists">
                  <div className="title">SHOP LAYOUTS</div>
                  <ul className="list__dropdown__items">
                    <li className="list__dropdown__item">More</li>
                    <li className="list__dropdown__item">Ajax Load More</li>
                    <li className="list__dropdown__item">Ajax Load More</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="navbar__link">
            <NavLinkCustom to="/page">
              <p className="navbar__link__data">
                page <DownOutlined />{' '}
              </p>
            </NavLinkCustom>
            <div className="navbar__dropdown">
              <div className="navbar__dropdown__content">
                <div className="navbar__dropdown__lists">
                  <div className="title">SHOP LAYOUTS</div>
                  <ul className="list__dropdown__items">
                    <li className="list__dropdown__item">More</li>
                    <li className="list__dropdown__item">Ajax Load More</li>
                    <li className="list__dropdown__item">Ajax Load More</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="navbar__footer">
          <div className="navbar__footer__search">
            <SearchOutlined />
          </div>
          <div className="navbar__footer__btn">
            <button>become a partner</button>
          </div>
        </div>
      </nav>
    </header>
  )
}
