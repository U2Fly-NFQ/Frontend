import { Col, Row } from 'antd'
import React from 'react'
import emailImage from '../../../assets/images/system/email.png'
import ButtonOfPage from '../../ButtonOfPage'
import InputOFPage from '../../InputOfPage'
import './index.scss'
import { useTranslation } from 'react-i18next'

export default function FooterEmail() {
  const { t } = useTranslation()

  let dataRender = [
    {
      render: (
        <div className="footer-email__logo-content">
          <div className="footer-email__logo-content__logo">
            <img src={emailImage} />
          </div>
          <div className="footer-email__logo-content__content">
            <h4>{t('subscribe-form.Get the latest news and offers')}</h4>
            <h2>{t('subscribe-form.Subscribe to our newsletter')}</h2>
          </div>
        </div>
      ),
    },
    {
      render: (
        <div className="footer-email__email-send">
          <InputOFPage
            placeholder={t('subscribe-form.Enter your email address')}
          />
          <ButtonOfPage title={t('subscribe-form.Subscribe')} />
        </div>
      ),
    },
  ]

  return (
    <div className="footer-email">
      <div className="footer-email container wide grid">
        <Row style={{ alignItems: 'center' }}>
          {dataRender.map((item, i) => {
            return (
              <Col
                key={i}
                lg={{ span: 12 }}
                md={{ span: 12 }}
                sm={{ span: 24 }}
                xs={{ span: 24 }}
              >
                {item.render}
              </Col>
            )
          })}
        </Row>
      </div>
    </div>
  )
}
