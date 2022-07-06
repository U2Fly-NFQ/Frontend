import React from 'react'
import sadIcon from '../../assets/icons/boring.gif'
import happyIcon from '../../assets/icons/happy.gif'
import normalIcon from '../../assets/icons/normal.gif'
import loveIcon from '../../assets/icons/love.gif'
import { Modal, Tooltip, Input } from 'antd'
import './index.scss'
const { TextArea } = Input
export default function ModalRating({ visible }) {
  return (
    <Modal visible={visible}>
      <div className="modal-rating">
        <div className="modal-rating__title">
          <h3>Rating</h3>
        </div>
        <div className="modal-rating__items">
          <div className="modal-rating__image">
            <Tooltip title="sad">
              <img src={sadIcon} alt="" />
            </Tooltip>
          </div>
          <div className="modal-rating__image">
            <Tooltip title="normal">
              <img src={normalIcon} alt="" />
            </Tooltip>
          </div>
          <div className="modal-rating__image">
            <Tooltip title="happy">
              <img src={happyIcon} alt="" />
            </Tooltip>
          </div>
          <div className="modal-rating__image">
            <Tooltip title="love">
              <img src={loveIcon} alt="" />
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="modal-rating__descrip">
        <div className="modal-rating__title">
          <h3>description</h3>
        </div>
        <div>
          <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
        </div>
      </div>
    </Modal>
  )
}
