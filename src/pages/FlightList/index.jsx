import { Row, Col } from 'antd'

import './style.scss'

function FlightList() {
  return (
    <section className="common_banner">
      <div class="grid wide">
        <Row>
          <Col lg={24}>
            <div class="common_banner_text">
              <h2>Flight search result</h2>
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <span>
                    <i class="fas fa-circle"></i>
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

export default FlightList
