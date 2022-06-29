import { Col, Row } from 'antd'
import React from 'react'
import emailImage from '../../../assets/images/system/email.png'
import ButtonOfPage from '../../ButtonOfPage'
import InputOFPage from '../../InputOfPage'
import './index.scss'
export default function FooterEmail() {
  return (
    <div className="footer-email">
      <Row style={{ alignItems: 'center' }}>
        <Col span={12}>
          <div className="footer-email__logo-content">
            <div className="footer-email__logo-content__logo">
              <img src={emailImage} />
            </div>
            <div className="footer-email__logo-content__content">
              <h4>Get the latest news and offers</h4>
              <h2>Subscribe to our newsletter</h2>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="footer-email__email-send">
            <InputOFPage placeholder="Enter your email address" />
            <ButtonOfPage title="Subcribe" />
          </div>
        </Col>
      </Row>
    </div>
  )
}
