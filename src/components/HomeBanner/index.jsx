import { Row, Col } from 'antd'
import { useTranslation } from 'react-i18next'
import './style.scss'

function HomeBanner() {
  const { t } = useTranslation()

  return (
    <section className="home-list-banner">
      <div className="grid wide">
        <Row gutter={16}>
          <Col xs={24}>
            <div className="home-list-banner__text">
              <h2>{t('home-page.home-banner.THE WHOLE WORLD AWAITS')}</h2>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default HomeBanner
