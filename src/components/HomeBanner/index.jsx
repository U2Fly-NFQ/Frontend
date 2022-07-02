import { Row, Col } from 'antd'

import './style.scss'

function HomeBanner() {
  return (
    <section className="home-list-banner">
      <div className="grid wide">
        <Row gutter={16}>
          <Col xs={24}>
            <div className="home-list-banner__text">
              <h2>THE WHOLE WORLD AWAITS</h2>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default HomeBanner
