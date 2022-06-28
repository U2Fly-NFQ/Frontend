import { Row, Col } from 'antd'
import { NavLink } from 'react-router-dom'

import './style.scss'

const SubNavBar = () => {
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
                <NavLink to={'/login'}>Login</NavLink>
              </li>
              <li className="sub-nav-list__item">
                <NavLink to={'/login'}>Sign up</NavLink>
              </li>
              <li className="sub-nav-list__item">Select</li>
              <li className="sub-nav-list__item">Concurrency</li>
            </ul>
          </Col>
        </Row>
      </nav>
    </div>
  )
}

export default SubNavBar
