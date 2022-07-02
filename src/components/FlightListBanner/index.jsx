import { Row, Col } from 'antd'
import { useTranslation } from 'react-i18next'
import './style.scss'

function FlightListBanner() {
  const { t } = useTranslation()

  return (
    <section className="flight-list-banner">
      <div className="grid wide">
        <Row gutter={16}>
          <Col xs={24}>
            <div className="flight-list-banner__text">
              <h2>
                {t('flight-list-page.flight-banner.EXPLORE THE WORLD WITH US')}
              </h2>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default FlightListBanner
