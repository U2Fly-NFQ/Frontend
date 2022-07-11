import React, { useState } from 'react'
import { UserBookingDetail } from '../index'
import { Button, Modal, Space, Table } from 'antd'
import { bookingStatus } from '../../Constants'
import { useNavigate } from 'react-router-dom'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import {
  checkTimeForCancelBooking,
  getURLForBookingAgain,
} from '../../utils/flightDataProcessing'

function UserBookingTable({ loading, data, onCancel }) {
  //initiation
  const [expandedRowKeys, setExpandedRowKeys] = useState([])
  const navigate = useNavigate()

  //Data for UI
  const confirm = (paymentID) => {
    Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you want to cancel this booking?',
      okText: 'Yes',
      cancelText: 'No',
      onOk: () => onCancel(paymentID),
    })
  }
  const bookingListColumn = [
    {
      title: 'Booking ID',
      dataIndex: 'id',
      align: 'center',
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: 'Journey',
      dataIndex: 'flights',
      align: 'center',
      render: (_, { flights }) => (
        <>
          {flights[0].departure}
          {flights.length === 2 ? (
            <i
              style={{ padding: '0 10px' }}
              className="fa-solid fa-arrow-right-arrow-left"
            ></i>
          ) : (
            <i
              style={{ padding: '0 10px' }}
              className="fa-solid fa-arrow-right-long"
            ></i>
          )}
          {flights[0].arrival}
        </>
      ),
    },
    {
      title: 'Booking Amount',
      dataIndex: 'totalPrice',
      align: 'center',
      sorter: (a, b) =>
        parseFloat(a.totalPrice.substring(1)) -
        parseFloat(b.totalPrice.substring(1)),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      align: 'center',
    },
    {
      title: 'Action',
      key: 'action',
      width: '100px',
      dataIndex: 'id',
      align: 'center',
      render: (_, record) => (
        <Space>
          {/* eslint-disable-next-line react/jsx-no-undef */}
          {record.status === bookingStatus[1] && (
            <Button
              type="default"
              shape="default"
              disabled={checkTimeForCancelBooking(
                record.flights[0].startDate,
                record.flights[0].startTime
              )}
              onClick={() => confirm(record.paymentId)}
              data-testid="cancel-btn"
            >
              Cancel
            </Button>
          )}
          {record.status !== bookingStatus[1] && (
            <Button
              type="primary"
              shape="default"
              onClick={() => navigate(getURLForBookingAgain(record))}
            >
              Booking Again
            </Button>
          )}
        </Space>
      ),
    },
  ]
  const onExpandRowKey = (expanded, record) => {
    expanded ? setExpandedRowKeys([record.id]) : setExpandedRowKeys([])
  }

  return (
    <>
      <Table
        columns={bookingListColumn}
        rowKey={(record) => record.id}
        expandable={{
          expandedRowKeys: expandedRowKeys,
          onExpand: onExpandRowKey,
          expandedRowRender: (record) => (
            <UserBookingDetail detailData={record} />
          ),
        }}
        dataSource={data}
        loading={loading}
        scroll={{
          x: 'max-content',
        }}
      />
    </>
  )
}

export default UserBookingTable
