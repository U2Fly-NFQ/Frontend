import { Col, Row } from 'antd'
import React from 'react'
import './index.scss'
export default function FooterInformation() {
  return (
    <div className="footer-info  wide grid">
      <div className="footer-info__container ">
        <Row>
          <Col
            lg={{ span: 6 }}
            md={{ span: 6 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <div className="footer-info__container__contact">
              <div className="footer-info__container__title">
                <h5>Need any help?</h5>
              </div>
              <div className="footer-info__container__contact-content">
                <div className="footer-info__container__contact-content__item">
                  <h5>Call 24/7 for any help</h5>
                  <h3>
                    <a href="#">+00 123 456 789</a>
                  </h3>
                </div>
                <div className="footer-info__container__contact-content__item">
                  <h5>CMail to our support team</h5>
                  <h3>
                    <a href="#">support@domain.com</a>
                  </h3>
                </div>
                <div className="footer-info__container__contact-content__item">
                  <h5>Call 24/7 for any help</h5>
                  <h3>
                    <a href="#">+00 123 456 789</a>
                  </h3>
                </div>
              </div>
            </div>
          </Col>
          <Col
            lg={{ span: 3 }}
            md={{ span: 6 }}
            sm={{ span: 12 }}
            xs={{ span: 12 }}
          >
            <div className="footer-info__container__company">
              <div className="footer-info__container__title">
                <h5>Company</h5>
              </div>
              <div className="footer-info__container__company__content">
                <ul>
                  <li>About Us</li>
                  <li>Testimonials</li>
                  <li>Rewards</li>
                  <li>Work with Us</li>
                  <li>Meet the Team</li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col
            lg={{ span: 5 }}
            md={{ span: 6 }}
            sm={{ span: 12 }}
            xs={{ span: 12 }}
          >
            <div className="footer-info__container__company">
              <div className="footer-info__container__title">
                <h5>Company</h5>
              </div>
              <div className="footer-info__container__company__content">
                <ul>
                  <li>About Us</li>
                  <li>Testimonials</li>
                  <li>Rewards</li>
                  <li>Work with Us</li>
                  <li>Meet the Team</li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col
            lg={{ span: 4 }}
            md={{ span: 6 }}
            sm={{ span: 12 }}
            xs={{ span: 12 }}
          >
            <div className="footer-info__container__company">
              <div className="footer-info__container__title">
                <h5>Support</h5>
              </div>
              <div className="footer-info__container__company__content">
                <ul>
                  <li>Account</li>
                  <li>Faq </li>
                  <li>Legal</li>
                  <li>Contact</li>
                  <li>Affiliate Program</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col
            lg={{ span: 4 }}
            md={{ span: 5 }}
            sm={{ span: 12 }}
            xs={{ span: 12 }}
          >
            <div className="footer-info__container__company">
              <div className="footer-info__container__title">
                <h5>Other Services</h5>
              </div>
              <div className="footer-info__container__company__content">
                <ul>
                  <li>Community program</li>
                  <li>Investor Relations</li>
                  <li>Rewards Program</li>
                  <li>Partners</li>
                  <li>PointsPLUS</li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
