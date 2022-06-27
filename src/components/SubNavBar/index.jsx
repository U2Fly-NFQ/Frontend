import { Row, Col } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.scss'

const SubNavBar = () => {
  return (
    <div className="sub-nav">
      <nav className="grid wide">
        <Row justify="space-between">
          <Col span={6}>
            <ul className="sub-nav-list">
              <li className="sub-nav-list__item">
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
              </li>
              <li className="sub-nav-list__item">Item</li>
              <li className="sub-nav-list__item">Item</li>
              <li className="sub-nav-list__item">Item</li>
            </ul>
          </Col>
          <Col span={6}>
            <ul className="sub-nav-list">
              <li className="sub-nav-list__item">Item</li>
              <li className="sub-nav-list__item">Item</li>
              <li className="sub-nav-list__item">Item</li>
              <li className="sub-nav-list__item">Item</li>
            </ul>
          </Col>
        </Row>
      </nav>
    </div>
  )
}

export default SubNavBar
