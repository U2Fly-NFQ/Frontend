import './style.scss'
import { Row, Col } from 'antd'
import { HomeBanner } from '../../components'

function Home() {
  return (
    <div className="home-page">
      <HomeBanner />

      <div className="grid wide">
        <section id="go-beyond-area">
          <Row gutter={[24, 24]}>
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
          <h2 className="top_destination_heading">Top destinations</h2>

          <Row gutter={[24, 24]}>
            <Col span={24} lg={12}>
              <div className="destinations_content_box img_animation">
                <img
                  src="https://andit.co/projects/html/and-tour/assets/img/destination/big-img.png"
                  alt="img"
                />
                <div className="destinations_content_inner">
                  <h2>Up to</h2>
                  <div className="destinations_big_offer">
                    <h1>50</h1>
                    <h6>
                      <span>%</span> <span>Off</span>
                    </h6>
                  </div>
                  <h2>Holiday packages</h2>
                  <a
                    href="top-destinations.html"
                    className="btn btn_theme btn_md"
                  >
                    Book now
                  </a>
                </div>
              </div>
            </Col>
            <Col span={24} lg={12}>
              <Row gutter={24}>
                <Col span={24} sm={8}></Col>
              </Row>
            </Col>
          </Row>
        </section>
      </div>
    </div>
  )
}

export default Home
