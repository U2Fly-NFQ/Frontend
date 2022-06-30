import './style.scss'
import { Row, Col } from 'antd'
import { HomeBanner } from '../../components'

function Home() {
  return (
    <div className="home-page">
      <HomeBanner />

      <div className="grid wide">
        <section id="go-beyond-area">
          <Row gutter={[32, 32]}>
            <Col span={24} sm={12} lg={6}>
              <div className="heading_left_area__wrapper">
                <div className="heading_left_area">
                  <h2>
                    Go beyond your <span>imagination</span>
                  </h2>
                  <h5>Discover your ideal experience with us</h5>
                </div>
              </div>
            </Col>
            <Col span={24} sm={12} lg={6}>
              <div className="imagination_boxed">
                <img
                  src="https://andit.co/projects/html/and-tour/assets/img/imagination/imagination1.png"
                  alt="img"
                />

                <h3>
                  7% Discount for all <span>Airlines</span>
                </h3>
              </div>
            </Col>
            <Col span={24} sm={12} lg={6}>
              <div className="imagination_boxed">
                <img
                  src="https://andit.co/projects/html/and-tour/assets/img/imagination/imagination2.png"
                  alt="img"
                />

                <h3>
                  Travel around<span>the world</span>
                </h3>
              </div>
            </Col>
            <Col span={24} sm={12} lg={6}>
              <div className="imagination_boxed">
                <img
                  src="https://andit.co/projects/html/and-tour/assets/img/imagination/imagination3.png"
                  alt="img"
                />

                <h3>
                  Luxury resorts<span>top deals</span>
                </h3>
              </div>
            </Col>
          </Row>
        </section>

        <section id="top_destination">
          <h2>Top destinations</h2>
        </section>
      </div>
    </div>
  )
}

export default Home
