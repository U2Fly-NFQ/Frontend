import moment from 'moment'
import './style.scss'
import { Row, Col } from 'antd'
import { useNavigate, createSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()
  const navigate = useNavigate()

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
            <Row gutter={[24, 24]}>
              <Col span={24} sm={12} lg={6}>
                <div className="heading_left_area__wrapper">
                  <div className="heading_left_area">
                    <h2>
                      {t('home-page.top-destinations-section.title')}
                      <span> </span>
                    </h2>
                    <h5>
                      {t('home-page.goBeyond-section.discover_your_ideal')}
                    </h5>
                  </div>
                </div>
              </Col>
              <Col span={24} sm={12} lg={6}>
                <div
                  className="imagination_boxed"
                  onClick={() => handleChangeTopDestination('SGN')}
                >
                  <img
                    src="https://wallpaperaccess.com/full/1631415.jpg"
                    alt="img"
                  />
                  <h3>Ho Chi Minh</h3>
                </div>
              </Col>
              <Col span={24} sm={12} lg={6}>
                <div
                  className="imagination_boxed"
                  onClick={() => handleChangeTopDestination('DAD')}
                >
                  <img
                    src="https://res.klook.com/image/upload/c_crop,w_1125,h_624,x_1,y_0/w_1125,h_624/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/destination/ur2mrg23d91mex03l4mw.jpg"
                    alt="img"
                  />

                  <h3>Da Nang</h3>
                </div>
              </Col>
              <Col span={24} sm={12} lg={6}>
                <div
                  className="imagination_boxed"
                  onClick={() => handleChangeTopDestination('BKK')}
                >
                  <img
                    src="https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg"
                    alt="img"
                  />

                  <h3>Bangkok</h3>
                </div>
              </Col>
            </Row>
          </section>
        </div>
      </div>
    </>
  )
}

export default Home
