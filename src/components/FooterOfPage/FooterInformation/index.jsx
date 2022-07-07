import { Col, Row } from 'antd'
import React from 'react'
import './index.scss'
import { useTranslation } from 'react-i18next'

export default function FooterInformation() {
  const { t } = useTranslation()

  return (
    <div className="footer-info  wide grid">
      <div className="footer-info__container ">
        <Row justify="space-between">
          <Col
            lg={{ span: 6 }}
            md={{ span: 8 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <div className="footer-info__container__contact">
              <div className="footer-info__container__title">
                <h5>{t('footer.Need any help?')}</h5>
              </div>
              <div className="footer-info__container__contact-content">
                <div className="footer-info__container__contact-content__item">
                  <h5>{t('footer.Call 24/7 for any help')}</h5>
                  <h3>
                    <a href="#">+00 123 456 789</a>
                  </h3>
                </div>
                <div className="footer-info__container__contact-content__item">
                  <h5>{t('footer.CMail to our support team')}</h5>
                  <h3>
                    <a href="#">support@domain.com</a>
                  </h3>
                </div>
                <div className="footer-info__container__contact-content__item">
                  <h5>{t('footer.Call 24/7 for any help')}</h5>
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
                <h5>{t('footer.Company')}</h5>
              </div>
              <div className="footer-info__container__company__content">
                <ul>
                  <li>{t('footer.About Us')}</li>
                  <li>{t('footer.Testimonials')}</li>
                  <li>{t('footer.Rewards')}</li>
                  <li>{t('footer.Work with Us')}</li>
                  <li>{t('footer.Meet the Team')}</li>
                  <li>{t('footer.Blog')}</li>
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
                <h5>{t('footer.Support')}</h5>
              </div>
              <div className="footer-info__container__company__content">
                <ul>
                  <li>{t('footer.Account')}</li>
                  <li>{t('footer.Faq')} </li>
                  <li>{t('footer.Legal')}</li>
                  <li>{t('footer.Contact')}</li>
                  <li>{t('footer.Affiliate Program')}</li>
                  <li>{t('footer.Privacy Policy')}</li>
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
                <h5>{t('footer.Other Services')}</h5>
              </div>
              <div className="footer-info__container__company__content">
                <ul>
                  <li>{t('footer.Community program')}</li>
                  <li>{t('footer.Investor Relations')}</li>
                  <li>{t('footer.Rewards Program')}</li>
                  <li>{t('footer.Partners')}</li>
                  <li>{t('footer.PointsPLUS')}</li>
                  <li>{t('footer.Blog')}</li>
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
                <h5>{t('footer.Top cities')}</h5>
              </div>
              <div className="footer-info__container__company__content">
                <ul>
                  <li>Chicago</li>
                  <li>New York</li>
                  <li>San Francisco</li>
                  <li>California</li>
                  <li>Ohio</li>
                  <li>Alaska</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
