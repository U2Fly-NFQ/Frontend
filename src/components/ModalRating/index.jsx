import React, { useState } from 'react'
import sadIcon from '../../assets/icons/boring.gif'
import happyIcon from '../../assets/icons/happy.gif'
import normalIcon from '../../assets/icons/normal.gif'
import loveIcon from '../../assets/icons/love.gif'
import cryingIcon from '../../assets/icons/crying.gif'
import { Modal, Tooltip, Input } from 'antd'
import './index.scss'
import { message } from 'antd/es'

const { TextArea } = Input

export default function ModalRating({ visible, setIsModalVisible, rating }) {
  const [status, setStatus] = useState()
  const [description, setDescription] = useState()
  const handleOK = () => {
    if (!status) {
      message.error('Please choose your emotion')
      return false
    }
    rating({
      status,
      description,
    })
    handleCancel()
  }
  const handleCancel = () => {
    setStatus('')
    setDescription('')
    setIsModalVisible(false)
  }
  return (
    <Modal visible={visible} onOk={handleOK} onCancel={handleCancel}>
      <div className="modal-rating">
        <div className="modal-rating__title">
          <h3>How do you feel about this trip ?</h3>
        </div>
        <div className="modal-rating__items">
          <div className="modal-rating__image">
            <Tooltip title="too bad">
              <img
                src={cryingIcon}
                alt=""
                onClick={() => {
                  setStatus(0)
                }}
                style={{
                  filter: status !== 0 ? 'grayscale(100%)' : 'grayscale(0)',
                }}
              />
            </Tooltip>
          </div>
          <div className="modal-rating__image">
            <Tooltip title="sad">
              <img
                src={sadIcon}
                alt=""
                onClick={() => {
                  setStatus(1)
                }}
                style={{
                  filter: status !== 1 ? 'grayscale(100%)' : 'grayscale(0)',
                }}
              />
            </Tooltip>
          </div>
          <div className="modal-rating__image">
            <Tooltip title="normal">
              <img
                src={normalIcon}
                alt=""
                onClick={() => {
                  setStatus(2)
                }}
                style={{
                  filter: status !== 2 ? 'grayscale(100%)' : 'grayscale(0)',
                }}
              />
            </Tooltip>
          </div>
          <div className="modal-rating__image">
            <Tooltip title="happy">
              <img
                src={happyIcon}
                alt=""
                onClick={() => {
                  setStatus(3)
                }}
                style={{
                  filter: status !== 3 ? 'grayscale(100%)' : 'grayscale(0)',
                }}
              />
            </Tooltip>
          </div>
          <div className="modal-rating__image">
            <Tooltip title="love">
              <img
                src={loveIcon}
                alt=""
                onClick={() => {
                  setStatus(4)
                }}
                style={{
                  filter: status !== 4 ? 'grayscale(100%)' : 'grayscale(0)',
                }}
              />
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="modal-rating__description">
        <div className="modal-rating__title">
          <h3>Description</h3>
        </div>
        <div>
          <TextArea
            rows={4}
            placeholder="Enter your comment here!"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value)
            }}
          />
        </div>
      </div>
    </Modal>
  )
}
