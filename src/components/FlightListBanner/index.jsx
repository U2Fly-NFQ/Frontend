import { Row, Col } from 'antd'

import './style.scss'

function FlightListBanner() {
  return (
    <section className="flight-list-banner">
      <div className="grid wide">
        <Row gutter={16}>
          <Col xs={24}>
            <div className="flight-list-banner__text">
              <h2>Flight search result</h2>
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">
                  <span>
                    <i className="fas fa-circle"></i>
                  </span>{' '}
                  Flight search result
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default FlightListBanner
