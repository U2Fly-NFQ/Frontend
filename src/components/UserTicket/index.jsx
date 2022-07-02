import React from 'react'
import { Col, Modal, Row } from 'antd'
import './style.scss'

function UserTicket({ visible, setViewTicket }) {
  return (
    <Modal
      className="userTicket"
      visible={visible}
      footer={false}
      onCancel={() => setViewTicket(false)}
    >
      <div className="ticket">
        <Row className="ticket-header">
          <Col span={9} className="ticket-header-logo">
            <img
              src="https://www.vietnamairlines.com/~/media/Images/VNANew/Home/Logo%20Header/logo_vna-mobile.png"
              alt="logo"
            />
          </Col>
          <Col span={9} className="ticket-header-class"></Col>
          <Col span={6} className="ticket-header-right">
            <img
              src="https://www.vietnamairlines.com/~/media/Images/VNANew/Home/Logo%20Header/logo_vna-mobile.png"
              alt="logo"
            />
          </Col>
        </Row>

        <Row gutter={8} className="ticket-content">
          <Col span={17} className="ticket-content-left">
            <Row gutter={8}>
              <Col className="ticket-content-left-barcode" span={4}>
                <img
                  src="https://cdn.pixabay.com/photo/2014/04/02/16/19/barcode-306926__480.png"
                  alt="barcode"
                />
              </Col>
              <Col className="ticket-content-left-info" span={20}>
                <Row className="passenger-info">
                  <Col span={10}>
                    <div className="passenger-info-title">
                      Full Name / Họ và Tên
                    </div>
                    <div className="passenger-info-text">Sang Sáng Sủa</div>
                  </Col>
                  <Col span={6}>
                    <div className="passenger-info-title">
                      Flight/Chuyến Bay
                    </div>
                    <div className="passenger-info-text">MH370</div>
                  </Col>
                  <Col span={4}>
                    <div className="passenger-info-title">Date/Ngày</div>
                    <div className="passenger-info-text">7/7/2022</div>
                  </Col>
                  <Col span={4}>
                    <div className="passenger-info-title">Seat/Ghế</div>
                    <div className="passenger-info-text">..............</div>
                  </Col>
                </Row>
                <Row className="flight-info">
                  <Col span={10} className="flight-info-from">
                    Ho Chi Minh
                  </Col>
                  <Col span={4} className="flight-info-icon">
                    <i className="fa-solid fa-plane"></i>
                  </Col>
                  <Col span={10} className="flight-info-to">
                    Ha Noi
                  </Col>
                </Row>
                <Row className="flight-details">
                  <Col span={6}>
                    <div className="flight-details-title">Gate/Cổng</div>
                    <div className="flight-details-text">..............</div>
                  </Col>
                  <Col span={6}>
                    <div className="flight-details-title">Boarding Time</div>
                    <div className="flight-details-text">7:30 AM</div>
                  </Col>
                  <Col span={6}>
                    <div className="flight-details-title">ETD/Khởi Hành</div>
                    <div className="flight-details-text">8:30 AM</div>
                  </Col>
                  <Col span={6}>
                    <div className="flight-details-title">ETA/Đến Nơi</div>
                    <div className="flight-details-text">10:30 AM</div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={7} className="ticket-content-right">
            <Row>
              <Col span={24} className="barcode">
                <img
                  src="https://cdn.pixabay.com/photo/2014/04/02/16/19/barcode-306926__480.png"
                  alt="barcode"
                />
              </Col>
              <Col span={24} className="flight-info">
                <Row>
                  <Col span={10} className="flight-info-from">
                    Ho Chi Minh
                  </Col>
                  <Col span={4} className="flight-info-icon">
                    <i className="fa-solid fa-plane"></i>
                  </Col>
                  <Col span={10} className="flight-info-to">
                    Ha Noi
                  </Col>
                </Row>
              </Col>
              <Col span={24} className="passenger-info">
                <Row>
                  <Col span={24}>
                    <div className="passenger-info-title">
                      Full Name / Họ và Tên
                    </div>
                    <div className="passenger-info-text">Sang Sáng Sủa</div>
                  </Col>
                  <Col span={24}>
                    <div className="passenger-info-title">
                      Flight/Chuyến Bay
                    </div>
                    <div className="passenger-info-text">MH370</div>
                  </Col>
                  <Col span={24}>
                    <div className="passenger-info-title">Date/Ngày</div>
                    <div className="passenger-info-text">7/7/2022</div>
                  </Col>
                  <Col span={24}>
                    <div className="passenger-info-title">Seat/Ghế</div>
                    <div className="passenger-info-text">..........</div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="ticket-footer">
          <Col span={18} className="ticket-footer-left">
            Gate closes 20 minutes before departure - Cổng đóng 20 phút trước
            khi khởi hành
          </Col>
          <Col span={6} className="ticket-footer-right">
            Hotline: 19XX XXX XXX
          </Col>
        </Row>
      </div>
    </Modal>
  )
}

export default UserTicket
