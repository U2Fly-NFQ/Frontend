import moment from 'moment'
import './style.scss'
import { Row, Col } from 'antd'
import { useNavigate, createSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

function Home() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const airports = useSelector((state) => state.airports.data)

  const handleChangeTopDestination = (arrivalCode) => {
    const searchQuery = {
      departure: 'VCA',
      arrival: arrivalCode,
      startDate: moment().format('YYYY-MM-DD'),
      seatType: 'Economy',
      seatAvailable: '1',
      ticketType: 'oneWay',
    }

    navigate({
      pathname: '/flights',
      search: createSearchParams(searchQuery).toString(),
    })
  }

  return (
    <>
      <div className="home-page">
        <div className="grid wide">
          <section id="go-beyond-area">
            <Row gutter={[24, 24]} justify="center">
              <Col span={24}>
                <div className="heading_left_area__wrapper">
                  <div className="heading_left_area">
                    <h2 style={{ textAlign: 'center' }}>
                      {t('home-page.top-destinations-section.title')}
                      <span> </span>
                    </h2>
                    <h5>
                      {t('home-page.goBeyond-section.discover_your_ideal')}
                    </h5>
                  </div>
                </div>
              </Col>
              {airports.map((ap) => (
                <Col key={ap.id} span={24} sm={12} lg={6}>
                  <div
                    className="imagination_boxed"
                    onClick={() => handleChangeTopDestination(ap.iata)}
                  >
                    <img src={ap.image} alt="img" />
                    <h3>{ap.city}</h3>
                  </div>
                </Col>
              ))}
            </Row>
          </section>
        </div>
      </div>
    </>
  )
}

export default Home
