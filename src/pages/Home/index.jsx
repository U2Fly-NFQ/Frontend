import './style.scss'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'
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
              <Link to="/flights">
                <div className="imagination_boxed">
                  <img
                    src="https://andit.co/projects/html/and-tour/assets/img/imagination/imagination1.png"
                    alt="img"
                  />

                  <h3>
                    7% Discount for all <span>Airlines</span>
                  </h3>
                </div>
              </Link>
            </Col>
            <Col span={24} sm={12} lg={6}>
              <Link to="/flights">
                <div className="imagination_boxed">
                  <img
                    src="https://andit.co/projects/html/and-tour/assets/img/imagination/imagination2.png"
                    alt="img"
                  />

                  <h3>
                    Travel around<span>the world</span>
                  </h3>
                </div>
              </Link>
            </Col>
            <Col span={24} sm={12} lg={6}>
              <Link to="/flights">
                <div className="imagination_boxed">
                  <img
                    src="https://andit.co/projects/html/and-tour/assets/img/imagination/imagination3.png"
                    alt="img"
                  />

                  <h3>
                    Luxury resorts<span>top deals</span>
                  </h3>
                </div>
              </Link>
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
                  <Link to="/flights" className="btn btn_theme btn_md">
                    Book now
                  </Link>
                </div>
              </div>
            </Col>
            <Col span={24} lg={12}>
              <Row gutter={24}>
                <Col span={24} sm={8}>
                  <div className="destinations_content_box img_animation">
                    <img
                      src="https://andit.co/projects/html/and-tour/assets/img/destination/destination1.png"
                      alt="img"
                    />
                    <div className="destinations_content_inner">
                      <Link to="/flights">China</Link>
                    </div>
                  </div>
                  <div className="destinations_content_box img_animation">
                    <img
                      src="https://andit.co/projects/html/and-tour/assets/img/destination/destination2.png"
                      alt="img"
                    />
                    <div className="destinations_content_inner">
                      <Link to="/flights">Darjeeling</Link>
                    </div>
                  </div>
                  <div className="destinations_content_box img_animation">
                    <img
                      src="https://andit.co/projects/html/and-tour/assets/img/destination/destination3.png"
                      alt="img"
                    />
                    <div className="destinations_content_inner">
                      <Link to="/flights">Malaysia</Link>
                    </div>
                  </div>
                </Col>
                <Col span={24} sm={8}>
                  <div className="destinations_content_box img_animation">
                    <img
                      src="https://andit.co/projects/html/and-tour/assets/img/destination/destination4.png"
                      alt="img"
                    />
                    <div className="destinations_content_inner">
                      <Link to="/flights">Gangtok</Link>
                    </div>
                  </div>
                  <div className="destinations_content_box img_animation">
                    <img
                      src="https://andit.co/projects/html/and-tour/assets/img/destination/destination5.png"
                      alt="img"
                    />
                    <div className="destinations_content_inner">
                      <Link to="/flights">Thailand</Link>
                    </div>
                  </div>
                  <div className="destinations_content_box img_animation">
                    <img
                      src="https://andit.co/projects/html/and-tour/assets/img/destination/destination6.png"
                      alt="img"
                    />
                    <div className="destinations_content_inner">
                      <Link to="/flights">Australia</Link>
                    </div>
                  </div>
                </Col>
                <Col span={24} sm={8}>
                  <div className="destinations_content_box img_animation">
                    <img
                      src="https://andit.co/projects/html/and-tour/assets/img/destination/destination7.png"
                      alt="img"
                    />
                    <div className="destinations_content_inner">
                      <Link to="/flights">London</Link>
                    </div>
                  </div>
                  <div className="destinations_content_box img_animation">
                    <img
                      src="https://andit.co/projects/html/and-tour/assets/img/destination/destination8.png"
                      alt="img"
                    />
                    <div className="destinations_content_inner">
                      <Link to="/flights">USA</Link>
                    </div>
                  </div>
                  <Link
                    to="/flights"
                    className="btn btn_theme btn_md view-all-btn"
                  >
                    View all
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>

        <section id="offer-area">
          <Row gutter={[24, 24]}>
            <Col span={24} md={12}>
              <div className="offer_area_box img_animation">
                <img
                  src="https://andit.co/projects/html/and-tour/assets/img/offer/offer1.png"
                  alt="img"
                />
                <div class="offer_area_content">
                  <h2>Special Offers</h2>
                  <p>
                    Invidunt ut labore et dolore magna aliquyam erat, sed diam
                    voluptua. At vero eos et accusam et justo duo dolores et ea
                    rebum. Stet clita kasd dolor sit amet. Lorem ipsum dolor sit
                    amet.
                  </p>
                  <Link to="/flights" class="btn btn_theme btn_md">
                    Holiday deals
                  </Link>
                </div>
              </div>
            </Col>
            <Col span={24} md={12}>
              <Row gutter={[24, 24]}>
                <Col span={24} md={12}>
                  <div class="offer_area_box img_animation">
                    <img
                      src="https://andit.co/projects/html/and-tour/assets/img/offer/offer2.png"
                      alt="img"
                    />
                    <div class="offer_area_content">
                      <h2>News letter</h2>
                      <p>
                        Invidunt ut labore et dolore magna aliquyam erat, sed
                        diam voluptua. At vero eos et.
                      </p>
                      <Link to="/flights" class="btn btn_theme btn_md">
                        Subscribe now
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col span={24} md={12}>
                  <div class="offer_area_box img_animation">
                    <img
                      src="https://andit.co/projects/html/and-tour/assets/img/offer/offer3.png"
                      alt="img"
                    />
                    <div class="offer_area_content">
                      <h2>Travel tips</h2>
                      <p>
                        Invidunt ut labore et dolore magna aliquyam erat, sed
                        diam voluptua. At vero eos et.
                      </p>
                      <Link to="/flights" class="btn btn_theme btn_md">
                        Get tips
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </div>
    </div>
  )
}

export default Home
