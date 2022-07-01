import React from 'react'
import { Modal } from 'antd'
import './ticketStyle.css'
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
        <div id="barBig">
          {/* <img src="https://www.incimages.com/uploaded_files/image/1024x576/*Barcode_32896.jpg" alt="Bar Code"> */}
        </div>
        <div id="mainInfo">
          <div className="passenger-info-container">
            <div className="passenger-info">
              <span>Name of Passenger</span>
              <span className="details">Sang Sáng Sủa</span>
            </div>
            <div className="passenger-info">
              <span>Flight</span>
              <span className="details">MH37*</span>
            </div>
            <div className="passenger-info">
              <span>Date</span>
              <span className="details">2/7/22</span>
            </div>
            <div className="passenger-info">
              <span>Seat</span>
              <span className="details">........</span>
            </div>
          </div>
          <h1 className="destination">
            Can Tho
            <img
              src="https://i.pinimg.com/originals/e9/0a/29/e90a299a041b7d37cdafc6eb2905e9d6.png"
              alt="Destination"
            />
            Ha Noi
          </h1>
          <div className="flight-info-container">
            {/*<div className="flight-info">*/}
            {/*  <span>Gate</span>*/}
            {/*  <span>D 12</span>*/}
            {/*</div>*/}
            <div className="flight-info">
              <span>Boarding Time</span>
              <span>8:00 AM IST</span>
            </div>
            <div className="flight-info">
              <span>ETD</span>
              <span>8:30 AM IST</span>
            </div>
            <div className="flight-info">
              <span>ETA</span>
              <span>10:15 AM IST</span>
            </div>
          </div>
          <p className="note">Gate closes 20 minutes before departure</p>
        </div>
        <div id="circles">
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
        </div>
        <div id="sideInfo">
          <img
            src="https://www.incimages.com/uploaded_files/image/1024x576/*Barcode_32896.jpg"
            alt="Small Bar"
            id="barSmall"
          />
          <div className="details-container">
            <div className="flight-details">
              <div>
                <span>Name of Passenger</span>
                <span>Sang Sáng Sủa</span>
              </div>
              <div>
                <span>Flight</span>
                <span>MH37*</span>
              </div>
              <div>
                <span>Date</span>
                <span>2/7/22</span>
              </div>
              <div>
                <span>Seat</span>
                <span>..........</span>
              </div>
            </div>
            <div className="destination-details">
              CanTho
              <img
                src="https://i.pinimg.com/originals/e9/0a/29/e90a299a041b7d37cdafc6eb2905e9d6.png"
                alt="Destination"
              />
              HaNoi
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default UserTicket
