import React from 'react'
import { Col, Modal, Row } from 'antd'
import './style.scss'
import moment from 'moment'

function UserTicket({ visible, setViewTicket, ticketData }) {
  return (
    <Modal
      className="userTicket"
      visible={visible}
      footer={false}
      onCancel={() => setViewTicket(false)}
    >
      <div className="ticket">
        <Row justify="space-between" className="ticket-header">
          <Col span={8} className="ticket-header-logo">
            <img src={ticketData.flights.airline.image} alt="logo" />
          </Col>
          <Col span={8} className="ticket-header-class"></Col>
          <Col span={7} className="ticket-header-right">
            <img src={ticketData.flights.airline.image} alt="logo" />
          </Col>
        </Row>

        <Row justify="space-between" className="ticket-content">
          <Col span={16} className="ticket-content-left">
            <Row gutter={8}>
              <Col className="ticket-content-left-barcode" span={4}>
                <img
                  src="https://cdn.pixabay.com/photo/2014/04/02/16/19/barcode-306926__480.png"
                  alt="barcode"
                />
              </Col>
              <Col className="ticket-content-left-info" span={20}>
                <Row justify="space-between" className="passenger-info">
                  <Col span={8}>
                    <div className="passenger-info-title">
                      Full Name / Họ và Tên
                    </div>
                    <div className="passenger-info-text">
                      {ticketData.passenger.name}
                    </div>
                  </Col>
                  <Col span={6}>
                    <div className="passenger-info-title">
                      Flight/Chuyến Bay
                    </div>
                    <div className="passenger-info-text">
                      {ticketData.flights.code}
                    </div>
                  </Col>
                  <Col span={4}>
                    <div className="passenger-info-title">Date/Ngày</div>
                    <div className="passenger-info-text">
                      {moment(ticketData.flights.startDate).format('DD/M/YYYY')}
                    </div>
                  </Col>
                  <Col span={3} className="info_empty">
                    <div className="passenger-info-title">Seat/Ghế</div>
                    <div className="passenger-info-text">&nbsp;</div>
                  </Col>
                </Row>
                <Row className="flight-info">
                  <Col span={10} className="flight-info-from">
                    {ticketData.flights.departure}
                  </Col>
                  <Col span={4} className="flight-info-icon">
                    <i className="fa-solid fa-plane"></i>
                  </Col>
                  <Col span={10} className="flight-info-to">
                    {ticketData.flights.arrival}
                  </Col>
                </Row>
                <Row justify="space-between" className="flight-details">
                  <Col span={5} className="info_empty">
                    <div className="flight-details-title">Gate/Cổng</div>
                    <div className="flight-details-text">&nbsp;</div>
                  </Col>
                  <Col span={5}>
                    <div className="flight-details-title">Boarding Time</div>
                    <div className="flight-details-text">
                      {ticketData.flights.boardingTime}
                    </div>
                  </Col>
                  <Col span={5}>
                    <div className="flight-details-title">ETD/Khởi Hành</div>
                    <div className="flight-details-text">
                      {ticketData.flights.ETD}
                    </div>
                  </Col>
                  <Col span={5}>
                    <div className="flight-details-title">ETA/Đến Nơi</div>
                    <div className="flight-details-text">
                      {ticketData.flights.ETA}
                    </div>
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
              <Col span={24}>
                <Row className="flight-info">
                  <Col span={10} className="flight-info-from">
                    {ticketData.flights.departure}
                  </Col>
                  <Col span={4} className="flight-info-icon">
                    <i className="fa-solid fa-plane"></i>
                  </Col>
                  <Col span={10} className="flight-info-to">
                    {ticketData.flights.arrival}
                  </Col>
                </Row>
              </Col>
              <Col span={24} className="passenger-info">
                <Row>
                  <Col span={24}>
                    <div className="passenger-info-title">
                      Full Name / Họ và Tên
                    </div>
                    <div className="passenger-info-text">
                      {ticketData.passenger.name}
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="passenger-info-title">
                      Flight/Chuyến Bay
                    </div>
                    <div className="passenger-info-text">
                      {ticketData.flights.code}
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="passenger-info-title">Date/Ngày</div>
                    <div className="passenger-info-text">
                      {moment(ticketData.flights.startDate).format('DD/M/YYYY')}
                    </div>
                  </Col>
                  <Col span={24} className="info_empty">
                    <div className="passenger-info-title">Seat/Ghế</div>
                    <div className="passenger-info-text">&nbsp;</div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row justify="space-between" className="ticket-footer">
          <Col span={16} className="ticket-footer-left">
            Gate closes 20 minutes before departure - Cổng đóng 20 phút trước
            khi khởi hành
          </Col>
          <Col span={7} className="ticket-footer-right">
            Hotline: 19XX XXX XXX
          </Col>
        </Row>
      </div>
    </Modal>
  )
}

export default UserTicket
