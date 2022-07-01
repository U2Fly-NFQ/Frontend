import { Row, Col } from 'antd'

import './style.scss'

function FlightListBanner() {
  return (
    <section className="flight-list-banner">
      <div className="grid wide">
        <Row gutter={16}>
          <Col xs={24}>
            <div className="flight-list-banner__text">
              <h2>EXPLORE THE WORLD WITH US</h2>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default FlightListBanner
