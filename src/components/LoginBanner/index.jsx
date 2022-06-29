import { Row, Col } from 'antd'

import './style.scss'

function LoginBanner() {
  return (
    <section className="login-banner">
      <div className="grid wide">
        <Row gutter={16}>
          <Col xs={24}>
            <div className="login-banner__text">
              <h2>Log In</h2>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default LoginBanner
