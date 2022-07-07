import React, { useState } from 'react'
import { UserBookingDetail } from '../index'
import { Button, Space, Table } from 'antd'
import { bookingStatus } from '../../Constants'
import { useNavigate } from 'react-router-dom'
import ModalRating from '../ModalRating'

function UserBookingTable({ loading, data }) {
  //initiation
  const [expandedRowKeys, setExpandedRowKeys] = useState([])
  const [currentId, setCurrentId] = useState()
  const navigate = useNavigate()
  //Data for UI
  const [isModalVisible, setIsModalVisible] = useState(false)
  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
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
      sorter: (a, b) => a.totalPrice - b.totalPrice,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      align: 'center',
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: 'Action',
      key: 'action',
      dataIndex: 'id',
      width: 100,
      align: 'center',
      render: (_, record) => (
        <Space>
          {/* eslint-disable-next-line react/jsx-no-undef */}
          {record.status === bookingStatus['0'] && (
            <Button
              danger
              type="primary"
              shape="default"
              // onClick={() => ()}
            >
              Cancel
            </Button>
          )}
          {(record.status === bookingStatus['1'] ||
            record.status === bookingStatus['3']) && (
            <Button
              type="default"
              shape="default"
              onClick={() => navigate('/')}
            >
              Booking Again
            </Button>
          )}
          {record.status === bookingStatus['2'] && (
            <Button
              type="primary"
              shape="default"
              onClick={() => {
                showModal()
                setCurrentId(record.id)
              }}
            >
              Rating
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
      <ModalRating
        visible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        handleCancel={handleCancel}
      />
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
