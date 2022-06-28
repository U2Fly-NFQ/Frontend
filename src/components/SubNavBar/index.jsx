import { Row, Col } from 'antd'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import './style.scss'
import LangSelect from '../LangSelect'

const SubNavBar = () => {
  const { t } = useTranslation()

  return (
    <div className="sub-nav">
      <nav className="grid wide">
        <Row justify="space-between" align="middle" gutter={[2, 2]}>
          <Col md={12} sm={0}>
            <ul className="sub-nav-list">
              <li className="sub-nav-list__item">
                <a href="#">
                  <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-twitter-square"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li className="sub-nav-list__item">+84 999 999 999</li>
              <li className="sub-nav-list__item">contact@domain.com</li>
            </ul>
          </Col>
          <Col flex="none">
            <ul className="sub-nav-list sub-nav-list-actions">
              <li className="sub-nav-list__item">
                <NavLink to={'/login'}>{t('cta.login')}</NavLink>
              </li>
              <li className="sub-nav-list__item">
                <NavLink to={'/register'}>{t('cta.logout')}</NavLink>
              </li>
              <li className="sub-nav-list__item">
                <LangSelect />
              </li>
            </ul>
          </Col>
        </Row>
      </nav>
    </div>
  )
}

export default SubNavBar
